import Navbar from "./components/navbar/navbar";
import { Routes, Route } from "react-router-dom";

import background from "./assets/backgound.png";

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact"
import Hero from "./components/hero/hero"
import Login from "./pages/login/login"
import Features from "./pages/features/features"
import Footer  from "./components/footer/footer"
// import Contact from "./pages/contact/contact";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Navbar stays always visible */}
      <Navbar />

      {/* Pages render here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/features" element={<Features/>}/>
        {/* <Route path="/footer" element={<Footer/>}/> */}
        {/* <Route path="/hero" element={<Hero/>}/> */}
      </Routes>
        <Footer />
    </div>
  );
}

export default App;

// import { Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar/Navbar";
// import Home from "./pages/Home/Home";
// import About from "./pages/About/About";
// import Features from "./pages/Features/Features";
// import Login from "./pages/Login/Login";
// import Footer from "./components/Footer/Footer";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/features" element={<Features />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default App;