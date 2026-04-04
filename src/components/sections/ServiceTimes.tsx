import Link from "next/link";
import { churchInfo } from "@/lib/data";

export function ServiceTimes() {
    return (
        <section className="bg-primary py-24 px-6 md:px-10 border-y border-bg-muted">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative">
                    {/* Vertical Divider for Desktop */}
                    <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-white/10" />

                    <div className="space-y-10">
                        <div className="space-y-6">
                            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-accent">Service Times</h2>
                            <div className="space-y-4">
                                <p className="font-sans text-4xl md:text-6xl font-black uppercase tracking-tighter text-heading leading-[0.9]">
                                    Sundays at <br /> 8:30, 10, <br /> & 11:30 AM
                                </p>
                                <p className="font-sans text-xl md:text-2xl font-black uppercase tracking-tighter text-secondary/80 leading-none">
                                    Wednesdays at 7 PM
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-10">
                        <div className="space-y-6">
                            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-accent">Location</h2>
                            <div className="space-y-6">
                                <p className="font-sans text-xl md:text-3xl font-black uppercase tracking-tighter text-heading leading-tight max-w-sm">
                                    {churchInfo.address}
                                </p>
                                <div className="pt-2">
                                    <Link href="/visit" className="group inline-flex items-center text-xs font-black uppercase tracking-[0.2em] text-heading hover:text-accent transition-all duration-300">
                                        Plan Your Visit
                                        <span className="ml-2 transform group-hover:translate-x-2 transition-transform">&rarr;</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

