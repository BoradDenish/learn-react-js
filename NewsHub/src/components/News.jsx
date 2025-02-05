import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from '../../public/loader.gif'
import { useParams } from 'react-router';

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

export default class News extends Component {

  constructor(){
    console.log("Call constroctor");
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize: 12,
      totalResults: 0,
      country: "in",
      category: "general"
    }
  }

  async componentDidMount(){
    const { category } = this.props.match.params;
    if (category) {
      this.setState({ category: category });
    }
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    // Check if category has changed and if so, fetch new articles
    if (prevProps.match.params.category !== this.props.match.params.category) {
      this.setState({ category: this.props.match.params.category }, this.fetchArticles);
    }

    // Check if page has changed and fetch articles again
    if (prevState.page !== this.state.page) {
      this.fetchArticles();
    }
  }


  fetchArticles = async () => {
    const { page, pageSize } = this.state;
    const { country, category } = this.props;


    // Show loader before the API call
    this.setState({ loading: true });

    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setTimeout (() => {
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
      });
    },1000)
  }

  handleNextPage = () => {
    this.setState(prevState => {
      const nextPage = prevState.page + 1;
      if (nextPage <= Math.ceil(prevState.totalResults / prevState.pageSize)) {
        return { page: nextPage };
      }
    }, this.fetchArticles);
  }

  handlePreviousPage = () => {
    this.setState(prevState => {
      const prevPage = prevState.page - 1;
      if (prevPage > 0) {
        return { page: prevPage };
      }
    }, this.fetchArticles);
  }
  
  render() {
    console.log("Rendering component");
    const { articles, page, pageSize, totalResults, loading } = this.state;
    const totalPages = Math.ceil(totalResults / pageSize);

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Top Headlines</h1>
        
        {loading && (
          <div className="flex justify-center items-center py-4">
            <img src="/loader.gif" alt="Loading..." className="w-24 h-20" />
          </div>
        )}

        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {articles.map((elements) =>{
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
        )}
        <div className="flex justify-between mt-6">
          <button
            onClick={this.handlePreviousPage}
            disabled={page === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            &larr; Previous
          </button>
          <button
            onClick={this.handleNextPage}
            disabled={page === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
