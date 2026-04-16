import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { beliefs, values } from "@/lib/data";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-primary text-white">
            <Navbar />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-primary overflow-hidden film-grain">
                    <div className="absolute inset-0 cinematic-gradient z-10" />
                    <div className="absolute inset-0">
                        <Image
                            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop"
                            alt="Church background"
                            fill
                            className="object-cover animate-ken-burns"
                        />
                    </div>
                    <div className="absolute bottom-0 left-1/3 w-[500px] h-[200px] bg-accent/10 rounded-full blur-[120px] pointer-events-none z-10" />
                    <div className="relative z-20 text-center px-6">
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter text-white mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 text-balance">
                            Our Story
                        </h1>
                        <p className="text-xl md:text-2xl font-medium text-white/60 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                            A community where faith meets real life. Dedicated to loving God and serving our neighbors since 2001.
                        </p>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-16 bg-surface border-y border-white/5">
                    <div className="container mx-auto px-6 md:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-4">Our Vision & Mission</h2>
                                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-[0.9] mb-8">
                                    A People of Purpose,<br />Power, and Praise.
                                </h3>
                                <div className="space-y-12 mb-12">
                                    <div className="space-y-6">
                                        <h4 className="text-lg font-black uppercase tracking-widest text-white flex items-center gap-3">
                                            <div className="w-8 h-[2px] bg-accent"></div>
                                            The Vision of the Church
                                        </h4>
                                        <ul className="space-y-4 text-xl text-white/60 leading-relaxed list-none">
                                            <li className="flex items-start">
                                                <span className="mr-4 mt-2 min-w-[8px] h-[8px] rounded-full bg-accent inline-block"></span>
                                                <span>To rescue men from darkness to light</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="mr-4 mt-2 min-w-[8px] h-[8px] rounded-full bg-accent inline-block"></span>
                                                <span>To disciple and train men until they discover their ministries</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="mr-4 mt-2 min-w-[8px] h-[8px] rounded-full bg-accent inline-block"></span>
                                                <span>Raising men as men of dignity and honor</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="mr-4 mt-2 min-w-[8px] h-[8px] rounded-full bg-accent inline-block"></span>
                                                <span>
                                                    To prepare men for the coming of the lord through life of purity, power and praise <span className="text-accent/70 font-bold ml-1 text-sm uppercase tracking-widest">(Isaiah 49:1-26)</span>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="space-y-6">
                                        <h4 className="text-lg font-black uppercase tracking-widest text-white flex items-center gap-3">
                                            <div className="w-8 h-[2px] bg-accent"></div>
                                            The Mission of the Church
                                        </h4>
                                        <blockquote className="border-l-4 border-accent pl-6 py-2">
                                            <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed italic font-serif">
                                                &ldquo;Preaching, warning and teaching every man in all wisdom; that we may present every man perfect in Christ Jesus&rdquo;
                                            </p>
                                        </blockquote>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                                    {values.map((v) => (
                                        <div key={v.title} className="space-y-4">
                                            <h4 className="text-lg font-black uppercase tracking-widest text-accent">{v.title}</h4>
                                            <p className="text-white/50 leading-relaxed">{v.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative aspect-[4/5] overflow-hidden border border-white/5 transition-all duration-700 hover:border-accent/20 glow-gold">
                                <Image
                                    src="/images/worship.webp"
                                    alt="Church worship service"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Beliefs Section */}
                <section className="py-16 bg-primary">
                    <div className="container mx-auto px-6 md:px-10">
                        <div className="max-w-4xl mb-24">
                            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-8">What We Believe</h2>
                            <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white">
                                Rooted in Faith,<br />Anchor for the Soul.
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
                            {beliefs.map((b) => (
                                <div key={b.title} className="group border-t border-white/10 pt-10">
                                    <h4 className="text-2xl font-black uppercase tracking-tight text-white mb-4 group-hover:translate-x-2 group-hover:text-accent transition-all duration-300">{b.title}</h4>
                                    <p className="text-lg text-white/50 leading-relaxed">{b.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
