import { clock } from "scripts/svgs";
import Head from "next/head";
import styled from "@emotion/styled";
import InfoBlock from "components/InfoBlock";
import HomePageDisplayCard from "components/HomePageDisplayCard";
import Testimonies from "components/Testimonies";
import Footer from "components/Footer";
import Carousel from "components/Carousel";
// import Modal from "components/Modal";

export default function Home() {
  return (
    <StyledDiv>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />
      <InfoBlock
        icon={clock}
        text={"why start tomorrow when you can start today"}
        buttonText={"find out more"}
      />
      <div className="display-cards">
        <HomePageDisplayCard
          image={"/students.jpg"}
          text={"state of the art labs"}
        />
        <HomePageDisplayCard
          image={"/students.jpg"}
          text={"quality teachers"}
        />
        <HomePageDisplayCard
          image={"/students.jpg"}
          text={"student centered"}
        />
        <HomePageDisplayCard
          image={"/students.jpg"}
          text={"extra curricular acitivities"}
        />
      </div>

      <div className="testimony-heading">
        our parents
        <br /> our pride
      </div>

      <Testimonies />
      <Footer />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  font-family: ${(props) => props.theme.fonts.primary};
  .display-cards {
    width: 70%;
    margin: auto;
  }
  .testimony-heading {
    font-family: Segoe Script;
    font-size: 20px;
    color: #ffffff;
    height: 100px;
    width: 98%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 13px solid #6752d6;
    margin: auto;
    background-color: #4d904d;
  }
`;
