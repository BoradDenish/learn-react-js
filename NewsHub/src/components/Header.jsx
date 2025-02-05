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
            selectedLanguage: 'en',
            selectedCountry: 'in'
        };
    }

    handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        this.setState({ selectedLanguage });
        this.props.onLanguageChange(selectedLanguage);
    };

    handleCountryChange = (event) => {
        const selectedCountry = event.target.value;
        this.setState({ selectedCountry });
        this.props.onCountryChange(selectedCountry);
    };

    handleCategoryClick = (category) => {
        this.props.onCategoryChange(category.toLowerCase());
    };
    
    render() {
        return (
            <nav className="bg-blue-600 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link className="text-2xl font-bold" to="/">NewsApp</Link>
                    <ul className="hidden md:flex space-x-6">
                        {this.categories.map((category, index) => (
                            <li key={index}>
                                <Link to={`/category/${category.toLowerCase()}`} className="hover:text-gray-400" onClick={() => this.props.onCategoryChange(category.toLowerCase())}>
                                    {category}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* Country Dropdown */}
                    <select
                        className="bg-white text-black px-3 py-1 rounded"
                        value={this.state.selectedCountry}
                        onChange={this.handleCountryChange}
                    >
                        {this.countries.map((country) => (
                        <option key={country.code} value={country.code}>
                            {country.name}
                        </option>
                        ))}
                    </select>

                    {/* Language Dropdown */}
                    {/* <select
                        className="bg-white text-black px-3 py-1 rounded"
                        value={this.state.selectedLanguage}
                        onChange={this.handleLanguageChange}
                    >
                        {this.languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                            {lang.name}
                        </option>
                        ))}
                    </select> */}
                </div>
            </nav>
        )
    }
}
