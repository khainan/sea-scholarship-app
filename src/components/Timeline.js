import React from 'react'
import Timeline1 from '../Slicing/Timeline-1.png'
import Timeline2 from '../Slicing/Timeline-2.png'
import Timeline3 from '../Slicing/Timeline-3.png'
import Timeline4 from '../Slicing/Timeline-4.png'
import {connect} from 'react-redux'

function Timeline(props){
return (
  <div className="wrapper-component background-grey">
    <h3>Timeline</h3>
    <div className="timeline">
      <div className="line"></div>
      <div className="timeline-content">
        <h4>Registration</h4>
        <img src={Timeline1}/>
        <span>{props.websiteContent[0] && props.websiteContent[0].date_regis}</span>
      </div>
      <div className="timeline-content">
        <h4>Essay and CV screening</h4>
        <img src={Timeline2}/>
        <span>{props.websiteContent[0] && props.websiteContent[0].date_esay_cvscreen}</span>
      </div>
      <div className="timeline-content">
        <h4>On-campus interview</h4>
        <img src={Timeline3}/>
        <span>{props.websiteContent[0] && props.websiteContent[0].date_interview}</span>
      </div>
      <div className="timeline-content">
        <h4>Announcement of Selected Scholars</h4>
        <img src={Timeline4}/>
        <span>{props.websiteContent[0] && props.websiteContent[0].date_announce}</span>
      </div>
    </div>
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    websiteContent: state.websiteContent,
  }
}

export default connect(mapStateToProps)(Timeline)