import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Heart, Landmark, Smartphone, Gift } from "lucide-react";
import Link from "next/link";

export default function GivePage() {
    return (
        <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
            <Navbar />

            <main className="flex-1 pt-24 bg-white">
                {/* Header */}
                <section className="bg-secondary text-white py-32 px-6 md:px-10 overflow-hidden relative">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale"></div>
                    <div className="container mx-auto relative z-10">
                        <div className="max-w-3xl space-y-6">
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-accent">Generosity</h2>
                            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                                Trusting God <br /> With Our <br /> Resources
                            </h1>
                            <p className="text-xl text-white/70 max-w-xl leading-relaxed">
                                Your generosity helps us continue our mission of sharing the hope of Jesus
                                and serving our local community.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Giving Options */}
                <section className="py-32 px-6 md:px-10">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row gap-20 items-start mb-24">
                            <div className="lg:w-1/2 space-y-6">
                                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-accent">Ways to Give</h2>
                                <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-secondary leading-[0.9]">
                                    Simple & <br /> Secure
                                </h3>
                            </div>
                            <div className="lg:w-1/2 lg:pt-16">
                                <p className="text-xl md:text-2xl text-secondary/60 leading-relaxed font-bold uppercase tracking-tight">
                                    Choose the method that works best for you. <br /> All donations are tax-deductible.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="space-y-8 p-12 bg-bg-muted">
                                <Smartphone className="h-10 w-10 text-accent" />
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-black uppercase tracking-tighter text-secondary">Online</h4>
                                    <p className="text-secondary/60 font-bold uppercase tracking-widest text-[10px] leading-relaxed">Give quickly and securely through our online platform or mobile app.</p>
                                </div>
                                <Button variant="primary" className="w-full">Give Online Now</Button>
                            </div>

                            <div className="space-y-8 p-12 bg-bg-muted">
                                <Gift className="h-10 w-10 text-accent" />
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-black uppercase tracking-tighter text-secondary">In-Person</h4>
                                    <p className="text-secondary/60 font-bold uppercase tracking-widest text-[10px] leading-relaxed">Place your gift in the offering boxes located at the back of the sanctuary.</p>
                                </div>
                                <Link href="/visit">
                                    <Button variant="outline" className="w-full">Service Times</Button>
                                </Link>
                            </div>

                            <div className="space-y-8 p-12 bg-bg-muted">
                                <Landmark className="h-10 w-10 text-accent" />
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-black uppercase tracking-tighter text-secondary">Mail-In</h4>
                                    <p className="text-secondary/60 font-bold uppercase tracking-widest text-[10px] leading-relaxed">Checks can be mailed to our church office at the address below.</p>
                                </div>
                                <Button variant="outline" className="w-full">Mailing Address</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

