import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Header from "../components/Head/Header";
import Hero from "../components/hero";
import ExplainHero from "../components/other files/ExplainHeroCopy";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Cards />
      <ExplainHero />
      <Footer />
    </div>
  );
}

export default LandingPage;
