import React from 'react'
import { Link } from 'react-router-dom'
const iframeStyle = {
    width:"99%",
    height:"890px", // Adjust the height as needed
    border: 'none',   // Remove iframe border
    overflow: 'hidden' // Hide scrollbars
  };

const Feedback = () => {


  return (
    <div>
        
        <iframe
        title="Google Form"
        src="https://forms.gle/GocAatFfvwLdJ3Yq8"
        style={iframeStyle}
        
      >
        Loading...
      </iframe>
    </div>
  )
}

export default Feedback
