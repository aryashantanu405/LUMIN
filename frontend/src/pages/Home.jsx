import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import Card from "./Card";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

const Home = () => {
  const [articles, setArticles] = useState([]);

  async function getNews() {
    try {
      const response = await axios.get(
        `https://gnews.io/api/v4/search?q=india&apikey=${
          import.meta.env.VITE_NEWS_API_KEY
        }`
      );

      setArticles(response.data.articles.slice(0, 6));
      console.log(response.data.articles.slice(0, 6));
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  const { isLoaded, isSignedIn, user } = useUser()
  const [name, setname] = useState("");
  const [greeting,setgreeting]=useState("");
  const solve=()=>{
    if(isLoaded && isSignedIn){
      setname(user.firstName);
    }
   
  }
  const getgreeting=()=>{
   const t=new Date();
   var h=t.getHours();
   if(h<=12){
    setgreeting("Good Morning");
   }
   if(h>12 && h<17){
    setgreeting("Good Afternoon");
   }
   if(h>=17){
    setgreeting("Good Evening");
   }
  }
  useEffect(() => {
    getNews();
    solve();
    getgreeting();
  }, [isLoaded,isSignedIn]);
  
  return (
    <div className="flex-col justify-center relative">
      <div className="flex justify-start text-3xl ml-4 mt-20 md:text-5xl  font-bold">
        <h1>{greeting}, {isSignedIn? name:'Guest'}!</h1>
      </div>
      <div className="mt-2 h-screen md:p-4 p-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 justify-between items-center">
        {articles.map((article, index) => (
          <Card key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Home;
