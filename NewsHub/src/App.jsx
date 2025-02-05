import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Header from './components/Header'
import Footer from './components/Footer'
import './index.css'
import News from './components/News'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      language: 'en', 
      country: 'in'
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
          <Header onCountryChange={this.handleCountryChange} onCategoryChange={this.handleCategoryChange} />
          <main className="container mx-auto flex-grow p-4">
            {/* <h1 className="text-3xl font-bold text-center">Welcome to NewsApp</h1> */}
            <Routes>
              <Route path="/" element={<News country={this.state.country} category="general" />} />
              <Route path="/:category" element={<News country={this.state.country} />} />
              {/* <News country={this.state.country} language={this.state.language} category={this.state.category}/> */}
            </Routes>
            <p className="text-gray-600 text-center mt-2">Your trusted source for the latest news.</p>
          </main>
          <Footer />
        </div>
      </Router>
    )
  }
}


