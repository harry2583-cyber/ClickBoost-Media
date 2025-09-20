
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import Blog from './components/sections/Blog';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('Home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <Home setActivePage={setActivePage} />;
      case 'About':
        return <About />;
      case 'Services':
        return <Services />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Blog':
        return <Blog />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col font-sans">
      <Header activePage={activePage} setActivePage={setActivePage} isScrolled={isScrolled} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setActivePage={setActivePage}/>
    </div>
  );
};

export default App;
