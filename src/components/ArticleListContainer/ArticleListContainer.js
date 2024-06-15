import React, { Component } from 'react';
import ArticleList from '../ArticleList/ArticleList';

class ArticleListContainer extends Component {
  state = {
    articles: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = async () => {
    try {
      const response = await fetch(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${process.env.REACT_APP_NY_API_KEY}`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      this.setState({ articles: data.results, loading: false });
    } catch (error) {
      this.setState({ error: 'Error fetching the articles', loading: false });
    }
  };

  render() {
    const { articles, loading, error } = this.state;
    const { onSelectArticle } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return <ArticleList articles={articles} onSelectArticle={onSelectArticle} />;
  }
}

export default ArticleListContainer;