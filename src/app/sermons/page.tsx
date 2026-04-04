"use client";

import { useState, useMemo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, Calendar, User, Tag, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { sermons } from "@/lib/data";

export default function SermonsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSeries, setSelectedSeries] = useState("All");
    const [selectedSpeaker, setSelectedSpeaker] = useState("All");
    const [selectedTopic, setSelectedTopic] = useState("All");

    const filterOptions = useMemo(() => {
        return {
            series: ["All", ...Array.from(new Set(sermons.map((s) => s.series)))],
            speakers: ["All", ...Array.from(new Set(sermons.map((s) => s.speaker)))],
            topics: ["All", ...Array.from(new Set(sermons.map((s) => s.topic)))],
        };
    }, []);

    const filteredSermons = useMemo(() => {
        return sermons.filter((sermon) => {
            const matchesSearch =
                sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                sermon.series.toLowerCase().includes(searchQuery.toLowerCase()) ||
                sermon.speaker.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesSeries = selectedSeries === "All" || sermon.series === selectedSeries;
            const matchesSpeaker = selectedSpeaker === "All" || sermon.speaker === selectedSpeaker;
            const matchesTopic = selectedTopic === "All" || sermon.topic === selectedTopic;

            return matchesSearch && matchesSeries && matchesSpeaker && matchesTopic;
        });
    }, [searchQuery, selectedSeries, selectedSpeaker, selectedTopic]);

    const latestSermon = sermons[0];

    return (
        <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
            <Navbar />

            <main className="flex-1 pt-24">
                {/* Featured Latest Sermon */}
                <section className="bg-primary pt-16 pb-32 px-6 md:px-10 relative overflow-hidden">
                    {/* Ambient Glow */}
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

                    <div className="container mx-auto relative z-10">
                        <div className="flex flex-col lg:flex-row gap-20 items-center">
                            <div className="lg:w-7/12 w-full">
                                <a
                                    href={latestSermon.youtubeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block aspect-video bg-black/60 relative group overflow-hidden shadow-2xl border border-white/5"
                                >
                                    <Image
                                        src={latestSermon.thumbnail}
                                        alt={latestSermon.title}
                                        fill
                                        className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-24 h-24 border-2 border-white/30 rounded-full flex items-center justify-center pl-1 group-hover:scale-110 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-500">
                                            <Play className="h-10 w-10 text-white" fill="currentColor" />
                                        </div>
                                    </div>
                                    {/* Glass Overlay on Hover */}
                                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                </a>
                            </div>
                            <div className="lg:w-5/12 space-y-10">
                                <div className="space-y-4">
                                    <h2 className="text-xs font-black uppercase tracking-[0.4em] text-accent">Latest Message</h2>
                                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-heading">
                                        {latestSermon.title}
                                    </h1>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex flex-wrap gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-secondary">
                                        <div className="flex items-center"><User className="h-3 w-3 mr-3 text-accent" /> {latestSermon.speaker}</div>
                                        <div className="flex items-center"><Calendar className="h-3 w-3 mr-3 text-accent" /> {latestSermon.date}</div>
                                    </div>
                                    <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/20">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">
                                            {latestSermon.series}
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <a href={latestSermon.youtubeUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                                        <Play className="mr-3 h-4 w-4" fill="currentColor" /> Watch Message
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sermon Archive */}
                <section className="py-32 bg-primary px-6 md:px-10 border-t border-bg-muted">
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-24">
                            <div className="space-y-4">
                                <h2 className="text-xs font-black uppercase tracking-[0.4em] text-accent">Archive</h2>
                                <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-heading leading-[0.9]">
                                    Browse All <br /> Messages
                                </h3>
                            </div>

                            {/* Search Bar */}
                            <div className="relative w-full md:w-96 group">
                                <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary group-focus-within:text-accent transition-colors" />
                                <input
                                    type="text"
                                    placeholder="SEARCH MESSAGES..."
                                    className="w-full pl-10 pr-4 py-4 bg-transparent border-b-2 border-white/10 focus:border-accent text-heading font-bold uppercase tracking-widest text-[10px] focus:outline-none transition-all placeholder:text-secondary/30"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Filters */}
                        <div className="flex flex-wrap gap-12 mb-20 px-1">
                            <div className="flex flex-col space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Series</label>
                                <select
                                    className="text-[10px] font-black uppercase tracking-[0.2em] bg-transparent border-b border-white/10 pb-2 focus:border-accent focus:outline-none cursor-pointer text-secondary hover:text-heading transition-colors"
                                    value={selectedSeries}
                                    onChange={(e) => setSelectedSeries(e.target.value)}
                                >
                                    {filterOptions.series.map(s => <option key={s} value={s} className="bg-primary">{s}</option>)}
                                </select>
                            </div>

                            <div className="flex flex-col space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Speaker</label>
                                <select
                                    className="text-[10px] font-black uppercase tracking-[0.2em] bg-transparent border-b border-white/10 pb-2 focus:border-accent focus:outline-none cursor-pointer text-secondary hover:text-heading transition-colors"
                                    value={selectedSpeaker}
                                    onChange={(e) => setSelectedSpeaker(e.target.value)}
                                >
                                    {filterOptions.speakers.map(s => <option key={s} value={s} className="bg-primary">{s}</option>)}
                                </select>
                            </div>
                        </div>

                        {/* Sermon Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                            {filteredSermons.length > 0 ? (
                                filteredSermons.map((sermon) => (
                                    <div key={sermon.id} className="group cursor-pointer space-y-6">
                                        <div className="relative aspect-video bg-bg-muted overflow-hidden border border-white/5">
                                            <Image
                                                src={sermon.thumbnail}
                                                alt={sermon.title}
                                                fill
                                                className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                            />
                                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
                                            {/* Play Indicator on Hover */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <div className="w-12 h-12 rounded-full bg-accent/90 flex items-center justify-center pl-1 shadow-xl">
                                                    <Play className="h-5 w-5 text-white" fill="currentColor" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">{sermon.series}</p>
                                                <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-heading group-hover:text-accent transition-colors leading-tight">
                                                    {sermon.title}
                                                </h4>
                                            </div>
                                            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-secondary">
                                                <span>{sermon.speaker}</span>
                                                <span className="opacity-50">{sermon.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full py-32 text-center border-2 border-dashed border-white/5">
                                    <h3 className="text-xl font-black uppercase tracking-tighter text-secondary/40">No messages found.</h3>
                                    <button
                                        onClick={() => {
                                            setSearchQuery("");
                                            setSelectedSeries("All");
                                            setSelectedSpeaker("All");
                                            setSelectedTopic("All");
                                        }}
                                        className="mt-8 text-accent hover:text-heading font-black uppercase tracking-widest text-[10px] transition-colors"
                                    >
                                        Clear all filters &times;
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

