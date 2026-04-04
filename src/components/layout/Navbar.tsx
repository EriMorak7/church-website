"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { churchInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Sermons", href: "/sermons" },
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
            // Initialize scroll state
            handleScroll();
        } else {
            setIsScrolled(true); // Always "scrolled" style on other pages
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHomePage]);

    // Determine if we should use the transparent/light style
    // We only use it on the homepage when NOT scrolled
    const useTransparentStyle = isHomePage && !isScrolled;

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                useTransparentStyle
                    ? "bg-transparent py-6"
                    : "bg-primary border-b border-bg-muted py-4 shadow-xl"
            )}
        >
            <div className="container mx-auto px-6 md:px-10">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className={cn(
                            "font-sans text-xl md:text-2xl font-black tracking-tighter transition-colors uppercase",
                            useTransparentStyle ? "text-heading" : "text-secondary"
                        )}
                    >
                        {churchInfo.name.split(' ').map(word => word[0]).join('')}
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-xs font-bold uppercase tracking-widest transition-colors hover:text-accent",
                                    useTransparentStyle ? "text-heading/90" : "text-secondary"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <Link href="/give">
                            <Button variant={useTransparentStyle ? "outline" : "primary"} size="sm" className={cn(useTransparentStyle && "text-white border-white hover:bg-white hover:text-secondary")}>
                                Give
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={cn(
                            "lg:hidden p-2 transition-colors",
                            useTransparentStyle ? "text-heading" : "text-secondary"
                        )}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            {isOpen && (
                <div className="mobile-menu lg:hidden fixed inset-0 top-[88px] bg-primary z-50 p-8 animate-in fade-in duration-300">
                    <div className="flex flex-col space-y-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-black uppercase tracking-tighter text-main hover:text-accent"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-8 flex flex-col space-y-4">
                            <Link href="/give" onClick={() => setIsOpen(false)}>
                                <Button variant="primary" className="w-full py-6 text-lg">
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

