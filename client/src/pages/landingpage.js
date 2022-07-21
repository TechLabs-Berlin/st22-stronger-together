import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Header from "../components/Head/Header";
import Hero from "../components/hero";
import CallToAction from "../components/CallToAction";

function LandingPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Cards />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default LandingPage;
