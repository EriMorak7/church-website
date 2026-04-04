import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ServiceTimes } from "@/components/sections/ServiceTimes";
import { PastorsSection } from "@/components/sections/PastorsSection";

import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { sermons, churchInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Home() {
  const latestSermon = sermons[0];

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <ServiceTimes />

        {/* Vision Section */}
        <section className="py-32 bg-primary px-6 md:px-10 overflow-hidden">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-start relative">
              <div className="lg:w-1/2 relative z-10">
                <h2 className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-8">Our Vision</h2>
                <h3 className="font-sans text-7xl md:text-9xl font-black uppercase tracking-tighter text-heading leading-[0.85] mb-8">
                  No One <br /> Walks <br /> Alone
                </h3>
              </div>
              <div className="lg:w-1/2 lg:pt-32 relative z-10">
                <p className="text-xl md:text-2xl text-secondary leading-relaxed mb-12 max-w-xl opacity-80">
                  The feeling of home is something we all find ourselves drawn to.
                  Whether our image of home is painted with heartwarming moments or life-altering experiences,
                  our longing for our true home is what points us to the love of God.
                </p>
                <Link href="/about" className={buttonVariants({ variant: "outline", className: "border-heading text-heading hover:bg-heading hover:text-primary" })}>
                  Our Story
                </Link>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mr-48 -mt-24" />
            </div>
          </div>
        </section>

        {/* Latest Message Section */}
        <section className="py-32 bg-bg-muted px-6 md:px-10 relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-5/12 space-y-10">
                <div className="space-y-4">
                  <h2 className="text-xs font-black uppercase tracking-[0.4em] text-accent">Latest Message</h2>
                  <h3 className="font-sans text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-heading">
                    {latestSermon.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  <p className="text-xl font-bold uppercase tracking-[0.2em] text-secondary">{latestSermon.speaker}</p>
                  <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/20">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">{latestSermon.series}</p>
                  </div>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row gap-6">
                  <a href={latestSermon.youtubeUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                    <Play className="mr-2 h-4 w-4" fill="currentColor" /> Watch Now
                  </a>
                  <Link href="/sermons" className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "text-heading hover:bg-heading/5")}>
                    All Messages <ArrowRight className="ml-3 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:w-7/12 w-full">
                <a
                  href={latestSermon.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-video bg-black/60 relative group overflow-hidden shadow-2xl border border-white/5"
                >
                  <img
                    src={latestSermon.thumbnail}
                    alt={latestSermon.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 border-2 border-white/30 rounded-full flex items-center justify-center pl-1 group-hover:scale-110 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-500">
                      <Play className="h-10 w-10 text-white" fill="currentColor" />
                    </div>
                  </div>

                  {/* Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <PastorsSection />

      </main>

      <Footer />
    </div>
  );
}
