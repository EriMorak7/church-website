import { Baby, Users, Music, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ministries } from "@/lib/data";

const iconMap = {
    Baby: Baby,
    Users: Users,
    Music: Music,
    Heart: Heart,
};

export function MinistriesGrid() {
    return (
        <section className="py-16 bg-surface px-6 md:px-10 relative overflow-hidden">
            {/* Subtle ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/3 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-xl space-y-4">
                        <h2 className="text-sm font-black uppercase tracking-[0.5em] text-accent">Our Ministries</h2>
                        <h3 className="font-sans text-6xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.9]">
                            Find Your <br /> Place Here
                        </h3>
                    </div>
                    <Link href="/ministries" className="text-sm font-black uppercase tracking-[0.3em] text-accent/70 hover:text-accent transition-colors flex items-center group">
                        Explore All <ArrowRight className="ml-4 h-4 w-4 transition-transform group-hover:translate-x-2" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
                    {ministries.map((ministry) => {
                        const Icon = iconMap[ministry.icon as keyof typeof iconMap] || Heart;
                        return (
                            <div key={ministry.title} className="bg-primary p-12 space-y-8 transition-all duration-500 hover:bg-surface-light group">
                                <div className="p-4 border border-white/10 inline-block group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                                    <Icon className="h-6 w-6 text-white/60 group-hover:text-primary transition-colors duration-500" />
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-xl font-black uppercase tracking-tighter text-white leading-none">
                                        {ministry.title}
                                    </h4>
                                    <p className="text-sm text-white/50 leading-relaxed font-medium">
                                        {ministry.description}
                                    </p>
                                </div>
                                <Link 
                                    href={`/ministries/${ministry.title.toLowerCase()}`}
                                    className="pt-4 text-sm font-black uppercase tracking-[0.2em] text-accent/60 group-hover:text-accent transition-all duration-500 block"
                                >
                                    Learn More &rarr;
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
