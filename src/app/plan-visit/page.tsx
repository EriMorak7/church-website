import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Coffee, Users, Heart, Baby, ChevronRight } from "lucide-react";

export default function PlanVisitPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 pt-24 bg-white">
                {/* Hero Section */}
                <section className="bg-gray-50 py-20 border-b border-gray-100">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-3xl">
                            <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-main mb-6">
                                We're Expecting You!
                            </h1>
                            <p className="text-xl text-gray-500 leading-relaxed">
                                Visiting a new church can be intimidating. We want to make your first experience
                                at Grace Community as welcoming and easy as possible.
                            </p>
                        </div>
                    </div>
                </section>

                {/* What to Expect */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <h2 className="font-serif text-3xl font-bold text-text-main mb-12 text-center">What to Expect</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    icon: Clock,
                                    title: "Service Times",
                                    description: "Join us Sundays at 9:00 AM & 11:00 AM. Services last about 75 minutes."
                                },
                                {
                                    icon: MapPin,
                                    title: "Easy Parking",
                                    description: "We have reserved visitor parking right at the main entrance for you."
                                },
                                {
                                    icon: Coffee,
                                    title: "Free Coffee",
                                    description: "Grab a fresh cup of coffee and a pastry at our Cafe before service starts."
                                },
                                {
                                    icon: Users,
                                    title: "Casual Dress",
                                    description: "Come as you are! You'll see everything from jeans to business casual."
                                }
                            ].map((item, i) => (
                                <div key={i} className="text-center space-y-4">
                                    <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center text-accent">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-bold text-xl">{item.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Kids & Youth */}
                <section className="py-20 bg-gray-900 text-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-6">
                                <h2 className="font-serif text-3xl md:text-4xl font-bold italic text-primary">Bringing the Family?</h2>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    We love families! Our Grace Kids and Grace Youth programs provided high-energy,
                                    safe, and age-appropriate environments for your children to learn about Jesus.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <Baby className="h-6 w-6 text-accent mt-1" />
                                        <div>
                                            <h4 className="font-bold">Nursery & Pre-K</h4>
                                            <p className="text-sm text-gray-400">Safe and loving care for our littlest ones during both services.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <Heart className="h-6 w-6 text-accent mt-1" />
                                        <div>
                                            <h4 className="font-bold">Elementary (K-5th)</h4>
                                            <p className="text-sm text-gray-400">Engaging worship and small groups designed just for kids.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-[400px] rounded-2xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1544427928-c49cdfebf194?q=80&w=2030&auto=format&fit=crop"
                                    alt="Children's ministry"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Let us know you're coming Form */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <Card className="shadow-2xl border-none">
                            <CardHeader className="text-center space-y-2">
                                <CardTitle className="text-3xl font-serif">Let Us Know You're Coming</CardTitle>
                                <p className="text-gray-500">We'll have a gift waiting for you at our Welcome Center!</p>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">First Name</label>
                                            <input type="text" className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Last Name</label>
                                            <input type="text" className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent" required />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Email Address</label>
                                        <input type="email" className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent" required />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Visiting on</label>
                                            <select className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent bg-white">
                                                <option>This Sunday @ 9:00 AM</option>
                                                <option>This Sunday @ 11:00 AM</option>
                                                <option>Another Time</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Number of Kids (Ages 0-11)</label>
                                            <input type="number" className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent" min="0" />
                                        </div>
                                    </div>
                                    <Button type="submit" variant="primary" className="w-full py-6 text-lg">Send My Plan</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
