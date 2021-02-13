import { clock } from "scripts/svgs";
import Head from "next/head";
import styled from "@emotion/styled";
import InfoBlock from "components/InfoBlock";
import HomePageDisplayCard from "components/HomePageDisplayCard";
import Testimonies from "components/Testimonies";
import Carousel from "components/Carousel";
// import Modal from "components/Modal";

export default function Home() {
  return (
    <StyledDiv>

      <Head>
        <title>Ebenezer Bells Academy - home</title>
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
          image={"/images/students.jpg"}
          text={"state of the art labs"}
        />
        <HomePageDisplayCard
          image={"/images/students.jpg"}
          text={"quality teachers"}
        />
        <HomePageDisplayCard
          image={"/images/students.jpg"}
          text={"student centered"}
        />
        <HomePageDisplayCard
          image={"/images/students.jpg"}
          text={"extra curricular acitivities"}
        />
      </div>

      <div className="testimony-heading">
        our parents our pride
      </div>

      <Testimonies />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  margin-top: 70px;

  .display-cards {
    width: 70%;
    margin: auto;
  }
  .testimony-heading {
    font-family: Segoe Script;
    font-size: 20px;
    font-weight:500;
    color: #5f3239;
    height: 100px;
    width: 98%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 13px solid #515fe8;
    margin: auto;
    background-color: #e3d95d;
  }
`;
