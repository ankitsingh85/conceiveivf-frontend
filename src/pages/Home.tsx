import Hero from "../components/Hero";
import About from "../components/About";
import ParenthoodJourney from "../components/ParenthoodJourney";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import VideoSection from "@/components/Video";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Blog from "../components/BlogHome";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />

      <About />

      <ParenthoodJourney />

      <Services />

      <WhyUs />
       <VideoSection/>
      <Process />

      {/* <Doctors /> */}
<Blog />
      <Testimonials />

      <FAQ />

      <Contact />
    </main>
  );
}