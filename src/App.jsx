import React from "react"
import Nav from "./Components/Nav"
import Header from "./Components/Header"
import Footer from "./Components/Footer/Footer"
import Skills from "./Components/Skills"




import './style.css'

export default function App() {

  return (

    <div className="app--body">
      
      <div className="app--body--comp">
        <Nav/>
        <Skills/>


        <Header/>

      </div>
        <Footer/>
    </div> 
  )
}