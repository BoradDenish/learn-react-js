import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';
import News from './components/News';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      language: 'en', 
      country: 'us',
      category: 'business'
    };
  }

  handleLanguageChange = (newLanguage) => {
    this.setState({ language: newLanguage });
  };

  handleCountryChange = (newCountry) => {
    this.setState({ country: newCountry });
  };

  handleCategoryChange = (newCategory) => {
    this.setState({ category: newCategory });
  };

  render() {
    return (
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header 
            onCountryChange={this.handleCountryChange} 
            onCategoryChange={this.handleCategoryChange} 
          />
          <main className="container mx-auto flex-grow p-4">
            <Routes>
              <Route 
                path="/" 
                element={<News country={this.state.country} category={this.state.category} />} 
              />
              <Route 
                path="/category/:category" 
                element={<News country={this.state.country} />} // FIX: Category will be handled inside News.jsx
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
}
