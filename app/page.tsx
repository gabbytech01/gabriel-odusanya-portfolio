import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CapabilityStrip from "@/components/CapabilityStrip";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Metrics from "@/components/Metrics";
import Writing from "@/components/Writing";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gabriel Odusanya",
  alternateName: "GABBYTECH",
  jobTitle: "Application Security Engineer",
  email: "mailto:gabbytechsec@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NG",
  },
  sameAs: [
    "https://x.com/gabbytech01",
    "https://youtube.com/@gabbytech01",
    "https://github.com/gabbytech01",
    "https://www.linkedin.com/in/gabbytechsec",
  ],
  knowsAbout: [
    "Application Security",
    "API Security",
    "Mobile Security",
    "Penetration Testing",
    "Threat Modeling",
    "Security Engineering",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Nav />
      <main id="main">
        <Hero />
        <CapabilityStrip />
        <Services />
        <Work />
        <Experience />
        <Metrics />
        <Writing />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
