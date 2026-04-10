import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./HeroCarousel.css";

const slides = [
  {
    image: "/images/solar roof.jpeg",
    title: "Powering Zambia's Future",
    subtitle: "with Solar Energy",
    desc: "Reliable Solar Energy Solutions & Installations for residential, commercial & industrial clients.",
  },
  {
    image: "/images/road constructed.jpeg",
    title: "Engineering Excellence",
    subtitle: "in Civil & Structural Projects",
    desc: "Building infrastructure that transforms communities across Zambia.",
  },
  {
    image: "/images/WhatsApp Image 2026-03-23 at 13.10.58.jpeg",
    title: "Reliable Electrical",
    subtitle: "Engineering Solutions",
    desc: "Professional electrical engineering for residential & commercial projects.",
  },
  {
    image: "/images/machinary.jpeg",
    title: "Mining Engineering",
    subtitle: "& Industrial Solutions",
    desc: "Surface & underground mining operations with modern equipment.",
  },
];

const HeroCarousel = () => {
  return (
    <section className="hero-carousel">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-slide__overlay" />
              <div className="hero-slide__content">
                <h1 className="hero-slide__title">{slide.title}</h1>
                <h2 className="hero-slide__subtitle">{slide.subtitle}</h2>
                <p className="hero-slide__desc">{slide.desc}</p>
                <div className="hero-slide__buttons">
                  <Link to="/services" className="hero-btn hero-btn--primary">
                    Our Services
                  </Link>
                  <Link to="/contact" className="hero-btn hero-btn--outline">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroCarousel;
