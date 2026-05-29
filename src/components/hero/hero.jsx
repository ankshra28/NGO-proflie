// import { Link } from 'react-router-dom';
// import styles from './hero.module.css';

// function Hero() {
//     return (
//         <div className={styles.HeroSection}>
//             <div className={styles.overlay}></div>
//             <div className={styles.heroContent}>
//                 <h1><strong>uniCore</strong></h1>
//                 <h2>All-in-one Smart Campus Solution</h2>
//                 <hr className={styles.hrFaded} />
//                 <p>Simplify. Connect. Learn.</p>

//                 <div  className={styles.btnGroup}>
//                     <Link to='/login' className={`${styles.login}`}>Login</Link>
//                     <Link to='/register' className={styles.register}>Sign Up</Link>
//                     <Link to='/aiChat' className={styles.register}>chat with AI</Link>
//                 </div>
                
//             </div>
//              <div className={styles.heroImage}>
                
//             </div>
           
//         </div>
//     );
// }

// export default Hero;

import React from "react";
import "./hero.module.css";

// import hero from "../../assets/hero.jpg";

function Home() {
  return (
    <>
      <section className="hero">

        <div className="hero-left">

          <h1>
            Empowering Students.
            <br />
            Building Futures.
          </h1>

          <p>
            We create opportunities where students can
            learn, grow, and believe in their potential.
          </p>

          <button>Get Involved</button>

        </div>

        <div className="hero-right">
          <img src={hero} alt="students" />
        </div>

      </section>

      <section className="about-section">

        <h2>About Us</h2>

        <p>
          We understand that many students applying are beginners
          who are still learning coding. As an NGO, we genuinely
          want to create opportunities where students can learn
          and grow without feeling pressured.
        </p>

      </section>

      <section className="cards">

        <div className="card">
          <h3>📚 Learn</h3>
          <p>We support students in gaining knowledge.</p>
        </div>

        <div className="card">
          <h3>👥 Grow</h3>
          <p>We encourage confidence and development.</p>
        </div>

        <div className="card">
          <h3>💚 Support</h3>
          <p>We provide guidance every step.</p>
        </div>

        <div className="card">
          <h3>🌍 Empower</h3>
          <p>We empower students for better futures.</p>
        </div>

      </section>

      <section className="join-section">

        <div>
          <h2>Be the reason a student believes in tomorrow.</h2>
        </div>

        <button>Join Us Today</button>

      </section>
    </>
  );
}

export default Home;