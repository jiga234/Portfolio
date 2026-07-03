import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

import Loader from './components/layout/Loader';

function ScrollToHashElement() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);
  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <Loader isLoading={isLoading} onComplete={() => setIsLoading(false)} />
      <Router basename="/Portfolio/">
        <ScrollToHashElement />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />

          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
