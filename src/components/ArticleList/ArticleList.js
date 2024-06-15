import React from 'react';
import './ArticleList.css';

const ArticleList = ({ articles, onSelectArticle }) => (
  <div>
    <h1>NY Times Most Popular Articles</h1>
    <ul className='article-list'>
      {articles.map((article) => (
        <li key={article.id} onClick={() => onSelectArticle(article)}>
          {article.title}
        </li>
      ))}
    </ul>
  </div>
);

export default ArticleList;