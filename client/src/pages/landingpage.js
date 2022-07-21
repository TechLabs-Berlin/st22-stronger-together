import CardDetails from "../components/Cards/CardDetails";
import Footer from "../components/Footer";
import Header from "../components/Head/Header";
import Hero from "../components/hero";
import CallToAction from "../components/CallToAction";
import './LandingPage.css';

function LandingPage() {
  return (
    <div>
      <Header />
      <Hero />
      <section>
        <h4>
        A platform to connect and help those in need.
        </h4>
      </section>
      <CardDetails />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default LandingPage;
