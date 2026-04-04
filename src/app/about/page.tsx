import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { beliefs, leadership, values } from "@/lib/data";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-black overflow-hidden">
                    <div className="absolute inset-0 opacity-40">
                        <Image
                            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop"
                            alt="Church background"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="container relative z-10 px-6 text-center">
                        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white mb-6">
                            Our Story
                        </h1>
                        <p className="text-xl md:text-2xl font-medium text-white/80 max-w-2xl mx-auto leading-relaxed">
                            A community where faith meets real life. Dedicated to loving God and serving our neighbors since 2005.
                        </p>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6 md:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-8">Our Mission</h2>
                                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black leading-[0.9] mb-8">
                                    To know Christ and to make Him known.
                                </h3>
                                <p className="text-xl text-black/60 leading-relaxed mb-12">
                                    We believe that the gospel of Jesus Christ has the power to transform lives, families, and communities. Our vision is to see every person walking in their God-given purpose.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                                    {values.map((v) => (
                                        <div key={v.title} className="space-y-4">
                                            <h4 className="text-lg font-black uppercase tracking-widest text-black">{v.title}</h4>
                                            <p className="text-black/50 leading-relaxed">{v.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                                <Image
                                    src="https://images.unsplash.com/photo-1544427928-c49cdfebf194?q=80&w=2030&auto=format&fit=crop"
                                    alt="Church worship service"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Beliefs Section */}
                <section className="py-32 bg-black text-white">
                    <div className="container mx-auto px-6 md:px-10">
                        <div className="max-w-4xl mb-24">
                            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-8">What We Believe</h2>
                            <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                                Rooted in Faith,<br />Anchor for the Soul.
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
                            {beliefs.map((b) => (
                                <div key={b.title} className="group border-t border-white/10 pt-10">
                                    <h4 className="text-2xl font-black uppercase tracking-tight text-accent mb-4 group-hover:translate-x-2 transition-transform duration-300">{b.title}</h4>
                                    <p className="text-lg text-white/50 leading-relaxed">{b.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Leadership Team */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6 md:px-10">
                        <div className="text-center mb-24">
                            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-4">Leadership</h2>
                            <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-black">
                                Serving Our Family
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                            {leadership.map((person) => (
                                <div key={person.name} className="group">
                                    <div className="relative aspect-[3/4] overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                                        <Image
                                            src={person.image}
                                            alt={person.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-black uppercase tracking-tighter text-black">{person.name}</h3>
                                    <p className="text-accent font-bold uppercase tracking-widest text-xs mb-4">{person.role}</p>
                                    <p className="text-black/50 text-sm leading-relaxed">{person.bio}</p>
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
