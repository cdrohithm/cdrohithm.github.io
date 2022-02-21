import './App.css';
import Home from './containers/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './containers/About/About';
import Header from './components/Header/Header';
import Skills from './containers/Skills/Skills';
import Contact from './containers/Contact/Contact';

function App() {
  const toggleMenu = visible => {
    console.log(visible);
  }
  return (
    <div className="App">
      <Router>
      <Header toggleMenu={(visible) => toggleMenu(visible)} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
