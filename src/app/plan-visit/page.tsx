import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Coffee, Users, Heart, Baby } from "lucide-react";

export default function PlanVisitPage() {
    return (
        <div className="min-h-screen flex flex-col bg-primary text-white">
            <Navbar />

            <main className="flex-1 pt-24">
                {/* Hero Section */}
                <section className="bg-surface py-20 border-b border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
                    <div className="container mx-auto px-6 md:px-10 relative z-10">
                        <div className="max-w-3xl">
                            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-4">Plan Your Visit</h2>
                            <h1 className="font-sans text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6 leading-[0.9]">
                                We&apos;re Expecting You!
                            </h1>
                            <p className="text-xl text-white/50 leading-relaxed">
                                Visiting a new church can be intimidating. We want to make your first experience
                                at Christ Heritage Tabernacle Ministries as welcoming and easy as possible.
                            </p>
                        </div>
                    </div>
                </section>

                {/* What to Expect */}
                <section className="py-20 border-b border-white/5">
                    <div className="container mx-auto px-6 md:px-10">
                        <div className="text-center mb-16">
                            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-4">What to Expect</h2>
                            <h3 className="font-sans text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">Your First Visit</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    icon: Clock,
                                    title: "Service Times",
                                    description: "Join us Sundays at 8:30 AM. Services last about 75 minutes."
                                },
                                {
                                    icon: MapPin,
                                    title: "Easy Parking",
                                    description: "We have reserved visitor parking right at the main entrance for you."
                                },
                                {
                                    icon: Coffee,
                                    title: "Free Coffee",
                                    description: "Grab a fresh cup of coffee and a pastry at our Cafe before service starts."
                                },
                                {
                                    icon: Users,
                                    title: "Casual Dress",
                                    description: "Come as you are! You'll see everything from jeans to business casual."
                                }
                            ].map((item, i) => (
                                <div key={i} className="text-center space-y-4 p-8 bg-surface border border-white/5 hover:border-accent/20 transition-all duration-500 group">
                                    <div className="mx-auto w-14 h-14 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                                        <item.icon className="h-6 w-6 text-accent group-hover:text-primary transition-colors duration-300" />
                                    </div>
                                    <h3 className="font-black text-xl uppercase tracking-tighter text-white">{item.title}</h3>
                                    <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Kids & Youth */}
                <section className="py-20 bg-surface border-b border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
                    <div className="container mx-auto px-6 md:px-10 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-6">
                                <h2 className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-2">Families</h2>
                                <h3 className="font-sans text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-[0.9]">Bringing the Family?</h3>
                                <p className="text-white/50 text-lg leading-relaxed">
                                    We love families! Our kids and youth programs provide high-energy,
                                    safe, and age-appropriate environments for your children to learn about Jesus.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <Baby className="h-6 w-6 text-accent mt-1" />
                                        <div>
                                            <h4 className="font-black uppercase tracking-widest text-white text-sm">Nursery & Pre-K</h4>
                                            <p className="text-sm text-white/40">Safe and loving care for our littlest ones during both services.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <Heart className="h-6 w-6 text-accent mt-1" />
                                        <div>
                                            <h4 className="font-black uppercase tracking-widest text-white text-sm">Elementary (K-5th)</h4>
                                            <p className="text-sm text-white/40">Engaging worship and small groups designed just for kids.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-[400px] overflow-hidden border border-white/5 glow-gold">
                                <img
                                    src="https://images.unsplash.com/photo-1544427928-c49cdfebf194?q=80&w=2030&auto=format&fit=crop"
                                    alt="Children's ministry"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Let us know you're coming Form */}
                <section className="py-20">
                    <div className="container mx-auto px-6 md:px-10 max-w-4xl">
                        <div className="bg-surface border border-white/5 p-8 md:p-16 glow-gold">
                            <div className="text-center space-y-4 mb-12">
                                <h2 className="text-xs font-black uppercase tracking-[0.4em] text-accent">RSVP</h2>
                                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">Let Us Know You&apos;re Coming</h3>
                                <p className="text-white/40">We&apos;ll have a gift waiting for you at our Welcome Center!</p>
                            </div>
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-sm font-black uppercase tracking-[0.2em] text-white/40">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 bg-transparent border border-white/10 focus:border-accent text-white focus:outline-none transition-colors" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-black uppercase tracking-[0.2em] text-white/40">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 bg-transparent border border-white/10 focus:border-accent text-white focus:outline-none transition-colors" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-black uppercase tracking-[0.2em] text-white/40">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 bg-transparent border border-white/10 focus:border-accent text-white focus:outline-none transition-colors" required />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-sm font-black uppercase tracking-[0.2em] text-white/40">Visiting on</label>
                                        <select className="w-full px-4 py-3 bg-transparent border border-white/10 focus:border-accent text-white focus:outline-none transition-colors cursor-pointer">
                                            <option className="bg-primary">This Sunday @ 8:30 AM</option>
                                            <option className="bg-primary">Another Time</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-black uppercase tracking-[0.2em] text-white/40">Number of Kids (Ages 0-11)</label>
                                        <input type="number" className="w-full px-4 py-3 bg-transparent border border-white/10 focus:border-accent text-white focus:outline-none transition-colors" min="0" />
                                    </div>
                                </div>
                                <Button type="submit" variant="primary" className="w-full py-6 text-lg uppercase tracking-widest font-black">Send My Plan</Button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
