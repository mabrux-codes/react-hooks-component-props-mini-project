import React from 'react';
import Header from './components/Header';
import About from './components/About';
import ArticleList from './components/ArticleList';

const App = () => {
  const blogName = "My Awesome Blog";
  const aboutInfo = {
    image: "default-image-url.jpg",
    about: "This is a blog about awesome things."
  };
  const posts = [
    { title: "First Article", date: "2023-01-01", preview: "This is a preview of the first article." },
    { title: "Second Article", date: "2023-01-02", preview: "This is a preview of the second article." },
  ];

  return (
    <div>
      <Header name={blogName} />
      <About image={aboutInfo.image} about={aboutInfo.about} />
      <ArticleList posts={posts} />
    </div>
  );
};

export default App;