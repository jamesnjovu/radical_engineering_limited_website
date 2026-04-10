import { useState, useEffect, useRef } from "react";
import { FaProjectDiagram, FaClock, FaUsers, FaSmile } from "react-icons/fa";
import "./StatsCounter.css";

const statsData = [
  { icon: FaProjectDiagram, end: 100, suffix: "+", label: "Projects Completed" },
  { icon: FaClock, end: 6, suffix: "+", label: "Years Experience" },
  { icon: FaUsers, end: 50, suffix: "+", label: "Team Members" },
  { icon: FaSmile, end: 200, suffix: "+", label: "Happy Clients" },
];

const Counter = ({ end, suffix, triggered }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    let frame;

    const animate = () => {
      start += increment;
      if (start >= end) {
        setCount(end);
        return;
      }
      setCount(Math.floor(start));
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [triggered, end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const StatsCounter = () => {
  const sectionRef = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" ref={sectionRef}>
      <div className="stats__container">
        {statsData.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div className="stats__item" key={index}>
              <Icon className="stats__icon" />
              <h3 className="stats__number">
                <Counter end={stat.end} suffix={stat.suffix} triggered={triggered} />
              </h3>
              <p className="stats__label">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsCounter;
