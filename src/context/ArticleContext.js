import React, { createContext, useState } from 'react';

const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const value = {
    selectedArticle,
    setSelectedArticle,
  };

  return <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>;
};

export { ArticleContext, ArticleProvider };
