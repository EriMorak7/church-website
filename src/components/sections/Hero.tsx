"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function useTypewriter(text: string, speed: number = 40, delay: number = 0) {
    const [displayedText, setDisplayedText] = useState("");
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let i = 0;
        const startTimeout = setTimeout(() => {
            const timer = setInterval(() => {
                setDisplayedText(text.slice(0, i + 1));
                i++;
                if (i >= text.length) {
                    clearInterval(timer);
                    setIsComplete(true);
                }
            }, speed);
        }, delay);

        return () => {
            clearTimeout(startTimeout);
        };
    }, [text, speed, delay]);

    return { displayedText, isComplete };
}

export function Hero() {
    const line1 = useTypewriter("Welcome to", 60, 1200);
    const line2 = useTypewriter("Christ Heritage Tabernacle Ministries", 40, 2500);

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
                        <h1 className="font-nunito tracking-tighter uppercase leading-[1.1] text-white min-h-[2.2em] text-[clamp(0.7rem,3.5vw,2rem)] sm:text-[clamp(1.2rem,3.8vw,3rem)] md:text-[clamp(2rem,4.5vw,4.5rem)] lg:text-[clamp(3rem,8vw,6rem)]">
                            <span className="font-black relative mb-4 inline-block">
                                {line1.displayedText}
                                {!line1.isComplete && <span className="absolute -right-1 top-0 w-[1px] h-full bg-accent animate-pulse" />}
                            </span>
                            <br /> 
                            <span className="font-black whitespace-nowrap relative">
                                {line2.displayedText}
                                {line1.isComplete && !line2.isComplete && <span className="absolute -right-2 top-0 w-[2px] h-full bg-accent animate-pulse" />}
                            </span>
                        </h1>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000">
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
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce transition-opacity duration-1000 delay-2000 opacity-30">
                <div className="w-[1px] h-24 bg-gradient-to-b from-accent to-transparent" />
            </div>
        </section>
    );
}
