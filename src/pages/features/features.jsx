import React from "react";
import  styles from "./Features.module.css";

function Features() {
  const featuresData = [
    {
      icon: "🎓",
      title: "Education Support",
      description:
        "Providing education resources and guidance for girls and women.",
    },

    {
      icon: "💜",
      title: "Women Empowerment",
      description:
        "Helping women become independent and confident in society.",
    },

    {
      icon: "🌍",
      title: "Community Impact",
      description:
        "Creating positive social impact through NGO activities and events.",
    },

    {
      icon: "🚀",
      title: "Future Growth",
      description:
        "Building opportunities for better careers and brighter futures.",
    },
  ];

  return (
    <section className="features-section">

      <div className="features-heading">
        <h1>Our Features</h1>
        <p>
          SHE CAN DO NGO works for women empowerment,
          education, leadership and future opportunities.
        </p>
      </div>

      <div className="features-container">

        {featuresData.map((feature, index) => (
          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h2>{feature.title}</h2>

            <p>{feature.description}</p>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Features;