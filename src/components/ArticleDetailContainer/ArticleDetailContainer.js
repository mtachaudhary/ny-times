import React, { Component } from 'react';
import ArticleDetail from '../ArticleDetail/ArticleDetail';
import { ArticleContext } from '../../context/ArticleContext';

class ArticleDetailContainer extends Component {
  static contextType = ArticleContext;

  render() {
    const { selectedArticle, setSelectedArticle } = this.context;

    return <ArticleDetail article={selectedArticle} onBack={() => setSelectedArticle(null)} />;
  }
}

export default ArticleDetailContainer;