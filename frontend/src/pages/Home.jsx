import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

const Home = () => {

  const [articles, setArticles] = useState([]);

  async function getNews() {
    try {
      const response = await axios.get(`https://gnews.io/api/v4/search?q=Champions+Trophy&apikey=${import.meta.env.VITE_NEWS_API_KEY}`)

      setArticles(response.data.articles.slice(0, 6));
      console.log(response.data.articles.slice(0, 6));
    } catch (error) {
      console.error("Error:", error.message);
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="flex justify-center relative">
      <div className="mt-20 h-screen md:p-4 p-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 justify-between items-center">
        {articles.map((article, index) => (
          <Card key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Home;
