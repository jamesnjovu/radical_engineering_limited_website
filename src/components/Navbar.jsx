import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import services from "../data/services";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
    setDropdownOpen(false);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/products", label: "Products" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar__container">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <img src="/images/rad-logo-with-name.png" alt="Radical Engineering Limited" />
        </Link>

        <ul className={`navbar__links ${menuOpen ? "active" : ""}`}>
          {navLinks.map(({ path, label }) => {
            if (label === "About") {
              return (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `navbar__link ${isActive ? "navbar__link--active" : ""}`
                    }
                    onClick={closeMenu}
                  >
                    {label}
                  </NavLink>
                </li>
              );
            }
            return (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `navbar__link ${isActive ? "navbar__link--active" : ""}`
                  }
                  onClick={closeMenu}
                  end={path === "/"}
                >
                  {label}
                </NavLink>
              </li>
            );
          })}

          {/* Services Dropdown - Desktop */}
          <li
            className="navbar__dropdown"
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            style={{ order: 2 }}
          >
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `navbar__link navbar__link--dropdown ${isActive ? "navbar__link--active" : ""}`
              }
              onClick={(e) => {
                // On desktop, allow navigation to /services overview
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  setMobileServicesOpen((prev) => !prev);
                }
              }}
            >
              Services <FaChevronDown className={`dropdown-arrow ${dropdownOpen ? "rotated" : ""}`} />
            </NavLink>

            {/* Desktop dropdown menu */}
            <div className={`navbar__dropdown-menu ${dropdownOpen ? "open" : ""}`}>
              <Link
                to="/services"
                className="navbar__dropdown-item navbar__dropdown-item--all"
                onClick={closeMenu}
              >
                All Services
              </Link>
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="navbar__dropdown-item"
                  onClick={closeMenu}
                >
                  {service.title}
                </Link>
              ))}
            </div>

            {/* Mobile sub-menu */}
            {mobileServicesOpen && (
              <div className="navbar__mobile-submenu">
                <Link to="/services" className="navbar__mobile-sublink" onClick={closeMenu}>
                  All Services
                </Link>
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.slug}`}
                    className="navbar__mobile-sublink"
                    onClick={closeMenu}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li className="navbar__links-cta">
            <Link to="/contact" className="navbar__btn" onClick={closeMenu}>
              Get a Quote
            </Link>
          </li>
        </ul>

        <Link to="/contact" className="navbar__btn navbar__btn--desktop">
          Get a Quote
        </Link>

        <button
          className="navbar__hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {menuOpen && <div className="navbar__overlay" onClick={closeMenu} />}
    </nav>
  );
};

export default Navbar;
