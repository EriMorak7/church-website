import { NextResponse } from "next/server";
import { fetchLatestVideos } from "@/lib/youtube";

export const revalidate = 3600; // Revalidate this API route every hour

export async function GET() {
    try {
        const videos = await fetchLatestVideos(15);
        return NextResponse.json({ videos, success: true });
    } catch (error) {
        console.error("[API /youtube] Error:", error);
        return NextResponse.json({ videos: [], success: false }, { status: 500 });
    }
}
