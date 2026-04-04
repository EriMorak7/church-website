import Link from "next/link";
import { leadership } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";

export function PastorsSection() {
    const leadPastor = leadership[0];

    return (
        <section className="py-24 bg-primary px-6 md:px-10 overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2 relative">
                        <div className="aspect-[4/5] bg-bg-muted overflow-hidden relative group">
                            <img
                                src={leadPastor.image}
                                alt={leadPastor.name}
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-8">
                        <h2 className="font-sans text-5xl md:text-7xl font-black uppercase tracking-tighter text-heading leading-[0.9]">
                            Our <br /> Lead <br /> Pastors
                        </h2>
                        <h3 className="text-xl font-black uppercase tracking-widest text-accent">
                            {leadPastor.name}
                        </h3>
                        <p className="text-lg text-main/70 leading-relaxed max-w-md">
                            {leadPastor.bio}
                        </p>
                        <div className="pt-4">
                            <Link href="/leadpastors" className={buttonVariants({ variant: "outline" })}>
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
