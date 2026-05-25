import React from 'react';
import './App.css';

function Contact() {
  return (
    <div  className="contact">
      <img className="contact-pic" src="New Author photo.jpg" alt="Artist Eric"/>
      <span className="email">Email me at: </span>
      <a href="mailto:ericpitsenbarger@icloud.com">ericpitsenbarger@icloud.com</a>
    </div>
  )
}

export default Contact;