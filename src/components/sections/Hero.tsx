import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
    return (
        <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden bg-primary film-grain">
            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 cinematic-gradient z-10" />
            
            {/* Secondary vignette for depth */}
            <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-transparent to-black/80 z-10" />

            {/* Background Image with Ken Burns */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0 animate-ken-burns"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1510590337019-5ef8d3d32116?q=80&w=2070&auto=format&fit=crop')",
                }}
            />

            {/* Gold ambient light leak */}
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[150px] pointer-events-none z-10" />

            {/* Content */}
            <div className="container relative z-20 px-6 md:px-10 text-center max-w-5xl pt-24 md:pt-32">
                <div className="space-y-12">
                    {/* Gold accent line */}
                    <div className="flex justify-center">
                        <div className="w-16 h-[1px] bg-accent animate-shimmer" />
                    </div>

                    <div className="space-y-6">
                        <span className="inline-block text-sm font-black uppercase tracking-[0.5em] text-accent animate-in fade-in slide-in-from-bottom-4 duration-1000">
                            Now Gathering In Person & Online
                        </span>
                        <h1 className="font-sans text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 uppercase leading-[0.9] text-white">
                            Welcome to Christ Heritage <br /> Tabernacle Ministries
                        </h1>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
                        <Link href="/plan-visit" className={cn(buttonVariants({ size: "lg", variant: "primary" }), "rounded-none px-12 py-8 uppercase text-sm font-black tracking-widest")}>
                            Plan A Visit
                        </Link>
                        <Link href="/sermons" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "rounded-none px-12 py-8 uppercase text-sm font-black tracking-widest")}>
                            Watch Live
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce transition-opacity duration-1000 delay-1000 opacity-30">
                <div className="w-[1px] h-24 bg-gradient-to-b from-accent to-transparent" />
            </div>
        </section>
    );
}
