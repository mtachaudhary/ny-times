import React, { Component } from 'react';
import './App.css';
import ArticleListContainer from './components/ArticleListContainer/ArticleListContainer';
import ArticleDetailContainer from './components/ArticleDetailContainer/ArticleDetailContainer';

class App extends Component {
  state = {
    selectedArticle: null,
  };

  handleSelectArticle = (article) => {
    this.setState({ selectedArticle: article });
  };

  handleBack = () => {
    this.setState({ selectedArticle: null });
  };

  render() {
    const { selectedArticle } = this.state;

    return (
      <div className="App">
        {selectedArticle ? (
          <ArticleDetailContainer article={selectedArticle} onBack={this.handleBack} />
        ) : (
          <ArticleListContainer onSelectArticle={this.handleSelectArticle} />
        )}
      </div>
    );
  }
}

export default App;