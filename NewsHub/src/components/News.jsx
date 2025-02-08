import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from '../../public/loader.gif';
import { useParams } from 'react-router';
import InfiniteScroll from "react-infinite-scroll-component";

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

export default function NewsWrapper(props) {
  const { category } = useParams();
  return <News {...props} category={category || props.category} />;
}

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      pageSize: 10,
      totalResults: 0,
    };
  }
  
  componentDidMount() {
    this.fetchArticles();
  }
  
  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevProps.category !== this.props.category || 
  //     prevProps.country !== this.props.country || 
  //     prevState.page !== this.state.page
  //   ) {
  //     this.fetchArticles();
  //     document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}`
  //   }
  // }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category || prevProps.country !== this.props.country) {
      this.setState({ articles: [], page: 1 }, this.fetchArticles);
      document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}`;
    }
  }

  fetchArticles = async () => {
    const { page, pageSize } = this.state;
    const { country, category } = this.props;

    if (this.state.articles.length >= this.state.totalResults && this.state.articles.length !== 0) {
      console.log("All articles loaded. No more fetch calls.");
      return;
    }

    // this.setState({ loading: true });

    try {
      let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;
      let data = await fetch(url);
      let parsedData = await data.json();

      console.log("Fetched data:", parsedData);

      if (!parsedData.articles || parsedData.articles.length === 0) {
        // console.warn("No more articles to fetch.");
        this.setState({ loading: false });
        return;
      }

      this.setState((prevState) => ({
        articles: [...prevState.articles, ...parsedData.articles],
        totalResults: parsedData.totalResults,
        loading: false,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ loading: false });
    }
  };

  // handleNextPage = () => {
  //   this.setState((prevState) => ({
  //     page: prevState.page + 1,
  //   }));
  // };

  // handlePreviousPage = () => {
  //   this.setState((prevState) => ({
  //     page: prevState.page - 1,
  //   }));
  // };

  fetchMoreData = async () => {
    if (this.state.articles.length >= this.state.totalResults) {
      console.log("No more articles to load.");
      return;
    }
    setTimeout(() => {  
      this.setState(
        (prevState) => ({ page: prevState.page + 1 }),
        this.fetchArticles
      );
    }, 1500);
  };

  render() {
    const { articles, page, pageSize, totalResults, loading } = this.state;
    const totalPages = Math.ceil(totalResults / pageSize);
    const hasMore = articles.length + 1 < totalResults;
    
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Top Headlines - {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}</h1>

        {loading && articles.length === 0 && (
          <div className="flex justify-center items-center py-4">
            <img src={Spinner} alt="Loading..." className="w-24 h-20" />
          </div>
        )}

        <InfiniteScroll
          dataLength={articles.length}
          next={this.fetchMoreData}
          hasMore={hasMore}
          loader={
            hasMore ? (
              <div className="flex justify-center items-center py-4">
                <img src={Spinner} alt="Loading..." className="w-16 h-16 mx-auto" />
              </div>
            ) : null
          }
        >

          {/* {!loading && ( */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 py-4">
              {articles.length > 0 ? (
                articles.map((element) => (
                <div key={element.url} className="size-auto flex">
                  <NewsItem
                    className="transition duration-300 ease-in-out transform hover:bg-blue-100 flex flex-col"
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              ))
            ) : !loading ? (
              <p className="text-center text-gray-500 col-span-full">No articles available.</p>
            ) : null}
            </div>
          {/* )} */}

        
        </InfiniteScroll>

        {/* <div className="flex justify-between mt-6">
          <button
            onClick={this.handlePreviousPage}
            disabled={page === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            &larr; Previous
          </button>
          <button
            onClick={this.handleNextPage}
            disabled={page >= totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Next &rarr;
          </button>
        </div> */}
        {!hasMore && (
          <p className="text-center text-gray-500 mt-6">No more articles to load.</p>
        )}
      </div>
    );
  }
}
