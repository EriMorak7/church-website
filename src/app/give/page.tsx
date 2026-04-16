import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Smartphone, Gift, Landmark } from "lucide-react";
import Link from "next/link";

export default function GivePage() {
    return (
        <div className="min-h-screen flex flex-col font-sans overflow-x-hidden bg-primary text-white">
            <Navbar />

            <main className="flex-1 pt-24">
                {/* Header */}
                <section className="bg-surface py-24 px-6 md:px-10 overflow-hidden relative border-b border-white/5 film-grain">
                    <div className="absolute inset-0 cinematic-gradient z-10" />
                    <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
                    <div className="absolute bottom-0 left-1/3 w-[500px] h-[200px] bg-accent/8 rounded-full blur-[120px] pointer-events-none z-10" />
                    <div className="container mx-auto relative z-20">
                        <div className="max-w-3xl space-y-6">
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-accent animate-in fade-in slide-in-from-bottom-4 duration-1000">Generosity</h2>
                            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                                Trusting God <br /> With Our <br /> Resources
                            </h1>
                            <p className="text-xl text-white/50 max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                                Your generosity helps us continue our mission of sharing the hope of Jesus
                                and serving our local community.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Giving Options */}
                <section className="py-16 px-6 md:px-10">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row gap-20 items-start mb-24">
                            <div className="lg:w-1/2 space-y-6">
                                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-accent">Ways to Give</h2>
                                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-[0.9]">
                                    Simple & <br /> Secure
                                </h3>
                            </div>
                            <div className="lg:w-1/2 lg:pt-16">
                                <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-bold uppercase tracking-tight">
                                    Choose the method that works best for you. <br /> All donations are tax-deductible.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="space-y-8 p-12 bg-surface border border-white/5 hover:border-accent/20 transition-all duration-500 group">
                                <Smartphone className="h-10 w-10 text-accent" />
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-black uppercase tracking-tighter text-white">Online</h4>
                                    <p className="text-white/40 font-bold uppercase tracking-widest text-sm leading-relaxed">Give quickly and securely through our online platform or mobile app.</p>
                                </div>
                                <Button variant="primary" className="w-full">Give Online Now</Button>
                            </div>

                            <div className="space-y-8 p-12 bg-surface border border-white/5 hover:border-accent/20 transition-all duration-500 group">
                                <Gift className="h-10 w-10 text-accent" />
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-black uppercase tracking-tighter text-white">In-Person</h4>
                                    <p className="text-white/40 font-bold uppercase tracking-widest text-sm leading-relaxed">Place your gift in the offering boxes located at the back of the sanctuary.</p>
                                </div>
                                <Link href="/plan-visit">
                                    <Button variant="outline" className="w-full">Service Times</Button>
                                </Link>
                            </div>

                            <div className="space-y-8 p-12 bg-surface border border-white/5 hover:border-accent/20 transition-all duration-500 group">
                                <Landmark className="h-10 w-10 text-accent" />
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-black uppercase tracking-tighter text-white">Mail-In</h4>
                                    <p className="text-white/40 font-bold uppercase tracking-widest text-sm leading-relaxed">Checks can be mailed to our church office at the address below.</p>
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
