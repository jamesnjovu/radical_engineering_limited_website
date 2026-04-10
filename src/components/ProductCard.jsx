const ProductCard = ({ image, name, category, description }) => {
  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={image} alt={name} />
        <span className="product-card__category">{category}</span>
      </div>
      <div className="product-card__content">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__description">{description}</p>
      </div>

      <style>{`
        .product-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }

        .product-card__image {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }

        .product-card__image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .product-card:hover .product-card__image img {
          transform: scale(1.05);
        }

        .product-card__category {
          position: absolute;
          top: 12px;
          left: 12px;
          background: #0d389b;
          color: #fff;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.3px;
        }

        .product-card__content {
          padding: 1.25rem;
        }

        .product-card__name {
          font-size: 1.15rem;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 0.5rem;
        }

        .product-card__description {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
