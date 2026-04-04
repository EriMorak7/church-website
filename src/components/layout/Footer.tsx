import Link from "next/link";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { churchInfo } from "@/lib/data";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary border-t border-secondary/20 text-main py-24 px-6 md:px-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                    {/* Brand & Mission */}
                    <div className="space-y-8">
                        <Link href="/" className="font-sans text-3xl font-black uppercase tracking-tighter">
                            {churchInfo.name.split(' ').map(word => word[0]).join('')}
                        </Link>
                        <p className="text-main/60 font-bold uppercase tracking-widest text-xs leading-loose max-w-xs">
                            A community where faith meets life. No one walks alone.
                        </p>
                        <div className="flex space-x-6 pt-4">
                            <Link href="#" className="text-main/40 hover:text-accent transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-main/40 hover:text-accent transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-main/40 hover:text-accent transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-main/40 hover:text-accent transition-colors">
                                <Youtube className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div className="space-y-8">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-accent">Church</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-sm font-black uppercase tracking-widest hover:text-accent transition-colors">Our Story</Link></li>
                            <li><Link href="/sermons" className="text-sm font-black uppercase tracking-widest hover:text-accent transition-colors">Messages</Link></li>
                            <li><Link href="/ministries" className="text-sm font-black uppercase tracking-widest hover:text-accent transition-colors">Ministries</Link></li>
                            <li><Link href="/visit" className="text-sm font-black uppercase tracking-widest hover:text-accent transition-colors">Plan A Visit</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="space-y-8">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-accent">Resources</h4>
                        <ul className="space-y-4">
                            <li><Link href="/give" className="text-sm font-black uppercase tracking-widest hover:text-accent transition-colors">Give</Link></li>
                            <li><Link href="/watch" className="text-sm font-black uppercase tracking-widest hover:text-accent transition-colors">Watch Live</Link></li>
                            <li><Link href="/app" className="text-sm font-black uppercase tracking-widest hover:text-accent transition-colors">Church App</Link></li>
                            <li><Link href="/contact" className="text-sm font-black uppercase tracking-widest hover:text-accent transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Info */}
                    <div className="space-y-8">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-accent">Connect</h4>
                        <div className="space-y-4 text-sm font-black uppercase tracking-widest leading-loose">
                            <p className="max-w-[200px]">{churchInfo.address}</p>
                            <p className="text-accent">{churchInfo.phone}</p>
                            <p className="lowercase font-bold tracking-normal">{churchInfo.email}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-8 border-t border-secondary/20 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-main/40 leading-none">
                        &copy; {currentYear} {churchInfo.name}. All rights reserved.
                    </p>
                    <div className="flex space-x-8 mt-6 md:mt-0">
                        <Link href="/privacy" className="text-[10px] font-black uppercase tracking-[0.2em] text-main/40 hover:text-main">Privacy</Link>
                        <Link href="/terms" className="text-[10px] font-black uppercase tracking-[0.2em] text-main/40 hover:text-main">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

