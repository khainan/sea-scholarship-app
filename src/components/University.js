import React, {useState} from 'react'
import {BounceLoader} from 'react-spinners'
import {connect} from 'react-redux'

function University(props){

  const [currentDisplay, setCurrentDisplay] = useState(0)
  const university = props.listUniversity

  const changeDisplay = (direction) => {
    let newNumber = currentDisplay
    const arrayLength = university.length - 1
    if(direction == 'left'){
      newNumber -= 1
      if(newNumber < 0){
        setCurrentDisplay(arrayLength)
      } else setCurrentDisplay(newNumber)
    }
    else {
      newNumber += 1
      if(newNumber > arrayLength){
        setCurrentDisplay(0)
      } else setCurrentDisplay(newNumber)
    }
  }

  return (
    <div className="wrapper-component">
      <h3>Partner Universities</h3>
      <div className="left-button" onClick={() => changeDisplay("left")}></div>
      <div className="right-button" onClick={() => changeDisplay("right")}></div>
      { university.length == 0 ?
          <BounceLoader css={{margin: "auto"}} color={"#0e2295"}/>
        :
          <div className="university">
            <img src={university[currentDisplay].university.univ_logo}/>
            <div className="univ-faculty-section">
              <h5>{university[currentDisplay].university.univ_name}</h5>
              <div className="wrapper-faculty">
                <ul>
                  {university[currentDisplay].faculty.slice(0, 12).map((faculty, index) => <li key={index}>{faculty.name}</li>)}
                </ul>
                <ul>
                  {university[currentDisplay].faculty.slice(13, 25).map((faculty, index) => <li key={index}>{faculty.name}</li>)}
                </ul>
                <ul>
                  {university[currentDisplay].faculty.slice(26, 37).map((faculty, index) => <li key={index}>{faculty.name}</li>)}
                </ul>
              </div>
            </div>
          </div>
        }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    listUniversity: state.listUniversity,
  }
}

export default connect(mapStateToProps)(University)