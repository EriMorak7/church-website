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

                    <div className="space-y-6 text-center">
                        <h1 className="font-nunito tracking-tighter uppercase text-white mx-auto max-w-5xl text-balance">
                            <span className="block text-base md:text-xl lg:text-2xl font-black text-accent mb-4 tracking-[0.3em] opacity-90 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                                {line1.displayedText}
                                {!line1.isComplete && <span className="inline-block w-[2px] h-[0.8em] bg-accent ml-1 animate-pulse" />}
                            </span>
                            <span className="block text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight relative whitespace-nowrap">
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
