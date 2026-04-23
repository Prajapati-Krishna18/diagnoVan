import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Process from "./Process";
import Impact from "./Impact";
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        <Impact />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
