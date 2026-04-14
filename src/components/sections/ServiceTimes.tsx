import Link from "next/link";
import { churchInfo } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export function ServiceTimes() {
    return (
        <section className="bg-surface py-16 px-6 md:px-10 border-y border-white/5 relative overflow-hidden">
            {/* Background ambient glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-32 relative">
                    {/* Artistic Vertical Divider */}
                    <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex-col items-center justify-between py-4">
                        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent animate-shimmer" />
                        <div className="w-2 h-2 rounded-full border border-accent/40 bg-accent/20" />
                        <div className="w-[1px] h-full bg-gradient-to-t from-transparent via-accent/20 to-transparent" />
                    </div>

                    <div className="space-y-12">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <h2 className="text-sm font-black uppercase tracking-[0.5em] text-accent">Gathering Times</h2>
                                <div className="flex-1 h-[1px] bg-white/5" />
                            </div>
                            <div className="space-y-8">
                                <div className="space-y-2">
                                    <p className="text-sm font-bold uppercase tracking-widest text-white/40">Sunday Services</p>
                                    <p className="font-sans text-6xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.85]">
                                        Sundays at 8:30 AM
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm font-bold uppercase tracking-widest text-white/40">Midweek Gathering</p>
                                    <p className="font-sans text-2xl md:text-3xl font-black uppercase tracking-tighter text-white/80 leading-tight">
                                        Mondays at 5:00 PM <br /> Wednesdays at 5:30 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <h2 className="text-sm font-black uppercase tracking-[0.5em] text-accent">Our Location</h2>
                                <div className="flex-1 h-[1px] bg-white/5" />
                            </div>
                            <div className="space-y-8">
                                <p className="font-sans text-2xl md:text-4xl font-black uppercase tracking-tighter text-white/80 leading-tight max-w-sm">
                                    {churchInfo.address}
                                </p>
                                <div className="pt-6">
                                    <Link 
                                        href="/plan-visit" 
                                        className="group inline-flex items-center text-sm font-black uppercase tracking-[0.3em] text-accent/80 hover:text-accent transition-all duration-300"
                                    >
                                        Plan Your Visit
                                        <ArrowRight className="ml-4 h-4 w-4 transition-transform group-hover:translate-x-3" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
