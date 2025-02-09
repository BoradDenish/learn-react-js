import React, { Component } from 'react'
import { Link } from 'react-router';

export default class Header extends Component {
    categories = [
        'Business', 'Entertainment', 'General', 
        'Health', 'Science', 'Sports', 'Technology'
    ];

    constructor(props) {
        super(props);
        this.state = {
            selectedCountry: 'us',
            selectedCategory: "General",
            menuOpen: false,
        };
    }

    handleCategoryClick = (category) => {
        this.setState({
            selectedCategory: category,
            menuOpen: false,
        });
        if (this.props.onCategoryChange) {
            this.props.onCategoryChange(category.toLowerCase());
        }
    };

    toggleMenu = () => {
        this.setState((prevState) => ({ menuOpen: !prevState.menuOpen }));
    };
    
    render() {
        return (
            <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link className="text-2xl font-bold" to="/">
            NewsApp
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={this.toggleMenu}
          >
            {this.state.menuOpen ? "✖" : "☰"}
          </button>

          {/* Navigation Links - Hidden on Mobile */}
          <ul className="hidden md:flex space-x-6">
            {this.categories.map((category, index) => (
              <li key={index}>
                <Link
                  to={`/category/${category.toLowerCase()}`}
                  onClick={() => this.handleCategoryClick(category)}
                  className={`px-4 py-2 rounded-md transition-all ${
                    this.state.selectedCategory === category
                      ? "bg-white text-blue-600 font-bold"
                      : "hover:bg-gray-500"
                  }`}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Dropdown Menu */}
        {this.state.menuOpen && (
          <div className="md:hidden mt-2 bg-blue-700 p-2 rounded-lg">
            <ul className="flex flex-col space-y-2">
              {this.categories.map((category, index) => (
                <li key={index}>
                  <Link
                    to={`/category/${category.toLowerCase()}`}
                    onClick={() => this.handleCategoryClick(category)}
                    className={`block px-4 py-2 rounded-md transition-all ${
                      this.state.selectedCategory === category
                        ? "bg-white text-blue-600 font-bold"
                        : "hover:bg-gray-500"
                    }`}
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
        )
    }
}
