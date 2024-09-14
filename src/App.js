import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard"; 
import SearchIcon from "./search.svg";
import "./App.css";

// Correct API URL
const API_URL = "https://gnews.io/api/v4"; // Correct API endpoint
const API_KEY = process.env.REACT_APP_GNEWS_API_KEY; // Use environment variable

const App = () => {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [news, setNews] = useState([]);
  
  // Fetch news on page load with a default query (e.g., "latest" news)
  useEffect(() => {
    searchNews("latest");
  }, []);

  // Function to fetch news based on the search query
  const searchNews = async (query) => {
    try {
      const response = await fetch(`${API_URL}/search?q=${query}&apikey=${API_KEY}`);
      const data = await response.json();

      if (data.articles && data.articles.length > 0) {
        setNews(data.articles); // GNews API returns articles directly
      } else {
        setNews([]); // If no articles are returned, set news to an empty array
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      setNews([]); // Set to an empty array in case of error
    }

  };
    // Function to handle Enter key press
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        searchNews(searchTerm || "latest");
      }
    };

  return (
    <div className="app">
      <h1>ACONEWS</h1>

      <div className="search">
      <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown} // Add keydown handler
            placeholder="Search for news"
          />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchNews(searchTerm || "latest")} // Default to "latest" if the input is empty
        />
      </div>

      {news?.length > 0 ? (
        <div className="container">
          {news.map((article) => (
            <NewsCard article={article} key={article.url} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No news found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
