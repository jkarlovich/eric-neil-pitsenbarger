import React from 'react';
import './App.css';

function SocialMedia({classStyle}) {
  return(
    <div className={classStyle != null ? classStyle : "social-media"}>
      <a href="http://www.facebook.com/eric.pitsenbarger.3" target="_blank" rel="noopener noreferrer">
        <img src="facebook.png" alt="facebook" className="icon"/>
      </a>
      <a href="http://www.instagram.com/eewkitty/" target="_blank" rel="noopener noreferrer">
        <img src="instagram.jpeg" alt="instagram" className="instagram"/>
      </a>
    </div>
  )
}

export default SocialMedia;