import React from 'react'
import Logo from'../../../assets/logo.png'
import './Footer.scss'

export default function Footer() {
  return (
    <footer>
    <img src={Logo} alt="" />
    <span>
      Made with <b>React.js</b>.
    </span>
  </footer>
  )
}
