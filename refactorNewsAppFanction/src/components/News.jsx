import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from './NewsItem';
import Spinner from '../../public/loader.gif';

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

export default function News({ country, category: defaultCategory, setProgress }) {
  const { category: paramCategory } = useParams();
  const category = paramCategory || defaultCategory;
  
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const pageSize = 10;

    useEffect(() => {
        const fetchData = async () => {
        setProgress(10); // ✅ Safe: set state before async operation
        await fetchArticles(1, true);
        setProgress(100); // ✅ Safe: set state after async operation
        };
        
        fetchData(); // Call async function inside useEffect
        document.title = `${category.charAt(0).toUpperCase() + category.slice(1)}`;
    }, [category, country]);
  
  

    const fetchArticles = async (pageNum, reset = false) => {
        if (articles.length >= totalResults && articles.length !== 0) return;
      
        setLoading(true);
        
        try {
          let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${pageNum}&pageSize=${pageSize}&apiKey=${apiKey}`;
          
          let response = await fetch(url);
          let data = await response.json();
          console.log("data", data)
          
          if (!data.articles || data.articles.length === 0) return;
      
          setArticles((prevArticles) => reset ? data.articles : [...prevArticles, ...data.articles]);
          setTotalResults(data.totalResults);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
    };      
  

  const fetchMoreData = () => {
    if (articles.length >= totalResults) return;
    setPage((prevPage) => {
      const newPage = prevPage + 1;
      fetchArticles(newPage);
      return newPage;
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Top Headlines - {category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      {loading && articles.length === 0 && (
        <div className="flex justify-center items-center py-4">
          <img src={Spinner} alt="Loading..." className="w-24 h-20" />
        </div>
      )}
      
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={
          articles.length < totalResults ? (
            <div className="flex justify-center items-center py-4">
              <img src={Spinner} alt="Loading..." className="w-16 h-16 mx-auto" />
            </div>
          ) : null
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 py-4">
          {articles.length > 0 ? (
            articles.map((article, index) => (
              <div key={`${article.url}-${index}`} className="size-auto flex">
                <NewsItem
                  className="transition duration-300 ease-in-out transform hover:bg-blue-100 flex flex-col"
                  title={article.title}
                  description={article.description}
                  imageUrl={article.urlToImage}
                  newsUrl={article.url}
                  author={article.author}
                  date={article.publishedAt}
                  source={article.source.name}
                />
              </div>
            ))
          ) : (
            !loading && <p className="text-center text-gray-500 col-span-full">No articles available.</p>
          )}
        </div>
      </InfiniteScroll>
      {!articles.length && !loading && (
        <p className="text-center text-gray-500 mt-6">No more articles to load.</p>
      )}
    </div>
  );
}
