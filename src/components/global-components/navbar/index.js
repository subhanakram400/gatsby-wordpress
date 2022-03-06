import React, { useEffect, useState } from "react"
import "./index.css"
import logo from "../../images/logo.png"

export const NavBar = () => {
  const [show, handleShow] = useState(false)

  const [forScrollFixed, setScrollFixed] = useState(false)

  const transitionNavbar = () => {
    if (window.scrollY > 50) {
      setScrollFixed(true)
    } else {
      setScrollFixed(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar)
    return () => window.removeEventListener("scroll", transitionNavbar)
  }, [])

  return (
    <div className={`header bd_green ${forScrollFixed && "header_fixed"} `}>
      <div className="nav bd_blue">
        <div className="logo bd_yellow">
          {/* <h1>Logo</h1> */}
          <div style={{ width: "80%" }}>
            {" "}
            <img style={{ width: "100%" }} src={logo}></img>
          </div>
        </div>
        <div className={`nav_menu ${show && "nav_responsive"} bd_red`}>
          <div
            className={`${show && "close_menu"} close_hide`}
            onClick={() => {
              handleShow(false)
            }}
          >
            <h4>CLOSE</h4>
          </div>
          <div className={`nav_links ${show && "nav_links_responsive"}`}>
            Home
          </div>
          <div className={`nav_links ${show && "nav_links_responsive"}`}>
            About Us
          </div>
          <div className={`nav_links ${show && "nav_links_responsive"}`}>
            Contact Us
          </div>
          <div className={`nav_links ${show && "nav_links_responsive"}`}>
            Blogs
          </div>
        </div>
        <div
          className="hammer"
          onClick={() => {
            handleShow(true)
          }}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  )
}
