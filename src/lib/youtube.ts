export interface YouTubeVideo {
    id: string;
    title: string;
    published: string;
    displayDate: string;
    thumbnail: string;
    videoEmbedUrl: string;
    youtubeUrl: string;
    channelName: string;
}

const YOUTUBE_HANDLE = "CHTMIbadanHQ";
const CHANNEL_PAGE_URL = `https://www.youtube.com/@${YOUTUBE_HANDLE}`;

// Cache the resolved channel ID in-memory across requests (persists for the lifetime of the server process)
let cachedChannelId: string | null = null;

/**
 * Resolves a YouTube handle to a channel ID by fetching the channel page
 * and extracting the ID from the HTML source.
 */
async function resolveChannelId(): Promise<string | null> {
    if (cachedChannelId) return cachedChannelId;

    try {
        const response = await fetch(CHANNEL_PAGE_URL, {
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                Accept: "text/html",
            },
            next: { revalidate: 86400 }, // Cache channel ID resolution for 24 hours
        });

        if (!response.ok) return null;

        const html = await response.text();

        // YouTube embeds the channelId in several places in the page source
        const patterns = [
            /\"channelId\":\"(UC[a-zA-Z0-9_-]{22})\"/,
            /channel\/(UC[a-zA-Z0-9_-]{22})/,
            /\"externalId\":\"(UC[a-zA-Z0-9_-]{22})\"/,
        ];

        for (const pattern of patterns) {
            const match = html.match(pattern);
            if (match?.[1]) {
                cachedChannelId = match[1];
                console.log(`[YouTube] Resolved channel ID: ${cachedChannelId}`);
                return cachedChannelId;
            }
        }

        console.warn("[YouTube] Could not find channel ID in page source");
        return null;
    } catch (error) {
        console.error("[YouTube] Failed to resolve channel ID:", error);
        return null;
    }
}

/**
 * Decodes XML entities in text content.
 */
function decodeXmlEntities(text: string): string {
    return text
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&apos;/g, "'");
}

/**
 * Formats an ISO date string into a readable display date.
 */
function formatDate(isoDate: string): string {
    try {
        const date = new Date(isoDate);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    } catch {
        return isoDate;
    }
}

/**
 * Fetches the latest videos from the YouTube channel's RSS feed.
 * Returns an empty array on failure (caller should fall back to static data).
 */
export async function fetchLatestVideos(count: number = 15): Promise<YouTubeVideo[]> {
    try {
        const channelId = await resolveChannelId();
        if (!channelId) {
            console.warn("[YouTube] No channel ID available, returning empty results");
            return [];
        }

        const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
        const response = await fetch(rssUrl, {
            next: { revalidate: 3600 }, // Re-fetch from YouTube every hour
        });

        if (!response.ok) {
            console.warn(`[YouTube] RSS feed returned status ${response.status}`);
            return [];
        }

        const xml = await response.text();

        // Extract the channel/author name
        const channelName =
            xml.match(/<author>\s*<name>(.*?)<\/name>/)?.[1] || "Christ Heritage Tabernacle Ministries";

        // Parse each <entry> element
        const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) || [];

        return entries.slice(0, count).map((entry) => {
            const videoId = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1] || "";
            const title = decodeXmlEntities(entry.match(/<title>(.*?)<\/title>/)?.[1] || "Untitled");
            const published = entry.match(/<published>(.*?)<\/published>/)?.[1] || "";

            return {
                id: videoId,
                title,
                published,
                displayDate: formatDate(published),
                thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
                videoEmbedUrl: `https://www.youtube.com/embed/${videoId}`,
                youtubeUrl: `https://www.youtube.com/watch?v=${videoId}`,
                channelName: decodeXmlEntities(channelName),
            };
        });
    } catch (error) {
        console.error("[YouTube] Failed to fetch latest videos:", error);
        return [];
    }
}
