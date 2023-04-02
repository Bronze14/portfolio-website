import React from "react"


export default function Projects(props){
    
    return (
            <div>
                <div className="img--container">
                    <img src={props.img} className="img--Projects" alt="Project Image" />
                    <div className="img--text">
                    <a href={props.link1} className="aha" >
                        <h1>VIEW PROJECT</h1>
                    </a>
                    <a href={props.link2} className="aha" >

                        <h1>VIEW CODE</h1>
                    </a>
                    </div>
                </div>
                <h2 className="h2--projects">{props.title}</h2>
                <h3 className="h3--projects">{props.languages}</h3>
            </div>
    )
}