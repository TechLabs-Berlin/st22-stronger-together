import CardDetails from "../components/Cards/CardDetails";
import Footer from "../components/Footer";
import Header from "../components/Head/Header";
import Hero from "../components/hero";
import CallToAction from "../components/CallToAction";

function LandingPage() {
  return (
    <div>
      <Header />
      <Hero />
      <CardDetails />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default LandingPage;
