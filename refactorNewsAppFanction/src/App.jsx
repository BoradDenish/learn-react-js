import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";

function App() {
  const [language, setLanguage] = useState('en');
  const [country, setCountry] = useState('us');
  const [category, setCategory] = useState('business');
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Header onCountryChange={setCountry} onCategoryChange={setCategory} />
        <main className="container mx-auto flex-grow p-4">
          <Routes>
            <Route 
              path="/" 
              element={<News setProgress={setProgress} country={country} category={category} />} 
            />
            <Route 
              path="/category/:category" 
              element={<News setProgress={setProgress} country={country} />} 
            />
          </Routes>
          <p className="text-gray-600 text-center pb-3 mt-2">
            Your trusted source for the latest news.
          </p>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
