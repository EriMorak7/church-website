"use client";

import { useState, useMemo, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Search, Calendar, User, Play } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import type { YouTubeVideo } from "@/lib/youtube";

interface SermonItem {
    id: string | number;
    title: string;
    speaker: string;
    date: string;
    thumbnail: string;
    youtubeUrl: string;
    series?: string;
}

export default function SermonsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [videos, setVideos] = useState<SermonItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function loadVideos() {
            try {
                const res = await fetch("/api/youtube");
                const data = await res.json();
                if (data.success && data.videos.length > 0) {
                    const mapped: SermonItem[] = data.videos.map((v: YouTubeVideo) => ({
                        id: v.id,
                        title: v.title,
                        speaker: v.channelName,
                        date: v.displayDate,
                        thumbnail: v.thumbnail,
                        youtubeUrl: v.youtubeUrl,
                    }));
                    setVideos(mapped);
                } else {
                    setError(true);
                }
            } catch {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        loadVideos();
    }, []);

    const latestSermon = videos[0];

    const filteredSermons = useMemo(() => {
        if (!searchQuery.trim()) return videos.slice(1);
        return videos.filter((sermon) =>
            sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            sermon.speaker.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery, videos]);

    return (
        <div className="min-h-screen flex flex-col font-sans overflow-x-hidden bg-primary text-white">
            <Navbar />

            <main className="flex-1 pt-24">
                {/* Featured Latest Sermon */}
                <section className="bg-surface pt-16 pb-32 px-6 md:px-10 relative overflow-hidden border-b border-white/5">
                    {/* Ambient Glow */}
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />

                    <div className="container mx-auto relative z-10">
                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-16 space-y-8">
                                <div className="w-16 h-16 border-2 border-accent/20 border-t-accent rounded-full animate-spin" />
                                <p className="text-sm font-black uppercase tracking-[0.4em] text-white/40 animate-pulse">
                                    Loading from YouTube...
                                </p>
                            </div>
                        ) : error || !latestSermon ? (
                            <div className="flex flex-col items-center justify-center py-16 space-y-6">
                                <p className="text-white/60 text-center">Could not load videos. Please check back later.</p>
                                <a
                                    href="https://www.youtube.com/@CHTMIbadanHQ"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
                                >
                                    Visit our YouTube Channel
                                </a>
                            </div>
                        ) : (
                            <div className="flex flex-col lg:flex-row gap-20 items-center">
                                <div className="lg:w-7/12 w-full">
                                    <a
                                        href={latestSermon.youtubeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block aspect-video relative group overflow-hidden shadow-2xl border border-white/5 glow-gold"
                                    >
                                        <Image
                                            src={latestSermon.thumbnail}
                                            alt={latestSermon.title}
                                            fill
                                            className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-24 h-24 border-2 border-white/20 rounded-full flex items-center justify-center pl-1 group-hover:scale-110 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-500">
                                                <Play className="h-10 w-10 text-white group-hover:text-accent" fill="currentColor" />
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    </a>
                                </div>
                                <div className="lg:w-5/12 space-y-10">
                                    <div className="space-y-4">
                                        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-accent">Latest Message</h2>
                                        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] text-white">
                                            {latestSermon.title}
                                        </h1>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex flex-wrap gap-8 text-sm font-black uppercase tracking-[0.2em] text-white/60">
                                            <div className="flex items-center"><User className="h-3 w-3 mr-3 text-accent" /> {latestSermon.speaker}</div>
                                            <div className="flex items-center"><Calendar className="h-3 w-3 mr-3 text-accent" /> {latestSermon.date}</div>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <a href={latestSermon.youtubeUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "primary", size: "lg" })}>
                                            <Play className="mr-3 h-4 w-4" fill="currentColor" /> Watch Message
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* Sermon Archive */}
                <section className="py-16 bg-primary px-6 md:px-10 border-t border-white/5">
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-24">
                            <div className="space-y-4">
                                <h2 className="text-xs font-black uppercase tracking-[0.4em] text-accent">Archive</h2>
                                <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white leading-[0.9]">
                                    Browse All <br /> Messages
                                </h3>
                            </div>

                            {/* Search Bar */}
                            <div className="relative w-full md:w-96 group">
                                <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30 group-focus-within:text-accent transition-colors" />
                                <input
                                    type="text"
                                    placeholder="SEARCH MESSAGES..."
                                    className="w-full pl-10 pr-4 py-4 bg-transparent border-b-2 border-white/10 focus:border-accent text-white font-bold uppercase tracking-widest text-sm focus:outline-none transition-all placeholder:text-white/20"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Sermon Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                            {loading ? (
                                Array.from({ length: 6 }).map((_, i) => (
                                    <div key={i} className="space-y-6 animate-pulse">
                                        <div className="aspect-video bg-white/5 border border-white/5" />
                                        <div className="space-y-3">
                                            <div className="h-3 bg-white/5 rounded w-1/3" />
                                            <div className="h-5 bg-white/5 rounded w-full" />
                                            <div className="h-5 bg-white/5 rounded w-2/3" />
                                            <div className="flex justify-between">
                                                <div className="h-3 bg-white/5 rounded w-1/4" />
                                                <div className="h-3 bg-white/5 rounded w-1/4" />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : filteredSermons.length > 0 ? (
                                filteredSermons.map((sermon) => (
                                    <a
                                        key={sermon.id}
                                        href={sermon.youtubeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group cursor-pointer space-y-6 block"
                                    >
                                        <div className="relative aspect-video bg-surface overflow-hidden border border-white/5 group-hover:border-accent/20 transition-all duration-500">
                                            <Image
                                                src={sermon.thumbnail}
                                                alt={sermon.title}
                                                fill
                                                className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                                unoptimized
                                            />
                                            <div className="absolute inset-0 bg-primary/30 group-hover:bg-transparent transition-colors duration-500" />
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <div className="w-12 h-12 rounded-full bg-accent/90 flex items-center justify-center pl-1 shadow-xl">
                                                    <Play className="h-5 w-5 text-primary" fill="currentColor" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white/80 group-hover:text-white transition-colors leading-tight">
                                                    {sermon.title}
                                                </h4>
                                            </div>
                                            <div className="flex justify-between items-center text-sm font-black uppercase tracking-[0.2em] text-white/40">
                                                <span>{sermon.speaker}</span>
                                                <span>{sermon.date}</span>
                                            </div>
                                        </div>
                                    </a>
                                ))
                            ) : (
                                <div className="col-span-full py-16 text-center border-2 border-dashed border-white/5">
                                    <h3 className="text-xl font-black uppercase tracking-tighter text-white/60">No messages found.</h3>
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="mt-8 text-accent/70 hover:text-accent font-black uppercase tracking-widest text-sm transition-colors"
                                    >
                                        Clear search &times;
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* YouTube Channel Link */}
                        <div className="mt-24 text-center">
                            <a
                                href="https://www.youtube.com/@CHTMIbadanHQ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    buttonVariants({ variant: "outline", size: "lg" }),
                                    "group rounded-none px-10 py-8 uppercase text-sm font-black tracking-widest transition-all duration-500"
                                )}
                            >
                                View All on YouTube
                                <svg className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
