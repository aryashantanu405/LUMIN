import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation,useNavigate } from "react-router";
import demo_pic from "../assets/pexels-nappy-935979.jpg";

const ArticlePage = () => {
  const navigate=useNavigate();
  const location = useLocation();
  const article = location.state?.article || {};
  const [summary, setSummary] = useState("");
  const [k,setk]=useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;

  const handleClick = () => {
    const topics = article.topics.join('delhi,punjab,pakistan'); // Convert array to comma-separated string
    navigate(`/?topics=${topics}`); // Navigate with query parameters
  };

  useEffect(() => {
    if (article.description && article.content) {
      const fullText = `${article.description} ${article.content}`;
      summarizeText(fullText);
      zeroShotAPI(fullText);
    }
  }, [article]);

  async function summarizeText(text) {
    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
        { inputs: text },
        {
          headers: { Authorization: `Bearer ${API_KEY}` },
        }
      );
      setSummary(response.data[0].summary_text);
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  }
  const zeroShotAPI = async (text) => {
    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/facebook/bart-large-mnli",
        {
          inputs: text,
          parameters: {
            candidate_labels:["Politics", "Health", "Technology", "Business", "Sports","Education","Climate","Defence","Entertainment"],
          }
        },
        {
          headers: { Authorization: `Bearer ${API_KEY}` }
        }
      );
     setk(response.data.labels);
     console.log(response.data.labels);
     console.log(k)
     const a=k.slice(0,2);
     console.log(a)
    
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  };
  

  return (
    <div className="mt-20 h-screen flex flex-col justify-start items-center bg-gray-50">
      {/* Title */}
      <h1 className="text-2xl md:text-6xl font-bold text-center mt-10 mb-12 text-gray-900 leading-tight">
        {article.title}
      </h1>

      {/* Image & Text Container */}
      <div className="flex flex-col md:flex-row w-full max-w-7xl justify-center items-center gap-12 px-4 py-6">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg"
            src={article.image || demo_pic}
            alt="Article Image"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 text-lg md:text-xl leading-relaxed space-y-4 text-gray-800">
          <p>{article.description}</p>
          <p>{article.content}</p>
        </div>
      </div>

      {/* Improved Summary Section */}
      {summary && (
        <div className="mt-16 w-full max-w-4xl mx-auto p-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-xl">
          <h2 className="text-4xl font-semibold text-center mb-6">Summary</h2>
          <p className="text-lg leading-relaxed">{summary}</p>
        </div>
      )}
      <button onClick={handleClick} className="bg-blue-800 p-2 text-2xl mt-10 rounded-lg text-white">Back to Home</button>
    </div>
  );
};

export default ArticlePage;
