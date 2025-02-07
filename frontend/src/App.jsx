import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './assets/Header'
import Home from './pages/Home'
import ArticlePage from './pages/ArticlePage'

function App(){
  return(
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/ArticlePage' element={<ArticlePage/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
