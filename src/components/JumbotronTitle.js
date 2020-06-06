import React from 'react'
import BackgroundImg from '../Slicing/BG-Head.jpg'
import graduateImg from '../Slicing/icon-graduate.png'
import {connect} from 'react-redux'

function JumbotronTitle(props){
return (
  <div className="wrapper-component-with-img">
    <img className="background-img" src={BackgroundImg}/>
    <div className="content">
      <h1 className="title">Congratulations Sea Scholarship 2019 Awardees!</h1>
      <p className="content-text">The Sea Scholarship Commitee is proud to announce the 2019 Academic Year Sea Scholarship recipients. Final award email notifications were sent on {props.websiteContent[0] && props.websiteContent[0].date_announce}</p>
    </div>
    <img className="graduate-img" src={graduateImg}/>
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    websiteContent: state.websiteContent,
  }
}

export default connect(mapStateToProps)(JumbotronTitle)