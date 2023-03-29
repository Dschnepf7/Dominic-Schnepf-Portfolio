import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header';
import Project from '../src/components/Project';
import Footer from '../src/components/Footer';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Footer/>
    </div>
  );
}



export default App;
