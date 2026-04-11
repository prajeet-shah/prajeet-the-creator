import HeroSection from "@/components/home/HeroSection";
import WhatWeDo from "@/components/home/WhatWeDo";
import LatestUpdates from "@/components/home/LatestUpdates";
import FeaturedVideos from "@/components/home/FeaturedVideos";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="section-divider" />
      <WhatWeDo />
      <div className="section-divider" />
      <LatestUpdates />
      <div className="section-divider" />
      <FeaturedVideos />
    </>
  );
}
