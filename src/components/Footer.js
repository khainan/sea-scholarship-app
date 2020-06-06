import React from 'react'
import BackgroundImg from '../Slicing/BG-Foot.jpg'

function Footer(){
  return (
    <div className="wrapper-component-with-img footer">
      <img className="background-img" src={BackgroundImg}/>
      <p className="content-text">
        For more information about Sea, checkout our corporate website here <u>here.</u><br />
        If you have further queries, reach out to us at <u>id-scholarships@seagroup.com</u>
      </p>
    </div>
  )
}

export default Footer