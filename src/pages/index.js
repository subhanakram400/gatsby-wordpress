import React from "react"
import { NavBar } from "../components"
import "../components/homepage.css"
import BackToTop from "../components/card-component"

import { Card } from "@mui/material"
import HomeCard from "../components/home/HomeCard"

export default function Home() {
  return (
    <div>
      <NavBar />

      <div className="home-content">
        {/* <Card className="card-scroll-content " variant="outlined">
          <BackToTop />
        </Card> */}

        <HomeCard />
      </div>
    </div>
  )
}
