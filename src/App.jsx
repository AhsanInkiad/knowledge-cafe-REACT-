import { useState } from 'react'
import './App.css'
import Header from "./components/Header/Header";
import Blogs from './components/Blogs/Blogs';
import { ToastContainer } from 'react-toastify';

function App() {
 

  return (
    <div className="App">
      <Header></Header>
      <Blogs></Blogs>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
