import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ministries } from "@/lib/data";
import { Baby, Users, Music, Heart, HelpCircle, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const iconMap: Record<string, any> = {
    Baby: Baby,
    Users: Users,
    Music: Music,
    Heart: Heart,
};

export default function MinistriesPage() {
    return (
        <div className="min-h-screen flex flex-col bg-primary text-white">
            <Navbar />

            <main className="flex-1 pt-24">
                {/* Header */}
                <section className="bg-surface py-20 border-b border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
                    <div className="container mx-auto px-6 md:px-10 relative z-10">
                        <div className="max-w-3xl">
                            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-4">Ministries</h2>
                            <h1 className="font-sans text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6 leading-[0.9]">Our Ministries</h1>
                            <p className="text-xl text-white/50 leading-relaxed">
                                At Christ Heritage, there&apos;s a place for everyone to serve and be served.
                                Explore our different ministry areas and find where you can plug in.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Ministries Grid */}
                <section className="py-20">
                    <div className="container mx-auto px-6 md:px-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {ministries.map((ministry) => {
                                const Icon = iconMap[ministry.icon] || HelpCircle;
                                return (
                                    <div key={ministry.title} className="group p-8 bg-surface border border-white/5 hover:border-accent/20 transition-all duration-500">
                                        <div className="flex items-center space-x-4 mb-6">
                                            <div className="p-3 border border-white/10 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                                                <Icon className="h-6 w-6 text-white/60 group-hover:text-primary transition-colors duration-300" />
                                            </div>
                                            <h3 className="text-xl font-black uppercase tracking-tighter text-white group-hover:text-accent transition-colors duration-300">{ministry.title} Ministry</h3>
                                        </div>
                                        <p className="text-white/40 leading-relaxed mb-6">
                                            {ministry.description}
                                        </p>
                                        <Link
                                            href={`/ministries/${ministry.title.toLowerCase()}`}
                                            className="inline-flex items-center text-accent/60 font-bold hover:text-accent transition-colors text-sm uppercase tracking-widest"
                                        >
                                            Learn More <ChevronRight className="h-4 w-4 ml-1" />
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Get Involved Section */}
                <section className="py-20 bg-surface border-t border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-accent/3 to-transparent pointer-events-none" />
                    <div className="container mx-auto px-6 md:px-10 text-center relative z-10">
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-6">Get Connected</h2>
                        <h3 className="font-sans text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-white">Ready to Serve?</h3>
                        <p className="text-white/40 text-lg max-w-2xl mx-auto mb-10">
                            We believe every member of the church has unique gifts to share.
                            If you&apos;re interested in volunteering, we&apos;d love to help you find the right fit.
                        </p>
                        <Link
                            href="/contact"
                            className={cn(
                                buttonVariants({ variant: "primary", size: "lg" }),
                                "rounded-none px-12 py-8 uppercase text-sm font-black tracking-widest"
                            )}
                        >
                            Volunteer Information
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
