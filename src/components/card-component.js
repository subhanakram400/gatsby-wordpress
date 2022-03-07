import * as React from "react"
import PropTypes from "prop-types"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import CssBaseline from "@mui/material/CssBaseline"
import useScrollTrigger from "@mui/material/useScrollTrigger"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Fab from "@mui/material/Fab"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import Zoom from "@mui/material/Zoom"

function ScrollTop(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    )

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }
  }

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  )
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

export default function BackToTop(props) {
  return (
    <div style={{ overflow: "scroll" }}>
      <CssBaseline />

      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box
          sx={{ my: 2 }}
          style={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            backgroundColor: "#E5E7EB",
          }}
        >
          <h1 style={{ textAlign: "center" }}>
            Hemstädning fortsätter att öka
          </h1>
          <h2>
            Hemstädning ökar med 9 procent första halvåret jämfört med samma
            period förra året, sett till utbetalade kronor för rutavdrag. Totalt
            har rutavdraget för samtliga tjänster ökat med 13 procent jämfört
            med samma period förra året. Det visar Rutindikatorn från Almega
            Hemserviceföretagen.
          </h2>
          <img
            style={{ width: "100%" }}
            src="https://firebasestorage.googleapis.com/v0/b/stadkoll-a38b1.appspot.com/o/Clean5.jpeg?alt=media&token=2984d64c-3cbe-4ecf-a845-bc5e21ada8bb"
          ></img>

          <p>
            Under första halvåret har drygt 2,2 miljarder kronor utbetalats i
            rutavdrag för hemstädning. Det innebär en ökning med 9 procent
            jämfört med samma period förra året. Under första halvåret har
            totalt 3,2 miljarder kronor utbetalats för tjänster som omfattas av
            rutavdrag, vilket innebär en ökning med 13 procent. Det visar
            Rutindikatorn som baseras på statistik från Skatteverket och som har
            analyserats av Almega Hemserviceföretagen.
          </p>
          <p>
            Mest populärt är det att göra rutavdrag för hemstädning, 70 procent
            betalas ut för städning. Näst vanligast är trädgårdsskötsel på 14
            procent och sen flytthjälp på 10 procent.
          </p>
          <p>
            Den 1 januari 2021 höjdes taket för rut-avdraget från 50 000 till
            75  000 kronor samtidigt som flera nya tjänster lades till, bland
            annat möblering och tillsyn av fastighet. I samband med höjningen av
            taket fredades 25 000 kronor från att kunna användas upp av
            rotavdrag. Under årets första sex månader har över 772 000 personer
            köpt tjänster som berättigar till rutavdrag. Drygt 20 000 företag
            har ansökt om ersättning för utförda tjänster som omfattas av
            rutavdrag under samma period. Fack och arbetsgivare inom
            städbranschen kontrollerar årligen städföretag utifrån en rad
            parametrar. Arbetet med auktorisationen Auktoriserat Serviceföretag
            är ett arbete för att stärka branschen och underlätta för kunderna
            att göra bra val av städleverantör.
          </p>
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  )
}
