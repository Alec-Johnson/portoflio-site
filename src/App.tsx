import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
  <HelmetProvider>
    <BrowserRouter>
      <div className="site-wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
{/* 
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<ProjectsPage />} />
            <Route path="/project-:id" element={<SingleProjectPage />} />
            <Route path="*" element={<ErrorPage />} /> */}

          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </HelmetProvider>
  );
}

export default App;
