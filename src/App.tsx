import { MotionConfig } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Disciplines from "@/components/Disciplines";
import Works from "@/components/Works";
import Process from "@/components/Process";
import Tools from "@/components/Tools";
import Socials from "@/components/Socials";
import VideoIntro from "@/components/VideoIntro";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-ink font-sans text-cream">
        <div className="grain" aria-hidden="true" />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Disciplines />
          <Works />
          <Process />
          <Tools />
          <Socials />
          <VideoIntro />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
