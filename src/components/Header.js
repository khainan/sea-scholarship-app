import React from 'react'
import Logo from '../Slicing/Sea-Logo.png'

function Header({scrollToDiv}){
  return (
    <div className="header">
      <img src={Logo} /> 
      <div className="wrapper-nav">
        <span onClick={() => scrollToDiv('home')}>Home</span>
        <span onClick={() => scrollToDiv('program')}>Program</span>
        <span onClick={() => scrollToDiv('apply')}>Apply Here</span>
        <span onClick={() => scrollToDiv('faq')}>FAQ</span>
      </div>
    </div>
  )
}

export default Header