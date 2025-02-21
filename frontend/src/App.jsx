import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './assets/Header'
import Home from './pages/Home'
import ArticlePage from './pages/ArticlePage'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/clerk-react";

function App(){
  return(
    <>
    <Router>
    <Header>
      <SignedOut>
        <SignIn></SignIn>
      </SignedOut>
    </Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/ArticlePage' element={<ArticlePage/>}></Route>
        <Route path='/login' element={< SignIn/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
