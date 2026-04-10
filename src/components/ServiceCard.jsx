import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ icon: Icon, title, description, link }) => {
  return (
    <div className="service-card">
      <div className="service-card__icon">
        <Icon />
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>
      <Link to={link} className="service-card__link">
        Learn More <FaArrowRight />
      </Link>

      <style>{`
        .service-card {
          background: #fff;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }

        .service-card__icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(13, 56, 155, 0.1);
          color: #0d389b;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          margin: 0 auto 1.2rem;
          transition: background 0.3s ease, color 0.3s ease;
        }

        .service-card:hover .service-card__icon {
          background: #0d389b;
          color: #fff;
        }

        .service-card__title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 0.75rem;
        }

        .service-card__description {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 1.2rem;
        }

        .service-card__link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #0d389b;
          font-weight: 600;
          text-decoration: none;
          font-size: 0.95rem;
          transition: gap 0.3s ease, color 0.3s ease;
        }

        .service-card__link:hover {
          gap: 10px;
          color: #f59e0b;
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;
