import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from '../../public/loader.gif';
import { useParams } from 'react-router';

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
      loading: false,
      page: 1,
      pageSize: 12,
      totalResults: 0,
    };
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.category !== this.props.category || 
      prevProps.country !== this.props.country || 
      prevState.page !== this.state.page
    ) {
      this.fetchArticles();
    }
  }

  fetchArticles = async () => {
    const { page, pageSize } = this.state;
    const { country, category } = this.props;

    this.setState({ loading: true });

    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  handleNextPage = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  handlePreviousPage = () => {
    this.setState((prevState) => ({
      page: prevState.page - 1,
    }));
  };

  render() {
    const { articles, page, pageSize, totalResults, loading } = this.state;
    const totalPages = Math.ceil(totalResults / pageSize);

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Top Headlines - {this.props.category}</h1>

        {loading && (
          <div className="flex justify-center items-center py-4">
            <img src={Spinner} alt="Loading..." className="w-24 h-20" />
          </div>
        )}

        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {articles.map((element) => (
              <div key={element.url} className="size-auto flex">
                {console.log(element.author)}
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
            ))}
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
            disabled={page >= totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
