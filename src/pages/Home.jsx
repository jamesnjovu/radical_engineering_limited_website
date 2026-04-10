import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  FaSolarPanel,
  FaBuilding,
  FaBolt,
  FaHardHat,
  FaTruck,
  FaUserTie,
  FaCertificate,
  FaProjectDiagram,
  FaHandshake,
  FaShieldAlt,
  FaLightbulb,
  FaChevronLeft,
  FaChevronRight,
  FaPhoneAlt,
} from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";
import ServiceCard from "../components/ServiceCard";
import services from "../data/services";
import "./Home.css";

const iconMap = {
  FaSolarPanel,
  FaBuilding,
  FaBolt,
  FaHardHat,
  FaTruck,
};

/* ---------- Hero Carousel ---------- */
const heroSlides = [
  {
    image: "/images/solar roof 2.jpeg",
    title: "Powering Zambia with Clean Solar Energy",
    text: "Reliable solar PV design, installation, and maintenance for residential, commercial, and industrial clients.",
  },
  {
    image: "/images/road works.jpeg",
    title: "Engineering Excellence in Civil Infrastructure",
    text: "Roads, buildings, drainage systems, and communication towers built to the highest standards.",
  },
  {
    image: "/images/WhatsApp Image 2026-03-23 at 13.10.58.jpeg",
    title: "Professional Electrical Engineering Solutions",
    text: "From pole-line installations to power distribution, we deliver safe and efficient electrical systems.",
  },
  {
    image: "/images/machinary.jpeg",
    title: "Mining Engineering You Can Trust",
    text: "Surface and underground mining support with a commitment to safety and environmental stewardship.",
  },
];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  const goTo = (idx) => {
    setCurrent(idx);
    resetTimer();
  };
  const prev = () => goTo((current - 1 + heroSlides.length) % heroSlides.length);
  const next = () => goTo((current + 1) % heroSlides.length);

  return (
    <section className="hero-carousel">
      {heroSlides.map((slide, i) => (
        <div key={i} className={`hero-slide ${i === current ? "active" : ""}`}>
          <div className="hero-slide__image">
            <img src={slide.image} alt={slide.title} />
          </div>
          <div className="hero-slide__overlay" />
          <div className="hero-slide__content">
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
            <div className="hero-slide__buttons">
              <Link to="/services" className="btn btn-accent">
                Our Services
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      ))}

      <button className="hero-carousel__arrow hero-carousel__arrow--left" onClick={prev} aria-label="Previous slide">
        <FaChevronLeft />
      </button>
      <button className="hero-carousel__arrow hero-carousel__arrow--right" onClick={next} aria-label="Next slide">
        <FaChevronRight />
      </button>

      <div className="hero-carousel__indicators">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            className={`hero-carousel__dot ${i === current ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

/* ---------- Stats Counter ---------- */
function StatsCounter() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 5, suffix: "+", label: "Years Experience" },
    { value: 100, suffix: "+", label: "Projects Completed" },
    { value: 50, suffix: "+", label: "Happy Clients" },
    { value: 5, suffix: "", label: "Service Sectors" },
  ];

  return (
    <section className="stats-section" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-item__number">
                {visible ? <Counter end={stat.value} /> : "0"}
                {stat.suffix}
              </div>
              <div className="stat-item__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = Math.ceil(end / (duration / 30));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count}</>;
}

/* ---------- Why Choose Us Items ---------- */
const whyChooseItems = [
  {
    icon: FaUserTie,
    title: "Skilled Team",
    desc: "Our experienced engineers and technicians bring expertise across multiple engineering disciplines.",
  },
  {
    icon: FaCertificate,
    title: "Tier-One Products",
    desc: "We use only high-quality, certified products from trusted global manufacturers.",
  },
  {
    icon: FaProjectDiagram,
    title: "End-to-end Delivery",
    desc: "From design and procurement to construction and commissioning, we handle every phase.",
  },
  {
    icon: FaHandshake,
    title: "Strong Partnerships",
    desc: "We collaborate with industry leaders and local stakeholders for impactful project delivery.",
  },
  {
    icon: FaShieldAlt,
    title: "Quality & Safety",
    desc: "Strict adherence to quality standards and safety protocols on every project we undertake.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation",
    desc: "Embracing cutting-edge technologies and sustainable practices to drive engineering forward.",
  },
];

/* ---------- Home Page ---------- */
const Home = () => {
  return (
    <>
      {/* Hero */}
      <HeroCarousel />

      {/* Stats */}
      <StatsCounter />

      {/* Services */}
      <section className="section home-services">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2>Our Core Services</h2>
              <p>
                Comprehensive EPC solutions across multiple engineering
                disciplines
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="services-grid">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  icon={iconMap[service.icon]}
                  title={service.title}
                  description={service.shortDesc}
                  link={`/services/${service.slug}`}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Teaser */}
      <section className="section">
        <div className="container">
          <div className="about-teaser">
            <ScrollReveal direction="left">
              <div className="about-teaser__image">
                <img
                  src="/images/WhatsApp Image 2026-03-28 at 22.02.42 (2).jpeg"
                  alt="Radical Engineering team"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <div className="about-teaser__content">
                <h2>About Radical Engineering</h2>
                <p>
                  Founded in 2020, Radical Engineering is a forward-thinking EPC
                  company specializing in Solar System Designs, Mining
                  Engineering, Civil Engineering &amp; Electrical Engineering. We
                  are a trusted partner for Commercial, Residential &amp;
                  Industrial clients seeking Engineering Expertise.
                </p>
                <p>
                  In a country where we experience 85% of Load shedding,
                  Radical Engineering offers Reliable Solar Energy Solutions
                  &amp; Installations.
                </p>
                <Link to="/about" className="btn btn-primary">
                  Learn More
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2>Why Choose Us</h2>
              <p>
                Trusted by clients across Zambia for quality, reliability, and
                innovation
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="why-choose-grid">
              {whyChooseItems.map((item, i) => (
                <div className="why-choose-item" key={i}>
                  <div className="why-choose-item__icon">
                    <item.icon />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Banner */}
      <ScrollReveal direction="zoom">
        <section className="cta-banner">
          <div className="container">
            <h2>Ready to Power Your Next Project?</h2>
            <p>
              Get in touch today for a free consultation and site assessment.
            </p>
            <div className="cta-banner__buttons">
              <Link to="/contact" className="btn btn-accent">
                Get a Quote
              </Link>
              <a href="tel:+260969722376" className="btn btn-outline">
                <FaPhoneAlt /> Call Us
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
};

export default Home;
