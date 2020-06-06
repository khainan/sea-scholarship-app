import React from 'react'
import {BounceLoader} from 'react-spinners'
import {connect} from 'react-redux'
import iconFreshmen from '../Slicing/icon-freshmen.png'
import iconSenior from '../Slicing/icon-senior.png'

function Program(props){
  return (
    <div className="wrapper-component background-grey">
      <h3>Undergraduate Scholarship Program</h3>
      { props.websiteContent.length == 0 ?
        <BounceLoader css={{margin: "auto"}} color={"#0e2295"}/>
        :
        <div dangerouslySetInnerHTML={{ __html: props.websiteContent[0].program_content }} />
      }
      <div className="card-section">
        <div className="program-card">
          <div className="program-card-header">
            <img src={iconFreshmen}/>
            <h4>Sea Freshman Scholarship Program</h4>
          </div>
          { props.websiteContent.length == 0 ?
            <BounceLoader css={{margin: "auto"}} color={"#0e2295"}/>
            :
            <div dangerouslySetInnerHTML={{ __html: props.websiteContent[0].freshman_program }} />
          }
        </div>
        <div className="program-card">
          <div className="program-card-header">
            <img src={iconSenior}/>
            <h4>Sea Senior Scholarship Program</h4>
          </div>
          { props.websiteContent.length == 0 ?
            <BounceLoader css={{margin: "auto"}} color={"#0e2295"}/>
            :
            <div dangerouslySetInnerHTML={{ __html: props.websiteContent[0].senior_program }} />
          }
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

export default connect(mapStateToProps)(Program)