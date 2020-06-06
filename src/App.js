import React, {useEffect, useRef} from 'react'
import axios from 'axios'
import './main.scss'
import {connect} from 'react-redux'
import Header from './components/Header'
import JumbotronTitle from './components/JumbotronTitle'
import University from './components/University'
import Testimonial from './components/Testimonial'
import Program from './components/Program'
import FAQ from './components/FAQ'
import Apply from './components/Apply'
import Timeline from './components/Timeline'
import Footer from './components/Footer'

function App(props) {
  const homeRef = useRef()
  const applyRef = useRef()
  const programRef = useRef()
  const faqRef = useRef()

  const scrollToRef = (ref) => window.scroll({
    top: ref.current.offsetTop,
    left: 0,
    behavior: 'smooth'
  });   

  const scrollToDiv = (ref) => {
    if(ref == 'home'){
      scrollToRef(homeRef)
    } else if(ref == 'program'){
      scrollToRef(programRef)
    } else if(ref == 'apply'){
      scrollToRef(applyRef)
    } else if(ref == 'faq'){
      scrollToRef(faqRef)
    }
  }

  const getDataWebsite = async () => {
    let data = []
    await axios.get("https://form.v2.support.garena.co.id/_/items/sea_scholarship?access_token=wahyutampan&fields=*.*")
      .then(res => data = res.data.data)
    props.getDataWebsite(data)
  }
  const getDataUniversity = async () => {
    let dataUniversity = []
    let dataFaculty = []
    let newData = []
    await axios.get("https://form.v2.support.garena.co.id/_/items/sea_scholarship_univ?access_token=wahyutampan&fields=*.*")
      .then(res => dataUniversity = res.data.data)
    await axios.get("https://form.v2.support.garena.co.id/_/items/sea_scholarship_faculty?access_token=wahyutampan")
      .then(res => dataFaculty = res.data.data)
    
    dataUniversity.map(univ => {
      let newFaculty = []
      dataFaculty.map(faculty => {
        if(univ.id == faculty.univ_id){
          newFaculty.push(faculty)
        }
      })
      newData.push({university: univ, faculty: newFaculty})
    })
    props.getDataUniversity(newData)
  }
  const getDataTestimoni = async () => {
    let data = []
    await axios.get("https://form.v2.support.garena.co.id/_/items/sea_scholarship_testimoni?access_token=wahyutampan&fields=*.*")
      .then(res => data = res.data.data)
    props.getDataTestimoni(data)
  }

  useEffect(() => {
    getDataWebsite()
    getDataUniversity()
    getDataTestimoni()
  },[])

  return (
    <div className="scholarship-app">
      <Header scrollToDiv={(ref) => scrollToDiv(ref)} />
      <div ref={homeRef}>
        <JumbotronTitle />
      </div>
      <div ref={programRef}>
        <Program />
      </div>
      <University />
      <Timeline />
      <Testimonial />
      <div ref={applyRef}>
        <Apply />
      </div>
      <div ref={faqRef}>
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    websiteContent: state.websiteContent,
    listTestimoni: state.listTestimoni
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDataUniversity: (data) => dispatch({type: 'ADD_LIST_UNIVERSITY', data: data}),
    getDataTestimoni: (data) => dispatch({type: 'ADD_LIST_TESTIMONI', data: data}),
    getDataWebsite: (data) => dispatch({type: 'ADD_LIST_WEB_CONTENT', data: data}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
