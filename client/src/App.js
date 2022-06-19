import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import ProfilePage from './ProfilePage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ProfilePage />
    </div>
  );
}

// HomePage.js
// - Header.js
//  - Navigation
//    - Logo
//    - Buttons
// - Hero
// - FeaturesList
//    - FeatureItem
// - Footer

// Sign Up
// Sign In

export default App;
