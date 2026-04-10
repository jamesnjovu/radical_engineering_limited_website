import { Link } from "react-router-dom";
import {
  FaEye,
  FaBullseye,
  FaShieldAlt,
  FaUsers,
  FaLightbulb,
  FaBriefcase,
  FaClock,
  FaHandshake,
  FaCertificate,
  FaFileAlt,
  FaCheckCircle,
  FaIdBadge,
  FaClipboardList,
} from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";
import "./About.css";

const coreValues = [
  {
    icon: FaShieldAlt,
    title: "Quality, Safety & Sustainability",
    desc: "We maintain the highest standards of quality and safety while promoting sustainable engineering practices.",
  },
  {
    icon: FaUsers,
    title: "Teamwork",
    desc: "Collaborative effort across all disciplines to deliver exceptional project outcomes.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation",
    desc: "Embracing new technologies and creative approaches to solve complex engineering challenges.",
  },
  {
    icon: FaBriefcase,
    title: "Professionalism",
    desc: "Conducting our business with the utmost professionalism and ethical standards at every level.",
  },
  {
    icon: FaClock,
    title: "Promptness",
    desc: "Delivering projects on time and responding to client needs with urgency and efficiency.",
  },
  {
    icon: FaHandshake,
    title: "Integrity",
    desc: "Building lasting relationships through honesty, transparency, and accountability in all interactions.",
  },
];

const certifications = [
  {
    icon: FaFileAlt,
    name: "PACRA Registration",
    details: "Incorporated: December 9, 2020",
  },
  {
    icon: FaCertificate,
    name: "ZRA Tax Clearance",
    details: "Zambia Revenue Authority",
  },
  {
    icon: FaCheckCircle,
    name: "NAPSA Compliance",
    details: "National Pension Scheme Authority",
  },
  {
    icon: FaIdBadge,
    name: "WCFCB Registration",
    details: "Workers' Compensation Fund Control Board",
  },
  {
    icon: FaClipboardList,
    name: "ZPPA Registration",
    details: "Zambia Public Procurement Authority",
  },
];

const About = () => {
  return (
    <>
      {/* Page Banner */}
      <section className="page-banner" style={{ backgroundImage: "url(/images/WhatsApp Image 2026-03-23 at 13.12.11.jpeg)" }}>
        <h1>About Us</h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link> &nbsp;/&nbsp; About
        </div>
      </section>

      {/* Company Story */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="about-story">
              <div className="about-story__image">
                <img
                  src="/images/WhatsApp Image 2026-03-28 at 22.02.42 (2).jpeg"
                  alt="Radical Engineering team at work"
                />
              </div>
              <div className="about-story__content">
                <h2>Our Story</h2>
                <p>
                  Founded in 2020, Radical Engineering Limited is a
                  forward-thinking Engineering, Procurement &amp; Construction
                  (EPC) company based in Lusaka, Zambia. We specialize in Solar
                  System Designs, Mining Engineering, Civil Engineering &amp;
                  Electrical Engineering, serving as a trusted partner for
                  Commercial, Residential &amp; Industrial clients seeking
                  Engineering Expertise.
                </p>
                <p>
                  In a country where we experience 85% of Load shedding, Radical
                  Engineering was born from the need to provide Reliable Solar
                  Energy Solutions &amp; Installations. Our team of skilled
                  engineers and technicians work tirelessly to deliver
                  sustainable, cost-effective solutions that empower communities
                  and businesses across Zambia.
                </p>
                <p>
                  From our inception, we have grown to become a multi-disciplinary
                  EPC firm with a proven track record in solar energy, civil
                  infrastructure, electrical installations, mining support, and
                  general supplies.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section vision-mission">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2>Vision &amp; Mission</h2>
              <p>Driving engineering excellence across Southern Africa</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="vision-mission__grid">
              <div className="vision-mission__card">
                <div className="vision-mission__icon">
                  <FaEye />
                </div>
                <h3>Our Vision</h3>
                <p>
                  To become the most trusted EPC company across The Southern
                  African Region empowering communities with Innovative,
                  Progressive Engineering Projects with Top Notch Technologies
                  &amp; Sustainable Energy Independence.
                </p>
              </div>
              <div className="vision-mission__card">
                <div className="vision-mission__icon">
                  <FaBullseye />
                </div>
                <h3>Our Mission</h3>
                <p>
                  To provide World-class sustainable EPC services through
                  Engineering Excellence, Transparent Procurement &amp;
                  Professional Project Execution &amp; build lasting Partnerships
                  Rooted in Trust, Quality &amp; Reliability.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2>Our Core Values</h2>
              <p>The principles that guide everything we do</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="core-values__grid">
              {coreValues.map((value, i) => (
                <div className="core-value-card" key={i}>
                  <div className="core-value-card__icon">
                    <value.icon />
                  </div>
                  <h4>{value.title}</h4>
                  <p>{value.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Certifications */}
      <section className="section certifications">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2>Certifications &amp; Registrations</h2>
              <p>
                Fully registered and compliant with all relevant Zambian
                regulatory authorities
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="certifications__grid">
              {certifications.map((cert, i) => (
                <div className="cert-card" key={i}>
                  <div className="cert-card__icon">
                    <cert.icon />
                  </div>
                  <h4>{cert.name}</h4>
                  <p>{cert.details}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default About;
