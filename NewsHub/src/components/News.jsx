import React, { Component } from 'react';
import NewsItem from './NewsItem';

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

export default class News extends Component {


  constructor(){
    console.log("Call constroctor");
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount(){
    console.log("did mount");
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }
  
  render() {
    console.log("Rendering component");
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Top Headlines</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {this.state.articles.map((elements) =>{
              return (
                <div key={elements.url} className="size-auto flex">
                <NewsItem
                className="transition duration-300 ease-in-out transform hover:bg-blue-100 flex flex-col" 
                title={elements.title}
                description={elements.description} imageUrl={elements.urlToImage} newsUrl={elements.url} />
                </div>
              )
            } 
          )}
        </div>
      </div>
    );
  }
}
