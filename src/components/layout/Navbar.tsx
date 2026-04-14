"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { churchInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Plan A Visit", href: "/plan-visit" },
    { name: "Sermons", href: "/sermons" },
    { name: "Events", href: "/events" },
    { name: "Ministries", href: "/ministries" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        if (isHomePage) {
            window.addEventListener("scroll", handleScroll);
            handleScroll();
        } else {
            setIsScrolled(true);
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHomePage]);

    // Handle scroll lock when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const useTransparentStyle = isHomePage && !isScrolled;

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
                useTransparentStyle
                    ? "bg-transparent py-8"
                    : "bg-primary/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl shadow-black/50"
            )}
        >
            <div className="container mx-auto px-6 md:px-10">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="transition-all duration-300 hover:opacity-80 active:scale-95 shrink-0"
                    >
                        <div className="relative h-10 w-40 md:h-12 md:w-48">
                            <Image
                                src="/images/logo.png"
                                alt={churchInfo.name}
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-[10px] xl:text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 relative group whitespace-nowrap",
                                    pathname === link.href
                                        ? "text-accent"
                                        : "text-white/70 hover:text-white"
                                )}
                            >
                                {link.name}
                                <span className={cn(
                                    "absolute -bottom-1 left-0 h-[1px] bg-accent transition-all duration-300",
                                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                                )} />
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden lg:flex items-center space-x-6 shrink-0">
                        <Link href="/give">
                            <Button
                                variant="primary"
                                size="sm"
                                className="px-8 rounded-none uppercase tracking-widest text-sm font-black"
                            >
                                Give
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            {isOpen && (
                <div className="lg:hidden fixed inset-x-0 bottom-0 top-full bg-primary/98 backdrop-blur-2xl z-40 p-8 border-t border-white/5 animate-in fade-in slide-in-from-top-4 duration-500 flex flex-col h-[calc(100vh-100%)]">
                    <div className="flex flex-col space-y-6 overflow-y-auto">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-2xl font-black uppercase tracking-tighter transition-colors",
                                    pathname === link.href
                                        ? "text-accent"
                                        : "text-white/70 hover:text-white"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-8 flex flex-col space-y-4 border-t border-white/10">
                            <Link href="/give" onClick={() => setIsOpen(false)}>
                                <Button variant="primary" className="w-full py-6 text-sm font-black uppercase tracking-widest rounded-none">
                                    Give Online
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>

    );
}
