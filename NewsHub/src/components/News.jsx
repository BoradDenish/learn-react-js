import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {
  render() {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Latest News</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <NewsItem className="transition duration-300 ease-in-out transform hover:bg-blue-100" title="What the Lakers trading for Luka Dončić means for LeBron James - FOX Sports" description="The Samsung Galaxy S25 Ultra is a great phone, but it doesn’t feel as special as it once did — and Galaxy AI is still a work in progress." imageUrl="https://platform.theverge.com/wp-content/uploads/sites/2/2025/01/DSC09399_processed.jpg?quality=90&strip=all&crop=0%2C10.723165084465%2C100%2C78.55366983107&w=1200" newsUrl="https://www.theverge.com/reviews/604154/samsung-galaxy-s25-ultra-review-ai-screen-battery" />
          <NewsItem className="transition duration-300 ease-in-out transform hover:bg-blue-100" />
          <NewsItem className="transition duration-300 ease-in-out transform hover:bg-blue-100" />
          <NewsItem className="transition duration-300 ease-in-out transform hover:bg-blue-100" />
          <NewsItem className="transition duration-300 ease-in-out transform hover:bg-blue-100" />
          <NewsItem className="transition duration-300 ease-in-out transform hover:bg-blue-100" />
          <NewsItem className="transition duration-300 ease-in-out transform hover:bg-blue-100" />
          <NewsItem className="transition duration-300 ease-in-out transform hover:bg-blue-100" />
          <NewsItem className="transition duration-300 ease-in-out transform hover:bg-blue-100" />
          <NewsItem className="transition duration-300 ease-in-out transform hover:bg-blue-100" />
          <NewsItem className="transition duration-300 ease-in-out transform hover:bg-blue-100" />
        </div>
      </div>
    );
  }
}
