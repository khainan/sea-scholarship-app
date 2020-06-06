import React, {useState} from 'react'
import {BounceLoader} from 'react-spinners'
import {connect} from 'react-redux'

function Testimoni(props){

  const [currentDisplay, setCurrentDisplay] = useState(0)
  const testimoni = props.listTestimoni

  const changeDisplay = (direction) => {
    let newNumber = currentDisplay
    const arrayLength = testimoni.length - 1
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
      <h3>Testimonials</h3>
      <div className="left-button" onClick={() => changeDisplay("left")}></div>
      <div className="right-button" onClick={() => changeDisplay("right")}></div>
      { testimoni.length == 0 ?
          <BounceLoader css={{margin: "auto"}} color={"#0e2295"}/>
        :
          <div className="testimoni">
            <img src={testimoni[currentDisplay].image}/>
            <div className="wrapper-story">
              <em>{testimoni[currentDisplay].story}</em>
              <span>{testimoni[currentDisplay].name}</span>
            </div>
          </div>
        }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    listTestimoni: state.listTestimoni,
  }
}

export default connect(mapStateToProps)(Testimoni)