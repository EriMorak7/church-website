import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary">
            {/* Background Image Placeholder / Overlay */}
            <div className="absolute inset-0 bg-primary/60 z-10" />
            <div
                className="absolute inset-0 bg-cover bg-center z-0 scale-105 animate-pulse-slow"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1510590337019-5ef8d3d32116?q=80&w=2070&auto=format&fit=crop')",
                }}
            />

            {/* Content */}
            <div className="container relative z-20 px-6 md:px-10 text-center">
                <h1 className="font-sans text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 uppercase leading-[0.9] text-heading">
                    Welcome <br /> Home
                </h1>
                <p className="text-sm md:text-base font-bold uppercase tracking-[0.2em] mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200 opacity-90 text-secondary">
                    A community where faith meets life. <br /> Join us Sunday at 8:30, 10, & 11:30 AM
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-400">
                    <Link href="/visit" className={buttonVariants({ size: "lg", variant: "secondary" })}>
                        Plan A Visit
                    </Link>
                    <Link href="/watch" className={buttonVariants({ size: "lg", variant: "outline", className: "text-heading border-heading hover:bg-heading hover:text-primary" })}>
                        Watch Live
                    </Link>
                </div>
            </div>
        </section>
    );
}

