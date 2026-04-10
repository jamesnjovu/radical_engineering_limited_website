import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaTimes } from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";
import projects from "../data/projects";
import "./Projects.css";

const categories = ["All", "Solar", "Civil", "Electrical", "Mining"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [animKey, setAnimKey] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleFilter = (cat) => {
    setActiveCategory(cat);
    setAnimKey((prev) => prev + 1);
  };

  const openLightbox = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  return (
    <>
      <Helmet>
        <title>Our Projects | Radical Engineering Limited - Portfolio in Zambia</title>
        <meta name="description" content="View our project portfolio: solar installations, road construction, drainage systems, electrical pole-line installations, mining equipment setups, and industrial infrastructure across Zambia." />
        <link rel="canonical" href="https://radicalengineering.co.zm/projects" />
      </Helmet>

      {/* Page Banner */}
      <section className="page-banner" style={{ backgroundImage: "url(/images/works.jpeg)" }}>
        <h1>Our Projects</h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link> &nbsp;/&nbsp; Projects
        </div>
      </section>

      {/* Projects Section */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2>Project Gallery</h2>
              <p>
                Explore our portfolio of completed engineering projects across
                multiple disciplines.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="projects-filter">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`projects-filter__btn ${
                    activeCategory === cat ? "active" : ""
                  }`}
                  onClick={() => handleFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div
            className="projects-grid projects-grid--animated"
            key={animKey}
          >
            {filteredProjects.map((project) => (
              <div className="project-card" key={project.id}>
                <div
                  className="project-card__image"
                  onClick={() => openLightbox(project)}
                >
                  <img src={project.image} alt={project.title} />
                  <span className="project-card__badge">
                    {project.category}
                  </span>
                </div>
                <div className="project-card__content">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div className="project-lightbox" onClick={closeLightbox}>
          <div
            className="project-lightbox__inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="project-lightbox__close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <FaTimes />
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
            />
            <p className="project-lightbox__title">
              {selectedProject.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
