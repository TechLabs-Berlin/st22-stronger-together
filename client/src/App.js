
import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Head/Header';
import Hero from './components/hero';
import ExplainHero from './components/ExplanationHero/ExplainHero';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <div>
     {/* -----landing page---------*/}
      <Header/>
      <Hero/>
      <Cards/>
      <ExplainHero/>
      <Footer/>
     
 
  {/* --------LOGIN PAGE---------
   <LogIn/>       
   */}

   {/*--------SIGNUP PAGE--------
   <SignUp/>
   */}

    </div>
  );
}

export default App;
