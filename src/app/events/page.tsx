"use client";

import { useState, useMemo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { events } from "@/lib/data";
import { Calendar, MapPin, Clock, Filter, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function EventsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", ...Array.from(new Set(events.map(e => e.category)))];

    const filteredEvents = useMemo(() => {
        return selectedCategory === "All"
            ? events
            : events.filter(e => e.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <div className="min-h-screen flex flex-col bg-primary text-white">
            <Navbar />

            <main className="flex-1 pt-24">
                {/* Page Header */}
                <section className="bg-surface py-16 border-b border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
                    <div className="container mx-auto px-6 md:px-10 relative z-10">
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-4">Events</h2>
                        <h1 className="font-sans text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4 leading-[0.9]">Upcoming Events</h1>
                        <p className="text-white/50 text-lg max-w-2xl">
                            There&apos;s always something happening at Christ Heritage. Find a way to get connected and grow with us.
                        </p>
                    </div>
                </section>

                {/* Categories / Filters */}
                <section className="sticky top-[64px] z-30 bg-primary/90 backdrop-blur-xl border-b border-white/5 py-4">
                    <div className="container mx-auto px-6 md:px-10">
                        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-hide">
                            <Filter className="h-4 w-4 text-accent/60 mr-2 flex-shrink-0" />
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={cn(
                                        "px-4 py-1.5 rounded-none text-sm font-bold uppercase tracking-widest transition-all whitespace-nowrap border",
                                        selectedCategory === category
                                            ? "bg-accent text-primary border-accent"
                                            : "bg-transparent text-white/50 border-white/10 hover:border-accent/30 hover:text-white/80"
                                    )}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Events Grid */}
                <section className="py-16">
                    <div className="container mx-auto px-6 md:px-10">
                        <div className="flex flex-col space-y-8">
                            {filteredEvents.length > 0 ? (
                                filteredEvents.map((event) => (
                                    <div key={event.id} className="group border border-white/5 hover:border-accent/20 transition-all duration-500 overflow-hidden bg-surface">
                                        <div className="flex flex-col lg:flex-row">
                                            {/* Image side */}
                                            <div className="relative h-64 lg:h-auto lg:w-1/3 overflow-hidden">
                                                <Image
                                                    src={event.image}
                                                    alt={event.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-primary/30 group-hover:bg-transparent transition-colors duration-500" />
                                                <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur px-3 py-1 text-primary font-bold text-sm">
                                                    {event.category}
                                                </div>
                                            </div>

                                            {/* Content side */}
                                            <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
                                                <div className="space-y-4">
                                                    <h2 className="font-sans text-3xl font-black uppercase tracking-tighter text-white group-hover:text-accent transition-colors duration-300">
                                                        {event.title}
                                                    </h2>

                                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-white/50">
                                                        <div className="flex items-center">
                                                            <Calendar className="h-5 w-5 mr-2 text-accent/60" />
                                                            <span className="font-medium">{event.displayDate}</span>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <Clock className="h-5 w-5 mr-2 text-accent/60" />
                                                            <span>{event.time}</span>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <MapPin className="h-5 w-5 mr-2 text-accent/60" />
                                                            <span>{event.location}</span>
                                                        </div>
                                                    </div>

                                                    <p className="text-white/40 leading-relaxed max-w-3xl">
                                                        {event.description}
                                                    </p>

                                                    <div className="pt-4 flex items-center justify-between">
                                                        <div className="flex gap-4">
                                                            <button className="bg-accent text-primary px-6 py-2 font-bold text-sm uppercase tracking-widest hover:bg-accent-hover transition-colors">
                                                                Register Now
                                                            </button>
                                                            <button className="text-white/50 font-bold text-sm uppercase tracking-widest flex items-center hover:text-accent transition-colors">
                                                                Learn More <ChevronRight className="h-4 w-4 ml-1" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="py-20 text-center border-2 border-dashed border-white/5">
                                    <p className="text-xl text-white/50">No events found in this category.</p>
                                    <button
                                        onClick={() => setSelectedCategory("All")}
                                        className="mt-4 text-accent font-bold hover:text-accent-hover transition-colors"
                                    >
                                        View all events
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
