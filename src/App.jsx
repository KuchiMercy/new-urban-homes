import Choose from "./components/Choose";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Properties from "./components/Properties";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <Partners/>
      <Choose/>
      <Properties/>
      <Testimonial/>
      <Contact />
      <Footer/>
      
    </div>
  );
}

export default App;
