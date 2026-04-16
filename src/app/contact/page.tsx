import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { churchInfo } from "@/lib/data";

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans overflow-x-hidden bg-primary text-white">
            <Navbar />

            <main className="flex-1 pt-24 px-6 md:px-10">
                {/* Header */}
                <section className="bg-surface py-24 px-6 md:px-10 overflow-hidden relative border-b border-white/5 film-grain">
                    <div className="absolute inset-0 cinematic-gradient z-10" />
                    <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none z-10" />

                    <div className="container mx-auto relative z-20">
                        <div className="flex flex-col lg:flex-row gap-20 items-start">
                            <div className="lg:w-1/2 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                                <h2 className="text-xs font-black uppercase tracking-[0.4em] text-accent">Contact us</h2>
                                <h1 className="text-3xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.85] text-balance">
                                    Get In <br /> Touch
                                </h1>
                            </div>
                            <div className="lg:w-1/2 lg:pt-32 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                                <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-bold uppercase tracking-tight max-w-md">
                                    Whether you have a question, a prayer request, or want to learn more about our church, we're here for you.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Info & Forms Area */}
                <section className="py-12 px-6 md:px-10 border-t border-white/5">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start relative">
                            {/* Vertical Divider */}
                            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />

                            {/* Info Column */}
                            <div className="space-y-24">
                                <div className="space-y-12">
                                    <h2 className="text-xs font-black uppercase tracking-[0.4em] text-accent">Information</h2>
                                    <div className="space-y-16">
                                        <div className="space-y-4">
                                            <p className="text-sm font-black uppercase tracking-[0.3em] text-white/30">Address</p>
                                            <p className="text-xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter text-white leading-tight max-w-sm">
                                                {churchInfo.address}
                                            </p>
                                        </div>
                                        <div className="space-y-4">
                                            <p className="text-sm font-black uppercase tracking-[0.3em] text-white/30">Phone</p>
                                            <p className="text-xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter text-white leading-tight">
                                                {churchInfo.phone}
                                            </p>
                                        </div>
                                        <div className="space-y-4">
                                            <p className="text-sm font-black uppercase tracking-[0.3em] text-white/30">Email</p>
                                            <p className="text-xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter text-accent leading-tight lowercase">
                                                {churchInfo.email}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Office Hours Card */}
                                <div className="space-y-8 p-12 bg-surface border border-white/5 relative overflow-hidden group hover:border-accent/20 transition-all duration-500">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-accent/10 transition-colors duration-700" />

                                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-accent relative z-10">Office Hours</h3>
                                    <ul className="space-y-6 text-sm font-black uppercase tracking-[0.2em] text-white/60 relative z-10">
                                        <li className="flex justify-between border-b border-white/5 pb-3">
                                            <span>MON-THU</span>
                                            <span className="text-white/80">9:00 AM - 4:00 PM</span>
                                        </li>
                                        <li className="flex justify-between border-b border-white/5 pb-3">
                                            <span>FRI</span>
                                            <span className="text-white/80">9:00 AM - 12:00 PM</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>SAT-SUN</span>
                                            <span className="text-white/80">CLOSED</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Form Column */}
                            <div className="space-y-16">
                                <div className="space-y-4">
                                    <h2 className="text-xs font-black uppercase tracking-[0.4em] text-accent">Message</h2>
                                    <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white leading-[0.9]">
                                        Send Us <br /> A Note
                                    </h3>
                                </div>
                                <form className="space-y-12">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div className="space-y-4 group">
                                            <label className="text-sm font-black uppercase tracking-[0.3em] text-white/40 group-focus-within:text-accent transition-colors">Name</label>
                                            <input
                                                type="text"
                                                placeholder="YOUR FULL NAME"
                                                className="w-full bg-transparent border-b-2 border-white/10 pb-4 focus:border-accent font-bold uppercase tracking-widest text-sm text-white focus:outline-none transition-all placeholder:text-white/20"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-4 group">
                                            <label className="text-sm font-black uppercase tracking-[0.3em] text-white/40 group-focus-within:text-accent transition-colors">Email</label>
                                            <input
                                                type="email"
                                                placeholder="YOUR EMAIL ADDRESS"
                                                className="w-full bg-transparent border-b-2 border-white/10 pb-4 focus:border-accent font-bold uppercase tracking-widest text-sm text-white focus:outline-none transition-all placeholder:text-white/20"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-4 group">
                                        <label className="text-sm font-black uppercase tracking-[0.3em] text-white/40 group-focus-within:text-accent transition-colors">Subject</label>
                                        <select className="w-full bg-transparent border-b-2 border-white/10 pb-4 focus:border-accent font-bold uppercase tracking-widest text-sm text-white focus:outline-none transition-all cursor-pointer">
                                            <option className="bg-primary text-white">GENERAL INQUIRY</option>
                                            <option className="bg-primary text-white">PRAYER REQUEST</option>
                                            <option className="bg-primary text-white">MEMBERSHIP</option>
                                            <option className="bg-primary text-white">OTHER</option>
                                        </select>
                                    </div>
                                    <div className="space-y-4 group">
                                        <label className="text-sm font-black uppercase tracking-[0.3em] text-white/40 group-focus-within:text-accent transition-colors">Message</label>
                                        <textarea
                                            placeholder="HOW CAN WE HELP YOU?"
                                            className="w-full bg-transparent border-b-2 border-white/10 pb-4 focus:border-accent font-bold uppercase tracking-widest text-sm text-white focus:outline-none transition-all h-32 placeholder:text-white/20"
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="pt-6">
                                        <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
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
