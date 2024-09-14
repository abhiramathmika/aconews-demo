import React from "react";

const NewsCard = ({ article: { title, image, url, publishedAt, source } }) => {
  return (
    <div className="news-card">
      <div className="news-card-header">
        <p className="news-date">{new Date(publishedAt).toDateString()}</p>{" "}
        {/* Display formatted date */}
      </div>

      <div className="news-image">
        <img src={image || "https://via.placeholder.com/400"} alt={title} />{" "}
        {/* Display news image */}
      </div>

      <div className="news-card-content">
        <h3>{title}</h3>
        <span className="news-source">{source.name}</span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          Read more
        </a>{" "}
        {/* Link to full article */}
      </div>
    </div>
  );
};

export default NewsCard;
