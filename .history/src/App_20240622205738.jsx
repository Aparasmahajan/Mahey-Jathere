import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import GlobalStyle from './styles';

const App = () => {
  return (
    <Router>
     <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/events" component={Events} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/donate" component={Donate} />
        <Route path="/contact" component={Contact} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;