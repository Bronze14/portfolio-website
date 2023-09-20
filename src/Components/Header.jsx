import React from "react"
import Projects from "./Projects"
import Data from "./../Data"

export default function Header(props){
    const DataComp = Data.map((item)=>{
        return <Projects 
        key={item.id}
        {...item}
        />
    })

    return (
      <div className="header--Container"> 
        <div className="header--Nav">
          <h1>Projects</h1>
          <a href="#contact-form" >
            <h3 className="Contact--nav">CONTACT ME</h3>
          </a>

        </div>
        <div className="projects-container">
          {DataComp}
        </div>
      </div>
    )
  }
  