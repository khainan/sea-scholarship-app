import React from 'react'
import {BounceLoader} from 'react-spinners'
import {connect} from 'react-redux'

function FAQ(props){
  return (
    <div className="wrapper-component">
        <h3>FAQ</h3>
        { props.websiteContent.length == 0 ?
          <BounceLoader css={{margin: "auto"}} color={"#0e2295"}/>
          :
          <div dangerouslySetInnerHTML={{ __html: props.websiteContent[0].faq_content }} />
        }
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    websiteContent: state.websiteContent,
  }
}

export default connect(mapStateToProps)(FAQ)