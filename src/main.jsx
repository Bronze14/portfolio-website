import React from "react"
import ReactDOM from 'react-dom/client';
import App from "./App.jsx"
import "./style.css"


function Index() {
    return (
      
        <App />
      
        
    )
  }
  
  ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
    <React.StrictMode>
      <Index />
    </React.StrictMode>);
