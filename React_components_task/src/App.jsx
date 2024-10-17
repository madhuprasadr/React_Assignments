import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
