import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ministries } from "@/lib/data";
import { Baby, Users, Music, Heart, BookOpen, Coffee, HelpCircle, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const iconMap: Record<string, any> = {
    Baby: Baby,
    Users: Users,
    Music: Music,
    Heart: Heart,
    BookOpen: BookOpen,
    Coffee: Coffee,
    HelpCircle: HelpCircle,
};

export default function MinistriesPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 pt-24 bg-white">
                {/* Header */}
                <section className="bg-gray-50 py-20 border-b border-gray-100">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-3xl">
                            <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-main mb-6">Our Ministries</h1>
                            <p className="text-xl text-gray-500 leading-relaxed">
                                At Grace Community, there's a place for everyone to serve and be served.
                                Explore our different ministry areas and find where you can plug in.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Ministries Grid */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {ministries.map((ministry) => {
                                const Icon = iconMap[ministry.icon] || HelpCircle;
                                return (
                                    <Card key={ministry.title} className="group hover:border-accent/40 shadow-sm hover:shadow-md transition-all">
                                        <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                                            <div className="p-3 bg-primary rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <CardTitle className="group-hover:text-accent transition-colors">{ministry.title} Ministry</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-6">
                                            <p className="text-gray-600 leading-relaxed">
                                                {ministry.description}
                                            </p>
                                            <Link
                                                href={`/ministries/${ministry.title.toLowerCase()}`}
                                                className="inline-flex items-center text-accent font-bold hover:underline"
                                            >
                                                Learn More <ChevronRight className="h-4 w-4 ml-1" />
                                            </Link>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Get Involved Section */}
                <section className="py-20 bg-gray-900 text-white">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 italic text-primary">Ready to Serve?</h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
                            We believe every member of the church has unique gifts to share.
                            If you're interested in volunteering, we'd love to help you find the right fit.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-accent text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-accent/90 shadow-xl"
                        >
                            Volunteer Information
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
