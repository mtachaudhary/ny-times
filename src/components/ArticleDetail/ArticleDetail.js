import React from 'react';

const ArticleDetail = ({ article, onBack }) => {
  if (!article) {
    return <div>Select an article to see details.</div>;
  }

  return (
    <div>
      <button onClick={onBack}>Back</button>
      <h2>{article.title}</h2>
      <p>{article.abstract}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};

export default ArticleDetail;