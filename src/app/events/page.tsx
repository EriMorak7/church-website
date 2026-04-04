"use client";

import { useState, useMemo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { events } from "@/lib/data";
import { Calendar, MapPin, Clock, Filter, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 pt-24 bg-white">
                {/* Page Header */}
                <section className="bg-gray-50 py-16 border-b border-gray-100">
                    <div className="container mx-auto px-4 md:px-6">
                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-main mb-4">Upcoming Events</h1>
                        <p className="text-gray-500 text-lg max-w-2xl">
                            There's always something happening at Grace Community. Find a way to get connected and grow with us.
                        </p>
                    </div>
                </section>

                {/* Categories / Filters */}
                <section className="sticky top-[64px] z-30 bg-white/80 backdrop-blur-sm border-b border-gray-100 py-4 shadow-sm">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-hide">
                            <Filter className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={cn(
                                        "px-4 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                                        selectedCategory === category
                                            ? "bg-accent text-white"
                                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col space-y-8">
                            {filteredEvents.length > 0 ? (
                                filteredEvents.map((event) => (
                                    <Card key={event.id} className="group border-none shadow-sm hover:shadow-md transition-all overflow-hidden bg-gray-50">
                                        <div className="flex flex-col lg:flex-row">
                                            {/* Image side */}
                                            <div className="relative h-64 lg:h-auto lg:w-1/3 overflow-hidden">
                                                <Image
                                                    src={event.image}
                                                    alt={event.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                />
                                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-accent font-bold text-sm shadow-sm">
                                                    {event.category}
                                                </div>
                                            </div>

                                            {/* Content side */}
                                            <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
                                                <div className="space-y-4">
                                                    <h2 className="font-serif text-3xl font-bold text-text-main group-hover:text-accent transition-colors">
                                                        {event.title}
                                                    </h2>

                                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-600">
                                                        <div className="flex items-center">
                                                            <Calendar className="h-5 w-5 mr-2 text-accent" />
                                                            <span className="font-medium">{event.displayDate}</span>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <Clock className="h-5 w-5 mr-2 text-accent" />
                                                            <span>{event.time}</span>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <MapPin className="h-5 w-5 mr-2 text-accent" />
                                                            <span>{event.location}</span>
                                                        </div>
                                                    </div>

                                                    <p className="text-gray-500 leading-relaxed max-w-3xl">
                                                        {event.description}
                                                    </p>

                                                    <div className="pt-4 flex items-center justify-between">
                                                        <div className="flex gap-4">
                                                            <button className="bg-accent text-white px-6 py-2 rounded-md font-semibold hover:bg-accent/90 shadow-sm">
                                                                Register Now
                                                            </button>
                                                            <button className="text-text-main font-semibold flex items-center hover:text-accent transition-colors">
                                                                Learn More <ChevronRight className="h-4 w-4 ml-1" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                ))
                            ) : (
                                <div className="py-20 text-center border-2 border-dashed border-gray-100 rounded-3xl">
                                    <p className="text-xl text-gray-500">No events found in this category.</p>
                                    <button
                                        onClick={() => setSelectedCategory("All")}
                                        className="mt-4 text-accent font-bold hover:underline"
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
