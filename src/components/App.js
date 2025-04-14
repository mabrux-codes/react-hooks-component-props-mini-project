import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      {/* Render the Header component and pass the blog name as a prop */}
      <Header name={blogData.name} />

      {/* Render the About component and pass the image and about text as props */}
      <About image={blogData.image} about={blogData.about} />

      {/* Render the ArticleList component and pass the posts array as a prop */}
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
