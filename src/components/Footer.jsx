import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaFacebook } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/products", label: "Products" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const services = [
    { label: "Solar Energy", path: "/services/solar-energy" },
    { label: "Civil Engineering", path: "/services/civil-engineering" },
    { label: "Electrical Engineering", path: "/services/electrical-engineering" },
    { label: "Mining Engineering", path: "/services/mining-engineering" },
    { label: "General Supplies", path: "/services/general-supplies" },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Column 1: Logo & Description */}
          <div className="footer__col">
            <img
              src="/images/rad-logo-with-name.png"
              alt="Radical Engineering Limited"
              className="footer__logo"
            />
            <p className="footer__description">
              Radical Engineering Limited is a leading EPC engineering firm in
              Zambia providing innovative solutions in solar energy, civil
              engineering, electrical engineering, mining, and general supplies.
            </p>
            <div className="footer__socials">
              <a href="https://www.linkedin.com/in/radical-engineering-limited-151324381" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://web.facebook.com/profile.php?id=61559254805830" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__list">
              {quickLinks.map(({ path, label }) => (
                <li key={path}>
                  <Link to={path} className="footer__link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer__col">
            <h4 className="footer__heading">Our Services</h4>
            <ul className="footer__list">
              {services.map((service) => (
                <li key={service.path}>
                  <Link to={service.path} className="footer__link">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer__col">
            <h4 className="footer__heading">Contact Info</h4>
            <ul className="footer__contact-list">
              <li>
                <FaMapMarkerAlt className="footer__icon" />
                <span>
                  Alick Nkhata Rd, Adjacent to Kamloops Mall, Lusaka
                </span>
              </li>
              <li>
                <FaPhone className="footer__icon" />
                <span>0969722376 / 0977775293 / 0774718331</span>
              </li>
              <li>
                <FaEnvelope className="footer__icon" />
                <a href="mailto:radicalengineering22@gmail.com" className="footer__link">
                  radicalengineering22@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <p>&copy; 2025 Radical Engineering Limited. All Rights Reserved.</p>
          <p>TPIN: 2368903494</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
