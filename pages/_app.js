import "../styles/globals.css";
import NavBar from "components/navigation/NavBar";
import Footer from "components/Footer";
import PageContextProvider from "context/PageContext";

function MyApp({ Component, pageProps }) {
  return (
    <PageContextProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer/>
    </PageContextProvider>
  );
}

export default MyApp;
