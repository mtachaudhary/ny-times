import React, { Component } from 'react';
import ArticleDetail from '../ArticleDetail/ArticleDetail';

class ArticleDetailContainer extends Component {
  render() {
    const { article, onBack } = this.props;

    return <ArticleDetail article={article} onBack={onBack} />;
  }
}

export default ArticleDetailContainer;