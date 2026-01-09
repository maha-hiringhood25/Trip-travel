import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Destinations from "./Components/Destination";
import TravelTips from "./Components/TravelTips";
import ContactCTA from "./Components/ContactCTA";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
    <Navbar />
      <main>
        <Hero />
        <section id="destinations" className="section">
          <div className="container">
            <Destinations />
          </div>
        </section>

        <section id="tips" className="section">
          <div className="container">
            <TravelTips />
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <ContactCTA />
          </div>
        </section>
      </main>
      <Footer />

      
    </>
     );
}

