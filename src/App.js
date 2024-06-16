import React, { Component } from 'react';
import './App.css';
import ArticleListContainer from './components/ArticleListContainer/ArticleListContainer';
import ArticleDetailContainer from './components/ArticleDetailContainer/ArticleDetailContainer';
import { ArticleContext, ArticleProvider } from './context/ArticleContext';

class App extends Component {
  static contextType = ArticleContext;

  render() {
    const { selectedArticle } = this.context;

    return (
      <div className="App">
        {
          selectedArticle ?
          <ArticleDetailContainer /> :
          <ArticleListContainer />
        }
      </div>
    );
  }
}

const AppWithProvider = () => (
  <ArticleProvider>
    <App />
  </ArticleProvider>
);

export default AppWithProvider;