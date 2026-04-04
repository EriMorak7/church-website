import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, MessageSquare, Heart } from "lucide-react";
import { churchInfo } from "@/lib/data";

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
            <Navbar />

            <main className="flex-1 pt-24 bg-primary px-6 md:px-10">
                {/* Header */}
                <section className="py-24 relative overflow-hidden">
                    {/* Subtle Glow */}
                    <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

                    <div className="container mx-auto relative z-10">
                        <div className="flex flex-col lg:flex-row gap-20 items-start">
                            <div className="lg:w-1/2 space-y-8">
                                <h2 className="text-xs font-black uppercase tracking-[0.4em] text-accent">Contact us</h2>
                                <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-heading leading-[0.85]">
                                    Get In <br /> Touch
                                </h1>
                            </div>
                            <div className="lg:w-1/2 lg:pt-32">
                                <p className="text-xl md:text-2xl text-secondary leading-relaxed font-bold uppercase tracking-tight max-w-md opacity-80">
                                    Whether you have a question, a prayer request, or want to learn more about our church, we're here for you.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Info & Forms Area */}
                <section className="py-24 px-6 md:px-10 border-t border-white/5">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start relative">
                            {/* Vertical Divider (Desktop) */}
                            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />

                            {/* Info Column */}
                            <div className="space-y-24">
                                <div className="space-y-12">
                                    <h2 className="text-xs font-black uppercase tracking-[0.4em] text-accent">Information</h2>
                                    <div className="space-y-16">
                                        <div className="space-y-4">
                                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary opacity-50">Address</p>
                                            <p className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-heading leading-tight max-w-sm">
                                                {churchInfo.address}
                                            </p>
                                        </div>
                                        <div className="space-y-4">
                                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary opacity-50">Phone</p>
                                            <p className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-accent leading-tight">
                                                {churchInfo.phone}
                                            </p>
                                        </div>
                                        <div className="space-y-4">
                                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary opacity-50">Email</p>
                                            <p className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-heading leading-tight lowercase">
                                                {churchInfo.email}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Office Hours Card */}
                                <div className="space-y-8 p-12 bg-bg-muted border border-white/5 relative overflow-hidden group">
                                    {/* Subtle Ambient Glow inside Card */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-accent/10 transition-colors duration-700" />

                                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-accent relative z-10">Office Hours</h3>
                                    <ul className="space-y-6 text-[10px] font-black uppercase tracking-[0.2em] text-secondary relative z-10">
                                        <li className="flex justify-between border-b border-white/5 pb-3">
                                            <span>MON-THU</span>
                                            <span className="text-heading">9:00 AM - 4:00 PM</span>
                                        </li>
                                        <li className="flex justify-between border-b border-white/5 pb-3">
                                            <span>FRI</span>
                                            <span className="text-heading">9:00 AM - 12:00 PM</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>SAT-SUN</span>
                                            <span className="text-secondary/30">CLOSED</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Form Column */}
                            <div className="space-y-16">
                                <div className="space-y-4">
                                    <h2 className="text-xs font-black uppercase tracking-[0.4em] text-accent">Message</h2>
                                    <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-heading leading-[0.9]">
                                        Send Us <br /> A Note
                                    </h3>
                                </div>
                                <form className="space-y-12">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div className="space-y-4 group">
                                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary group-focus-within:text-accent transition-colors">Name</label>
                                            <input
                                                type="text"
                                                placeholder="YOUR FULL NAME"
                                                className="w-full bg-transparent border-b-2 border-white/10 pb-4 focus:border-accent font-bold uppercase tracking-widest text-[10px] text-heading focus:outline-none transition-all placeholder:text-secondary/20"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-4 group">
                                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary group-focus-within:text-accent transition-colors">Email</label>
                                            <input
                                                type="email"
                                                placeholder="YOUR EMAIL ADDRESS"
                                                className="w-full bg-transparent border-b-2 border-white/10 pb-4 focus:border-accent font-bold uppercase tracking-widest text-[10px] text-heading focus:outline-none transition-all placeholder:text-secondary/20"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-4 group">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary group-focus-within:text-accent transition-colors">Subject</label>
                                        <select className="w-full bg-transparent border-b-2 border-white/10 pb-4 focus:border-accent font-bold uppercase tracking-widest text-[10px] text-heading focus:outline-none transition-all cursor-pointer">
                                            <option className="bg-primary">GENERAL INQUIRY</option>
                                            <option className="bg-primary">PRAYER REQUEST</option>
                                            <option className="bg-primary">MEMBERSHIP</option>
                                            <option className="bg-primary">OTHER</option>
                                        </select>
                                    </div>
                                    <div className="space-y-4 group">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary group-focus-within:text-accent transition-colors">Message</label>
                                        <textarea
                                            placeholder="HOW CAN WE HELP YOU?"
                                            className="w-full bg-transparent border-b-2 border-white/10 pb-4 focus:border-accent font-bold uppercase tracking-widest text-[10px] text-heading focus:outline-none transition-all h-32 placeholder:text-secondary/20"
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="pt-6">
                                        <Button type="submit" variant="secondary" size="lg" className="w-full md:w-auto">
                                            Send Message
                                        </Button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

