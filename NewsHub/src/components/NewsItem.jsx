import React, { Component } from 'react';

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4 transition duration-300 ease-in-out transform hover:bg-blue-100">
            {imageUrl && (
            <img className="w-full h-48 object-cover rounded-lg" src={imageUrl} alt={title} />
            )}
            <div className="px-2 py-4">
            <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-700 text-sm">{description}</p>
            </div>
            <div className="px-2 pt-2 pb-4">
            <a
                href={newsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            >
                Read More
            </a>
            </div>
        </div>
    );
  }
}
