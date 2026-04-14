import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ServiceTimes } from "@/components/sections/ServiceTimes";
import { PastorsSection } from "@/components/sections/PastorsSection";
import { MinistriesGrid } from "@/components/sections/MinistriesGrid";

import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { sermons } from "@/lib/data";
import { fetchLatestVideos } from "@/lib/youtube";
import { cn } from "@/lib/utils";

export const revalidate = 3600;

export default async function Home() {
  const youtubeVideos = await fetchLatestVideos(1);
  const latestYouTube = youtubeVideos[0];

  const latestSermon = latestYouTube
    ? {
        title: latestYouTube.title,
        speaker: latestYouTube.channelName,
        series: latestYouTube.displayDate,
        youtubeUrl: latestYouTube.youtubeUrl,
        thumbnail: latestYouTube.thumbnail,
      }
    : sermons[0];

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden bg-primary selection:bg-accent selection:text-primary text-white">
      <Navbar />

      <main className="flex-1">
        <Hero />
        
        <div id="service-times">
          <ServiceTimes />
        </div>

        {/* Vision Section */}
        <section className="py-12 bg-primary px-6 md:px-10 overflow-hidden relative border-y border-white/5">
          {/* Ambient glows */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />

          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-24 items-start relative">
              <div className="lg:w-1/2 relative z-10 space-y-12">
                <div className="space-y-4">
                  <h2 className="text-sm font-black uppercase tracking-[0.5em] text-accent">The Vision of the Church</h2>
                  <h3 className="font-sans text-6xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.9] mb-8">
                    To Rescue,<br />Disciple,<br />And Train
                  </h3>
                </div>
                
                <div className="w-24 h-[1px] bg-accent/40" />
              </div>
              
              <div className="lg:w-1/2 lg:pt-24 relative z-10">
                <div className="space-y-8">
                  <ul className="space-y-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-xl font-medium list-none">
                    <li className="flex items-start">
                      <span className="mr-3 mt-2 min-w-[8px] h-[8px] rounded-full bg-accent inline-block"></span>
                      <span>To rescue men from darkness to light</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-2 min-w-[8px] h-[8px] rounded-full bg-accent inline-block"></span>
                      <span>To disciple and train men until they discover their ministries</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-2 min-w-[8px] h-[8px] rounded-full bg-accent inline-block"></span>
                      <span>Raising men as men of dignity and honor</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-2 min-w-[8px] h-[8px] rounded-full bg-accent inline-block"></span>
                      <span>
                        To prepare men for the coming of the lord through life of purity, power and praise 
                        <span className="block mt-4 text-sm text-accent/70 font-bold uppercase tracking-widest">— Isaiah 49:1-26</span>
                      </span>
                    </li>
                  </ul>
                  <Link 
                    href="/about" 
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }), 
                      "group rounded-none px-10 py-8 uppercase text-sm font-black tracking-widest transition-all duration-500"
                    )}
                  >
                    Our Story <ArrowRight className="ml-4 h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Message Section */}
        <section className="py-12 bg-surface px-6 md:px-10 relative overflow-hidden border-b border-white/5">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row gap-24 items-center">
              <div className="lg:w-1/2 space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-[1px] bg-accent" />
                    <h2 className="text-sm font-black uppercase tracking-[0.5em] text-accent">Latest Message</h2>
                  </div>
                  <h3 className="font-sans text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-white">
                    {latestSermon.title}
                  </h3>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-accent/10 flex items-center justify-center border border-accent/20">
                    <Play className="h-6 w-6 text-accent" fill="currentColor" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-lg font-black uppercase tracking-widest text-white/80">{latestSermon.speaker}</p>
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-accent/70">{latestSermon.series}</p>
                  </div>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row gap-6">
                  <a 
                    href={latestSermon.youtubeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={cn(
                      buttonVariants({ variant: "primary", size: "lg" }), 
                      "rounded-none px-12 py-8 uppercase text-sm font-black tracking-widest"
                    )}
                  >
                     Watch Now
                  </a>
                  <Link 
                    href="/sermons" 
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "lg" }), 
                      "text-white/60 hover:text-white uppercase text-sm font-black tracking-widest group"
                    )}
                  >
                    Archive <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </Link>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <a
                  href={latestSermon.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-video relative group overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] border border-white/5 glow-gold"
                >
                  <img
                    src={latestSermon.thumbnail}
                    alt={latestSermon.title}
                    className="w-full h-full object-cover transition-all duration-1000 scale-[1.02] group-hover:scale-100"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-700">
                      <Play className="h-8 w-8 text-white transition-colors group-hover:text-accent" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <MinistriesGrid />

        <div className="bg-primary pt-24 border-t border-white/5">
          <PastorsSection />
        </div>

      </main>

      <Footer />
    </div>
  );
}
