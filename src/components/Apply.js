import React from 'react'
import BackgroundImg from '../Slicing/BG-Apply.jpg'
function Apply(){
return (
  <div className="wrapper-component-with-img apply-component">
    <img className="background-img" src={BackgroundImg}/>
    <div className="content">
      <h1 className="title-center">Applications are now closed. We'll see you again next year.</h1>
    </div>
  </div>
  )
}

export default Apply