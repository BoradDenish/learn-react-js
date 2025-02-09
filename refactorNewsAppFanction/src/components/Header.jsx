import React, { useState } from 'react';
import { Link } from 'react-router';

export default function Header({ onCategoryChange }) {
  const categories = [
    'Business', 'Entertainment', 'General', 
    'Health', 'Science', 'Sports', 'Technology'
  ];

  const [selectedCategory, setSelectedCategory] = useState("General");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setMenuOpen(false);
    if (onCategoryChange) {
      onCategoryChange(category.toLowerCase());
    }
  };

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-2xl font-bold" to="/">
          NewsApp
        </Link>
        
        <button className="md:hidden text-white text-2xl focus:outline-none" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </button>

        <ul className="hidden md:flex space-x-6">
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                to={`/category/${category.toLowerCase()}`}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-md transition-all ${
                  selectedCategory === category ? "bg-white text-blue-600 font-bold" : "hover:bg-gray-500"
                }`}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-2 bg-blue-700 p-2 rounded-lg">
          <ul className="flex flex-col space-y-2">
            {categories.map((category, index) => (
              <li key={index}>
                <Link
                  to={`/category/${category.toLowerCase()}`}
                  onClick={() => handleCategoryClick(category)}
                  className={`block px-4 py-2 rounded-md transition-all ${
                    selectedCategory === category ? "bg-white text-blue-600 font-bold" : "hover:bg-gray-500"
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
  );
}
