import React, { Component } from 'react'
import { Link } from 'react-router';

export default class Header extends Component {
    categories = [
        'Business', 'Entertainment', 'General', 
        'Health', 'Science', 'Sports', 'Technology'
    ];

    languages = [
        { code: 'ar', name: 'Arabic' },
        { code: 'de', name: 'German' },
        { code: 'en', name: 'English' },
        { code: 'es', name: 'Spanish' },
        { code: 'fr', name: 'French' },
        { code: 'he', name: 'Hebrew' },
        { code: 'it', name: 'Italian' },
        { code: 'nl', name: 'Dutch' },
        { code: 'no', name: 'Norwegian' },
        { code: 'pt', name: 'Portuguese' },
        { code: 'ru', name: 'Russian' },
        { code: 'sv', name: 'Swedish' },
        { code: 'ud', name: 'Urdu' },
        { code: 'zh', name: 'Chinese' }
    ];

    countries = [
        { code: 'ae', name: 'United Arab Emirates' },
        { code: 'ar', name: 'Argentina' },
        { code: 'at', name: 'Austria' },
        { code: 'au', name: 'Australia' },
        { code: 'be', name: 'Belgium' },
        { code: 'bg', name: 'Bulgaria' },
        { code: 'br', name: 'Brazil' },
        { code: 'ca', name: 'Canada' },
        { code: 'ch', name: 'Switzerland' },
        { code: 'cn', name: 'China' },
        { code: 'co', name: 'Colombia' },
        { code: 'cu', name: 'Cuba' },
        { code: 'cz', name: 'Czech Republic' },
        { code: 'de', name: 'Germany' },
        { code: 'eg', name: 'Egypt' },
        { code: 'fr', name: 'France' },
        { code: 'gb', name: 'United Kingdom' },
        { code: 'gr', name: 'Greece' },
        { code: 'hk', name: 'Hong Kong' },
        { code: 'hu', name: 'Hungary' },
        { code: 'id', name: 'Indonesia' },
        { code: 'ie', name: 'Ireland' },
        { code: 'il', name: 'Israel' },
        { code: 'in', name: 'India' },
        { code: 'it', name: 'Italy' },
        { code: 'jp', name: 'Japan' },
        { code: 'kr', name: 'South Korea' },
        { code: 'lt', name: 'Lithuania' },
        { code: 'lv', name: 'Latvia' },
        { code: 'ma', name: 'Morocco' },
        { code: 'mx', name: 'Mexico' },
        { code: 'my', name: 'Malaysia' },
        { code: 'ng', name: 'Nigeria' },
        { code: 'nl', name: 'Netherlands' },
        { code: 'no', name: 'Norway' },
        { code: 'nz', name: 'New Zealand' },
        { code: 'ph', name: 'Philippines' },
        { code: 'pl', name: 'Poland' },
        { code: 'pt', name: 'Portugal' },
        { code: 'ro', name: 'Romania' },
        { code: 'rs', name: 'Serbia' },
        { code: 'ru', name: 'Russia' },
        { code: 'sa', name: 'Saudi Arabia' },
        { code: 'se', name: 'Sweden' },
        { code: 'sg', name: 'Singapore' },
        { code: 'si', name: 'Slovenia' },
        { code: 'sk', name: 'Slovakia' },
        { code: 'th', name: 'Thailand' },
        { code: 'tr', name: 'Turkey' },
        { code: 'tw', name: 'Taiwan' },
        { code: 'ua', name: 'Ukraine' },
        { code: 'us', name: 'United States' },
        { code: 've', name: 'Venezuela' },
        { code: 'za', name: 'South Africa' }
    ];

    constructor(props) {
        super(props);
        this.state = {
            selectedCountry: 'us',
            selectedCategory: "General",
            menuOpen: false,
        };
    }

    // handleLanguageChange = (event) => {
    //     const selectedLanguage = event.target.value;
    //     this.setState({ selectedLanguage });
    //     this.props.onLanguageChange(selectedLanguage);
    // };

    handleCountryChange = (event) => {
        const selectedCountry = event.target.value;
        this.setState({ selectedCountry });
        if (this.props.onCountryChange) {
            this.props.onCountryChange(selectedCountry);
        }
    };

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
        {/* Country Dropdown */}
        {/* <select
            className="bg-white text-black px-3 py-1 rounded"
            value={this.state.selectedCountry}
            onChange={this.handleCountryChange}
        >
            {this.countries.map((country) => (
            <option key={country.code} value={country.code}>
                {country.name}
            </option>
            ))}
        </select> */}
      </nav>
        )
    }
}
