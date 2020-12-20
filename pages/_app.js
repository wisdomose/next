import {ThemeProvider} from "@emotion/react";
import InfoBlock from "components/InfoBlock";
import NavBar from "components/NavBar";
import  UserContextProvider  from "context/UserContext";
import '../styles/globals.css'

const theme = {
  colors:{
    primary:"#8A1414",
    secondary:"#4D904D",
    tetiary:"#6752D6"
  },
  fonts:{
    primary:"Segoe UI",
    secondary:"Monospac821 BT",
    tetiary:"Segoe Script"
  }
}

function MyApp({ Component, pageProps }) {
  return(
  <UserContextProvider>
    <ThemeProvider theme={theme}>
      <NavBar/>
      <Component {...pageProps}/>
    </ThemeProvider>
    </UserContextProvider>
  );
}

export default MyApp
