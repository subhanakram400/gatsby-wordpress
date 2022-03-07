import { Button, Card, TextField } from "@mui/material"
import React from "react"
import "./home.css"
import LocationOnIcon from "@mui/icons-material/LocationOn"

import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork"

function HomeCard() {
  return (
    <Card className="card-component" variant="outlined">
      <h1>Jämför städföretag i ditt område och kom igång med hemstäd!</h1>
      <br />
      <p className="home-text">
        Sortera på pris, se kundomdömen och filtrera på städbranschens
        viktigaste krav.
      </p>

      <h1>Välj städfrekvens</h1>
      <br />
      <div className="input-fields">
        <div style={{ position: "relative" }}>
          <LocationOnIcon style={{ position: "absolute", left: "0" }} />
        </div>

        <TextField
          id="standard-multiline-static"
          className="col"
          rows={4}
          icon={<LocationOnIcon />}
          // defaultValue={<LocationOnIcon />}
          variant="standard"
        />
        <div className="col" style={{ position: "relative" }}>
          <MapsHomeWorkIcon style={{ position: "absolute", left: "0" }} />
        </div>
        <TextField
          id="standard-multiline-static"
          // className="col"
          style={{ textAlign: "center" }}
          rows={4}
          // defaultValue="Default Value"
          variant="standard"
        />
      </div>

      <div>
        <input name="business" type="radio"></input>&nbsp; &nbsp;
        <label style={{ fontSize: "20px", color: "gray" }}>Varje vecka</label>
      </div>
      <div>
        <input name="business" type="radio"></input>&nbsp; &nbsp;
        <label style={{ fontSize: "20px", color: "gray" }}>Varje vecka</label>
      </div>
      <Button
        variant="contained"
        disableElevation
        style={{ marginTop: "2rem" }}
      >
        Jämför kostnadsfritt nu
      </Button>
    </Card>
  )
}

export default HomeCard
