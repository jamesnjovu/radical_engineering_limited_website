import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ScrollReveal from "../components/ScrollReveal";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import "./Products.css";

const categories = ["All", "Inverters", "Batteries", "Solar Modules", "Accessories"];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [animKey, setAnimKey] = useState(0);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleFilter = (cat) => {
    setActiveCategory(cat);
    setAnimKey((prev) => prev + 1);
  };

  return (
    <>
      <Helmet>
        <title>Solar Products | Radical Engineering Limited - Inverters, Batteries & Panels</title>
        <meta name="description" content="Browse our range of solar products including hybrid inverters, lithium batteries, solar PV modules, and portable power stations from top manufacturers like Hanchu ESS and MUST." />
        <link rel="canonical" href="https://radicalengineering.co.zm/products" />
      </Helmet>

      {/* Page Banner */}
      <section className="page-banner" style={{ backgroundImage: "url(/images/solar_products.jpg)" }}>
        <h1>Our Products</h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link> &nbsp;/&nbsp; Products
        </div>
      </section>

      {/* Products Section */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2>Quality Solar Products</h2>
              <p>
                Explore our range of high-quality inverters, batteries, solar
                modules, and accessories from trusted manufacturers.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="products-filter">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`products-filter__btn ${
                    activeCategory === cat ? "active" : ""
                  }`}
                  onClick={() => handleFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="products-grid products-grid--animated" key={animKey}>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                category={product.category}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
