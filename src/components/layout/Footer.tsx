import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { churchInfo } from "@/lib/data";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary pt-32 pb-16 px-6 md:px-10 border-t border-white/5 relative overflow-hidden film-grain">
            {/* Ambient Gold Glow */}
            <div className="absolute inset-0 cinematic-gradient z-0" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none z-10" />
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[120px] pointer-events-none z-10" />

            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
                    {/* Brand & Mission */}
                    <div className="space-y-12">
                        <Link href="/" className="relative h-16 w-64 block transition-transform hover:scale-[1.02] duration-500">
                            <Image
                                src="/images/logo.png"
                                alt={churchInfo.name}
                                fill
                                className="object-contain object-left"
                            />
                        </Link>
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 leading-loose max-w-xs">
                            A community where faith meets life. No one walks alone.
                        </p>
                        <div className="flex space-x-8 pt-4">
                            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                                <Link key={i} href="#" className="text-white/40 hover:text-accent transition-all duration-300 transform hover:-translate-y-1">
                                    <Icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick links */}
                    <div className="space-y-10">
                        <h4 className="text-sm font-black uppercase tracking-[0.4em] text-accent">Our Church</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Our Story", href: "/about" },
                                { name: "Messages", href: "/sermons" },
                                { name: "Ministries", href: "/ministries" },
                                { name: "Plan A Visit", href: "/plan-visit" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-[11px] font-black uppercase tracking-widest text-white/50 hover:text-white transition-colors duration-300">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="space-y-10">
                        <h4 className="text-sm font-black uppercase tracking-[0.4em] text-accent">Resources</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Give Online", href: "/give" },
                                { name: "Watch Live", href: "/sermons" },
                                { name: "Events", href: "/events" },
                                { name: "Contact", href: "/contact" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-[11px] font-black uppercase tracking-widest text-white/50 hover:text-white transition-colors duration-300">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Info */}
                    <div className="space-y-10">
                        <h4 className="text-sm font-black uppercase tracking-[0.4em] text-accent">Connect</h4>
                        <div className="space-y-6 text-[11px] font-black uppercase tracking-widest leading-loose text-white/50">
                            <p className="max-w-[200px] hover:text-white/70 transition-colors">{churchInfo.address}</p>
                            <p className="hover:text-white/70 transition-colors">{churchInfo.phone}</p>
                            <p className="lowercase font-bold tracking-normal hover:text-accent transition-colors">{churchInfo.email}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
                         <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">
                            &copy; {currentYear} {churchInfo.name}.
                        </p>
                        <div className="flex space-x-8">
                            <Link href="/privacy" className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 hover:text-white/60 transition-colors">Privacy</Link>
                            <Link href="/terms" className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 hover:text-white/60 transition-colors">Terms</Link>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                         <div className="w-8 h-[1px] bg-accent/20" />
                         <p className="text-[9px] font-black uppercase tracking-[0.5em] text-accent/40 whitespace-nowrap">Soli Deo Gloria</p>
                         <div className="w-8 h-[1px] bg-accent/20" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
