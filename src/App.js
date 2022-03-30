import React, {useState} from "react";
import {i18n} from './translations/i18n.js';
import { WelcomeComponent } from "./WelcomeComponent";

function App() {
  const [language, setLanguage] = useState('en');
  
  const handleClick=(e)=>{
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  }
  
  return (
    <div className="App">
      <div>
        <button value='uk' onClick={handleClick}>
          Українська
        </button>
        <button value='en' onClick={handleClick}>
          English
        </button>
        <button value='es' onClick={handleClick}>
          Español
        </button>
        <button value='arab' onClick={handleClick}>
          Arabic
        </button>
      </div>
      <WelcomeComponent lang={language}/>
   </div>
  );
}

export default App;
