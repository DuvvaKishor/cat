import React, {useState} from 'react';
import './App.css';

function App() {
  const [isCat, setIsCat] = useState(true);

  return (
    <div className="bg-container">
    <div>
        <img alt='bulb' src={isCat ? "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png": "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png" } className="bulb-image" id="bulbImage" />
    </div>
    <div>
        <img alt='cat' src={isCat ? "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png": "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png" } className="cat-image" id="catImage" />
    </div>
    
        <div className="switch-board">
            <h1 className="switch-status">{isCat ? "Switched On" : "Switched Off"}</h1>
            <div>
            <button className={isCat ? "off-switch" : "on-switch off-switch-bgc" } onClick={() => setIsCat(false)}>
                OFF
            </button>
            <button className={isCat ? "on-switch " : 'off-switch on-switch-bgc' } onClick={() => setIsCat(true)}>
                ON
            </button>
    </div>
    </div>
</div>);
}

export default App;
