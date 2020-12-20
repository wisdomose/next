import styled from "@emotion/styled";
import { rightArrow } from "../scripts/svgs.js";
export default function Carousel() {
  return (
    <StyledDiv>
      <div>
        <img src="/students.jpg" alt="ebenezer bells academy" />
      </div>
      <span className="rightArrow">{rightArrow}</span>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  position: relative;
  div {
    width: 100vw;
  }
  img {
    width: 100%;
  }
  .rightArrow {
    position: absolute;
    right: 10px;
    top: 50%;
    path {
      fill: black;
      opacity: 0.9;
    }
  }
`;
