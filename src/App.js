import React, { useState } from 'react';
import './App.css';

// Array of articles
const articles = [
  {
    title: "Understanding the difference between grid-template and grid-auto",
    content: "With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template-* and grid-auto-* properties. Specifically, the difference between grid-template-rows/columns and grid-auto-rows/columns."
  },
  {
    title: "Recreating the GitHub Contribution Graph with CSS Grid Layout",
    content: "You can create a GitHub-style contribution graph with CSS Grid, and in this article, we will walk through how to achieve this. It's a great project for learning CSS Grid concepts."
  },

];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');


  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter articles based on the search term
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Search and Highlight</h1>

      <input
        type="text"
        placeholder="Search articles..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="results">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article, index) => (
            <div key={index} className="article">
              <h2>{article.title}</h2>
              <p>{article.content}</p>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default App;
