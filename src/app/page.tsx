"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import { Sparkles, Bed, Star, Heart, Calendar } from "lucide-react";

// Missing import for NavbarLayoutFloatingOverlay
// Missing import for HeroBillboard
// Missing import for ProductCardThree
// Missing import for FeatureCardOne
// Missing import for TestimonialCardOne
// Missing import for ContactCenter
// Missing import for FooterLogoEmphasis

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <main className="mx-auto">
        <div id="nav" data-section="nav">
          {/* NavbarLayoutFloatingOverlay component not available */}
        </div>

        <div id="hero" data-section="hero">
          {/* HeroBillboard component not available */}
        </div>

        <div id="rooms" data-section="rooms">
          {/* ProductCardThree component not available */}
        </div>

        <div id="amenities" data-section="amenities">
          {/* FeatureCardOne component not available */}
        </div>

        <div id="testimonials" data-section="testimonials">
          {/* TestimonialCardOne component not available */}
        </div>

        <div id="contact" data-section="contact">
          {/* ContactCenter component not available */}
        </div>

        <div id="footer" data-section="footer">
          {/* FooterLogoEmphasis component not available */}
        </div>
      </main>
    </ThemeProvider>
  );
}