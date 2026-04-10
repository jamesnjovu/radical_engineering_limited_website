import { Link } from "react-router-dom";
import {
  FaSolarPanel,
  FaBuilding,
  FaBolt,
  FaHardHat,
  FaTruck,
  FaArrowRight,
} from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";
import "./Services.css";

const serviceDetails = [
  {
    id: 1,
    slug: "solar-energy",
    icon: FaSolarPanel,
    title: "Solar Energy",
    image: "/images/solar roof 2.jpeg",
    description:
      "Radical Engineering delivers comprehensive solar energy solutions tailored for residential, commercial, and industrial applications. Our expert team handles the full lifecycle of solar projects from initial site assessment and feasibility studies to PV system design, installation, and ongoing maintenance. We specialize in hybrid and off-grid systems, integrating advanced battery energy storage to maximize energy independence.",
    extraInfo:
      "We provide customized solutions backed by warranties ranging from 1 to 10 years, with dedicated after-sales support to ensure optimal system performance throughout the lifespan of your investment.",
    bullets: [
      "PV system design & engineering",
      "Hybrid & off-grid solar systems",
      "Battery energy storage solutions",
      "Operations & maintenance (O&M)",
      "Site assessment & feasibility studies",
      "Customized solutions with 1-10 year warranties",
      "After-sales support & monitoring",
    ],
  },
  {
    id: 2,
    slug: "civil-engineering",
    icon: FaBuilding,
    title: "Civil & Structural Engineering",
    image: "/images/works.jpeg",
    description:
      "Our civil and structural engineering division delivers robust infrastructure solutions across Zambia. From communication tower construction to residential and commercial buildings, our team brings precision and quality to every project. We specialize in road construction, drainage systems, pedestrian walkways, and structural steel fabrication.",
    extraInfo: null,
    bullets: [
      "Communication tower construction",
      "Residential building construction",
      "Commercial building construction",
      "Road construction & rehabilitation",
      "Drainage systems & culvert installations",
      "Pedestrian walkways",
      "Structural steel fabrication",
    ],
  },
  {
    id: 3,
    slug: "electrical-engineering",
    icon: FaBolt,
    title: "Electrical Engineering",
    image: "/images/WhatsApp Image 2026-03-23 at 13.10.58.jpeg",
    description:
      "Radical Engineering provides professional electrical engineering services for residential, commercial, and industrial clients. Our expertise spans complete electrical installations, pole-line installations and rerouting, and power distribution systems. We have successfully undertaken projects such as the rerouting of ZESCO pole-lines along the Great-North Road in collaboration with AVIC International.",
    extraInfo: null,
    bullets: [
      "Residential electrical installations",
      "Commercial & industrial electrical installations",
      "Pole-line installations & rerouting",
      "Power distribution systems",
      "ZESCO pole-line rerouting projects",
      "Utility corridor development",
    ],
  },
  {
    id: 4,
    slug: "mining-engineering",
    icon: FaHardHat,
    title: "Mining Engineering",
    image: "/images/machinary.jpeg",
    description:
      "Our mining engineering division provides construction, maintenance, and rehabilitation services for both surface and underground mining operations. We are committed to environmental stewardship, strict safety protocols, and full regulatory compliance. Our team works alongside mining operators to deliver efficient, safe, and sustainable mining solutions.",
    extraInfo: null,
    bullets: [
      "Surface mining operations support",
      "Underground mining services",
      "Construction, maintenance & rehabilitation",
      "Environmental stewardship",
      "Safety management systems",
      "Regulatory compliance",
    ],
  },
  {
    id: 5,
    slug: "general-supplies",
    icon: FaTruck,
    title: "General Supplies",
    image: "/images/tank.jpeg",
    description:
      "As a ZPPA-registered supplier, Radical Engineering provides reliable procurement and supply chain management services. We source high-quality equipment, materials, and industrial supplies from trusted manufacturers, ensuring timely delivery and competitive pricing for our clients across all engineering sectors.",
    extraInfo: null,
    bullets: [
      "Procurement services",
      "Supply chain management",
      "Equipment sourcing from trusted manufacturers",
      "Material supply & logistics",
      "ZPPA registered supplier",
    ],
  },
];

const Services = () => {
  return (
    <>
      {/* Page Banner */}
      <section className="page-banner" style={{ backgroundImage: 'url(/images/WhatsApp Image 2026-03-19 at 15.10.35.jpeg)' }}>
        <h1>Our Services</h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link> &nbsp;/&nbsp; Services
        </div>
      </section>

      {/* Service Sections */}
      {serviceDetails.map((service, index) => (
        <section
          className={`section ${index % 2 !== 0 ? "services-alt-bg" : ""}`}
          key={service.id}
        >
          <div className="container">
            <ScrollReveal>
              <div
                className={`service-detail ${
                  index % 2 !== 0 ? "reverse" : ""
                }`}
              >
                <div className="service-detail__image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-detail__content">
                  <h2>
                    <span className="service-icon">
                      <service.icon />
                    </span>
                    {service.title}
                  </h2>
                  <p>{service.description}</p>
                  {service.extraInfo && <p>{service.extraInfo}</p>}
                  <ul className="service-detail__list">
                    {service.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                  <Link to={`/services/${service.slug}`} className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                    Learn More <FaArrowRight />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}
    </>
  );
};

export default Services;
