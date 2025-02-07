import React from 'react'
import { useNavigate } from 'react-router'
import newspic from '../assets/pexels-nappy-935979.jpg'

const Card = ({article}) => {

const navigate=useNavigate();

const handleReadMore = (e) => {
    e.preventDefault(); // Prevent default anchor behavior (page reload)
    navigate("/ArticlePage", { state: { article } });
  };
  return (
    
    <div class="max-w-sm h-400px bg-white border hover:bg-slate-200 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:border-blue-500">
              <a href="#">
                  <img class="w-full h-72 object-cover rounded-t-lg" src={article.image} alt="" />
              </a>
              <div class="p-5">
                  <a href="#">
                      <h5 class="h-48 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{article.title}</h5>
                  </a>
                  <a href="/ArticlePage" onClick={handleReadMore} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                       <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </a>
              </div>
          </div>
  )
}

export default Card