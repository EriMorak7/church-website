import Link from "next/link";
import { leadership } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function PastorsSection() {
    const leadPastor = leadership[0];

    return (
        <section className="py-12 bg-primary px-6 md:px-10 overflow-hidden relative">
            {/* Artistic background glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
            
            <div className="container mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-24 lg:gap-32">
                    <div className="w-full md:w-1/2 relative group">
                        <div className="aspect-[4/5] bg-surface overflow-hidden relative border border-white/5 p-4 transition-all duration-700 group-hover:border-accent/30">
                            <div className="w-full h-full overflow-hidden relative">
                                <img
                                    src={leadPastor.image}
                                    alt={leadPastor.name}
                                    className="w-full h-full object-cover transition-all duration-1000 scale-[1.05] group-hover:scale-100"
                                />
                            </div>
                        </div>
                        
                        {/* Decorative floating label */}
                        <div className="absolute -bottom-6 -right-6 bg-accent p-8 hidden lg:block animate-in fade-in slide-in-from-right-10 duration-1000">
                             <p className="text-sm font-black uppercase tracking-[0.4em] text-primary">Founding Pastors</p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 space-y-12">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <h2 className="text-sm font-black uppercase tracking-[0.5em] text-accent">Our Leadership</h2>
                                <div className="w-12 h-[1px] bg-accent/30" />
                            </div>
                            <h3 className="font-sans text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter text-white leading-[0.85] text-balance">
                                Meet Our <br /> Pastors
                            </h3>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-2xl font-black uppercase tracking-widest text-white leading-none">
                                {leadPastor.name}
                            </h4>
                            <div className="w-12 h-1 bg-accent" />
                            <p className="text-lg text-white/60 leading-relaxed max-w-lg font-medium">
                                {leadPastor.bio}
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link 
                                href="/about" 
                                className={cn(
                                    buttonVariants({ variant: "outline", size: "lg" }), 
                                    "group rounded-none px-12 py-8 uppercase text-sm font-black tracking-widest transition-all duration-500"
                                )}
                            >
                                Learn More <ArrowRight className="ml-4 h-4 w-4 transition-transform group-hover:translate-x-3" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
