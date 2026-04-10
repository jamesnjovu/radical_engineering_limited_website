import { useParams, Link, Navigate } from "react-router-dom";
import {
  FaSolarPanel,
  FaBuilding,
  FaBolt,
  FaHardHat,
  FaTruck,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";
import "./ServiceDetail.css";

const iconMap = {
  FaSolarPanel,
  FaBuilding,
  FaBolt,
  FaHardHat,
  FaTruck,
};

const serviceFullData = {
  "solar-energy": {
    title: "Solar Energy",
    icon: "FaSolarPanel",
    heroImage: "/images/solar roof 2.jpeg",
    intro:
      "Radical Engineering delivers comprehensive solar energy solutions tailored for residential, commercial, and industrial applications. Our expert team handles the full lifecycle of solar projects — from initial site assessment and feasibility studies to PV system design, installation, and ongoing maintenance.",
    description:
      "In a country where we experience 85% of Load shedding, Radical Engineering offers Reliable Solar Energy Solutions & Installations. We specialize in hybrid and off-grid systems, integrating advanced battery energy storage to maximize energy independence. Additionally, we provide comprehensive service backup on all our products & services, thereby ensuring total solutions to power deficits.",
    services: [
      {
        title: "Solar PV System Design & Installation",
        desc: "Custom-designed solar PV systems for residential, commercial, and industrial applications. We use 3D modeling and simulation to optimize system performance.",
      },
      {
        title: "Hybrid & Off-Grid Solar Solutions",
        desc: "Complete hybrid and off-grid solar systems that provide energy independence and reliable backup power for any application.",
      },
      {
        title: "Battery Storage Integration",
        desc: "Advanced lithium battery storage solutions from tier-one manufacturers including Hanchu ESS, ensuring reliable energy storage and backup.",
      },
      {
        title: "Operations & Maintenance (O&M)",
        desc: "Ongoing system monitoring, maintenance, and support to ensure optimal performance throughout the life of your solar system.",
      },
      {
        title: "Site Assessment & Feasibility Studies",
        desc: "Comprehensive site assessments to determine roof condition, orientation, energy demands, and system sizing for maximum efficiency.",
      },
    ],
    highlights: [
      "Customized solutions based on site-specific energy demands",
      "Over 6 years in the solar industry",
      "Tier-one solar modules and inverters",
      "Comprehensive warranties ranging from 1-10 years",
      "Reliable after-sales support and monitoring",
      "Sustainable, high-quality, durable components",
    ],
    gallery: [
      "/images/solar roof.jpeg",
      "/images/solar roof 2.jpeg",
      "/images/solar_products.jpg",
      "/images/ad_full_solar_installation.jpg",
    ],
    cta: "Ready to go solar? Get a free site assessment today.",
  },
  "civil-engineering": {
    title: "Civil & Structural Engineering",
    icon: "FaBuilding",
    heroImage: "/images/works.jpeg",
    intro:
      "Radical Engineering Ltd consistently delivers outstanding bespoke civil engineering & building solutions to public & private sector clients across Zambia.",
    description:
      "Our civil and structural engineering division brings precision and quality to every project. From communication tower construction to residential and commercial buildings, our team delivers robust infrastructure solutions that transform communities. We specialize in road construction, drainage systems, pedestrian walkways, and structural steel fabrication.",
    services: [
      {
        title: "Communication Towers",
        desc: "Design and construction of communication tower structures built to withstand environmental conditions and support modern telecommunications infrastructure.",
      },
      {
        title: "Residential & Commercial Buildings",
        desc: "Complete building solutions from foundation to finishing for residential homes, apartment complexes, and commercial properties.",
      },
      {
        title: "Road Construction & Rehabilitation",
        desc: "Professional road construction, rehabilitation, and maintenance services including grading, surfacing, and asphalt works.",
      },
      {
        title: "Drainage Systems",
        desc: "Design and installation of drainage channels, culverts, and stormwater management systems for urban and rural infrastructure.",
      },
      {
        title: "Pedestrian Walkways",
        desc: "Construction of safe, durable pedestrian walkways and pathways for public and private developments.",
      },
    ],
    highlights: [
      "Experienced team of qualified civil engineers",
      "Modern construction equipment and techniques",
      "Public and private sector project delivery",
      "Quality-focused with strict safety protocols",
      "Environmental sustainability commitment",
      "Structural steel fabrication capability",
    ],
    gallery: [
      "/images/road constructed.jpeg",
      "/images/road works.jpeg",
      "/images/works.jpeg",
      "/images/tank.jpeg",
    ],
    cta: "Have a construction project in mind? Let's talk.",
  },
  "electrical-engineering": {
    title: "Electrical Engineering",
    icon: "FaBolt",
    heroImage: "/images/WhatsApp Image 2026-03-23 at 13.10.58.jpeg",
    intro:
      "Radical Engineering provides professional electrical engineering services for both residential and commercial clients, delivering safe and efficient electrical systems across Zambia.",
    description:
      "Our expertise spans complete electrical installations, pole-line installations and rerouting, and power distribution systems. We have successfully undertaken major projects including the rerouting of ZESCO Pole-lines along The Great-North Road by AVIC INTERNATIONAL, involving relocation and rerouting of existing overhead electric pole-lines to allow for planned road expansion.",
    services: [
      {
        title: "Residential Electrical Installations",
        desc: "Complete residential electrical wiring, panel installation, lighting systems, and home automation solutions.",
      },
      {
        title: "Commercial & Industrial Electrical",
        desc: "Large-scale electrical installations for commercial buildings, factories, and industrial facilities including power distribution systems.",
      },
      {
        title: "Pole-Line Installations & Rerouting",
        desc: "Installation of new electrical poles and rerouting of existing overhead power lines. Experience with ZESCO utility infrastructure projects.",
      },
      {
        title: "Power Distribution Systems",
        desc: "Design and installation of power distribution networks including transformers, switchgear, and protection systems.",
      },
      {
        title: "Utility Corridor Development",
        desc: "Vegetation clearing, surveying, and preparation of utility corridors for power line installations and infrastructure projects.",
      },
    ],
    highlights: [
      "Certified electrical technicians and engineers",
      "Experience with ZESCO and AVIC International projects",
      "Safety-compliant installations",
      "Both residential and commercial expertise",
      "Power distribution network design",
      "Controlled rerouting to prevent service interruptions",
    ],
    gallery: [
      "/images/WhatsApp Image 2026-03-23 at 13.10.58.jpeg",
      "/images/WhatsApp Image 2026-03-23 at 13.10.59.jpeg",
      "/images/WhatsApp Image 2026-03-23 at 13.11.01.jpeg",
      "/images/WhatsApp Image 2026-02-10 at 18.38.02.jpeg",
    ],
    cta: "Need electrical engineering expertise? Contact us today.",
  },
  "mining-engineering": {
    title: "Mining Engineering",
    icon: "FaHardHat",
    heroImage: "/images/machinary.jpeg",
    intro:
      "Radical Engineering Ltd. offers construction, maintenance, and rehabilitation services for surface and underground mining operations across Zambia.",
    description:
      "Our mining engineering operations are guided by strict regulatory compliance, environmental stewardship, and a strong commitment to worker safety & community engagement. By leveraging skilled engineers, modern equipment, and innovative techniques, our aim is to optimize resource recovery, reduce operational costs, and minimize environmental impact while maximizing value for clients and stakeholders.",
    services: [
      {
        title: "Surface Mining Operations",
        desc: "Complete surface mining support services including earthmoving, excavation, haulage, and site preparation for mining operations.",
      },
      {
        title: "Underground Mining Support",
        desc: "Specialized services for underground mining operations including ventilation, ground support, and infrastructure installation.",
      },
      {
        title: "Construction & Rehabilitation",
        desc: "Construction of mining infrastructure and rehabilitation of mine sites to meet environmental and regulatory standards.",
      },
      {
        title: "Environmental Stewardship",
        desc: "Environmentally responsible mining practices with focus on minimizing impact, waste management, and site rehabilitation.",
      },
      {
        title: "Safety Management Systems",
        desc: "Implementation of comprehensive safety management systems ensuring worker safety and regulatory compliance at all mining operations.",
      },
    ],
    highlights: [
      "Skilled mining engineers and technicians",
      "Modern equipment and innovative techniques",
      "Strict regulatory compliance",
      "Environmental impact minimization",
      "Worker safety as top priority",
      "Community engagement and development",
    ],
    gallery: [
      "/images/machinary.jpeg",
      "/images/machinary2.jpeg",
    ],
    cta: "Looking for reliable mining engineering services? Let's discuss your project.",
  },
  "general-supplies": {
    title: "General Supplies",
    icon: "FaTruck",
    heroImage: "/images/tank.jpeg",
    intro:
      "As a ZPPA-registered supplier (Registration No. 38498), Radical Engineering provides reliable procurement and supply chain management services across Zambia.",
    description:
      "We source high-quality equipment, materials, and industrial supplies from trusted manufacturers, ensuring timely delivery and competitive pricing for our clients across all engineering sectors. Our procurement capabilities span building and construction machinery, electrical equipment, industrial supplies, food and beverage products, office equipment, and more.",
    services: [
      {
        title: "Procurement Services",
        desc: "Professional procurement management for engineering materials, equipment, and supplies from trusted global and local manufacturers.",
      },
      {
        title: "Supply Chain Management",
        desc: "End-to-end supply chain solutions ensuring timely delivery, quality control, and competitive pricing for all project requirements.",
      },
      {
        title: "Equipment Sourcing",
        desc: "Sourcing of specialized engineering equipment, machinery, and tools from verified suppliers and manufacturers.",
      },
      {
        title: "Material Supply & Logistics",
        desc: "Comprehensive material supply and logistics management for construction, mining, and engineering projects.",
      },
    ],
    highlights: [
      "ZPPA registered supplier (No. 38498)",
      "Registered for 13+ supply categories",
      "Competitive pricing from trusted manufacturers",
      "Timely delivery and logistics management",
      "Quality control on all supplied materials",
      "Serving public and private sector clients",
    ],
    gallery: [
      "/images/tank.jpeg",
      "/images/solar_products_2.jpg",
    ],
    cta: "Need engineering supplies or procurement support? Contact us for a quote.",
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceFullData[slug];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = iconMap[service.icon];

  // Get other services for sidebar/bottom links
  const otherServices = Object.entries(serviceFullData)
    .filter(([key]) => key !== slug)
    .map(([key, val]) => ({ slug: key, title: val.title, icon: val.icon }));

  return (
    <>
      {/* Hero Banner */}
      <section
        className="service-hero"
        style={{ backgroundImage: `url(${service.heroImage})` }}
      >
        <div className="service-hero__overlay" />
        <div className="service-hero__content">
          <div className="service-hero__icon">
            <Icon />
          </div>
          <h1>{service.title}</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link> &nbsp;/&nbsp;{" "}
            <Link to="/services">Services</Link> &nbsp;/&nbsp; {service.title}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="service-page-layout">
            {/* Main Column */}
            <div className="service-page-main">
              <ScrollReveal>
                <div className="service-intro">
                  <p className="service-intro__lead">{service.intro}</p>
                  <p>{service.description}</p>
                </div>
              </ScrollReveal>

              {/* Sub-services */}
              <ScrollReveal>
                <h2 className="service-section-title">What We Offer</h2>
                <div className="service-offerings">
                  {service.services.map((item, i) => (
                    <div className="service-offering-card" key={i}>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Highlights */}
              <ScrollReveal>
                <h2 className="service-section-title">Key Highlights</h2>
                <ul className="service-highlights">
                  {service.highlights.map((item, i) => (
                    <li key={i}>
                      <FaCheckCircle className="highlight-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              {/* Gallery */}
              {service.gallery.length > 0 && (
                <ScrollReveal>
                  <h2 className="service-section-title">Project Gallery</h2>
                  <div className="service-gallery">
                    {service.gallery.map((img, i) => (
                      <div className="service-gallery__item" key={i}>
                        <img src={img} alt={`${service.title} project ${i + 1}`} />
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              )}

              {/* CTA */}
              <ScrollReveal>
                <div className="service-cta-box">
                  <p>{service.cta}</p>
                  <Link to="/contact" className="btn btn-primary">
                    Contact Us <FaArrowRight />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <aside className="service-page-sidebar">
              <div className="sidebar-card">
                <h3>Our Services</h3>
                <ul className="sidebar-services">
                  {Object.entries(serviceFullData).map(([key, val]) => {
                    const SideIcon = iconMap[val.icon];
                    return (
                      <li key={key} className={key === slug ? "active" : ""}>
                        <Link to={`/services/${key}`}>
                          <SideIcon className="sidebar-icon" />
                          {val.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="sidebar-card sidebar-contact">
                <h3>Need Help?</h3>
                <p>Get in touch with our team for a free consultation.</p>
                <a href="tel:+260969722376" className="sidebar-phone">
                  +260 969 722 376
                </a>
                <a href="mailto:radicalengineering22@gmail.com" className="sidebar-email">
                  radicalengineering22@gmail.com
                </a>
                <Link to="/contact" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: "1rem" }}>
                  Get a Quote
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
