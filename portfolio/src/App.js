import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header';
import Navbar from '../src/components/Navbar';
import Project from '../src/components/Project';
import Footer from '../src/components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Project/>
      <Footer/>
    </div>
  );
}



export default App;
