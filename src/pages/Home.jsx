
// export default function Home(){
//   return (
//     <>
//       <section className="hero">
//         <h1>Engineering Digital Transformation</h1>
//         <p>
//           Trusted technology partner delivering enterprise modernization,
//           digital engineering, and scalable IT solutions.
//         </p>
//       </section>

//       <section id="about" className="section">
//         <h2>About Us</h2>
//         <p>
//          Galacticos Network  is a global IT services company with decades of experience
//           helping enterprises modernize, innovate, and scale through technology.
//         </p>
//       </section>

//       <section id="services" className="section">
//         <h2>Our Services</h2>
//         <div className="grid">
//           <div className="card">Digital Transformation</div>
//           <div className="card">Enterprise Applications</div>
//           <div className="card">Cloud & Modernization</div>
//           <div className="card">AI & Automation</div>
//         </div>
//       </section>

//       <section id="industries" className="section dark">
//         <h2>Industries We Serve</h2>
//         <p>
//           BFSI, Healthcare, Technology, Manufacturing, Retail, and more.
//         </p>
//       </section>

//       <section id="contact" className="section">
//         <h2>Contact</h2>
//         <p>Email: info@Galacticos Network.in</p>
//       </section>
//     </>
//   )
// }


import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import IndustriesSection from "../components/home/IndustriesSection";
import CaseStudiesSection from "../components/home/CaseStudiesSection";
import OfficesSection from "../components/home/OfficesSection";
import TrustedCompanies from "../components/home/TrustedCompanies";
import HireAITalent from "../components/home/HireAITalent";
// import ContactSection from "../components/home/ContactSection";



export default function Home() {
  return (
    <>
      <HeroSection />
      <HireAITalent />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <OfficesSection />
      <TrustedCompanies />

      {/* <ContactSection /> */}

    </>
  );
}
