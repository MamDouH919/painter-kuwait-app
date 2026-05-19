import dynamic from 'next/dynamic';


// Dynamically import the components
const Navbar = dynamic(() => import("@/components/layouts/Navbar"));
const Footer = dynamic(() => import("@/components/layouts/Footer"));
const Banner = dynamic(() => import("@/components/sections/Banner"));
const About = dynamic(() => import("@/components/sections/About"));
const Portfolio = dynamic(() => import("@/components/sections/Portfolio"));
const Links = dynamic(() => import("@/components/sections/Links"));
const Services = dynamic(() => import("@/components/sections/Services"));

const HeroSlider = dynamic(() => import("@/components/sections/SliderBanner"))
const ServicesTwo = dynamic(() => import("@/components/sections/ServicesTwo"))
const Stats = dynamic(() => import("@/components/sections/Stats"))
const Cta = dynamic(() => import("@/components/sections/CTA"))
const Faqs = dynamic(() => import("@/components/sections/Faqs"))
const Articles = dynamic(() => import("@/components/sections/Articles"))

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <Banner />
      <Portfolio />
      <About />
      <ServicesTwo />
      {/* <App /> */}
      <Links />
      <Stats />
      <Cta />
      <Services />
      <Articles />
      <Faqs />
      <Footer />
    </>
  );
}
