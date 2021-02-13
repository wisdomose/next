import { rightArrow } from "../scripts/svgs";
import styled from "@emotion/styled";

export default function InfoBlock(props) {
  const { icon, text, buttonText } = props;
  return (
    <StyledDiv>
      <div className="icon-bg">{icon}</div>
      <p>{text}</p>
      <Button text={buttonText} image={rightArrow} />
    </StyledDiv>
  );
}

function Button(props) {
  const { text, image } = props;
  return (
    <StyledButton>
      <span className="text">{text}</span>
      {image}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  outline: none;
  font-family: "segoe ui";
  font-weight: 700;
  text-transform:capitalize;
  color: #5f3239;
  background-color: #ffffff;
  border: 0;
  border-radius: 29px;
  height: 58px;
  width: 212px;
  
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  box-shadow: 3px 3px 33px #00000033;
  position: absolute;
  bottom: -29px;
  left: calc(50% - 106px);
  .text {
    font-size: 16px;
  }
`;

const StyledDiv = styled.div`
  font-family: Segoe UI;
  font-size:1.3rem;
  text-align:center;
  padding:0 10px;
  background-color:#4D904D;
  height: 200px;
  width: 100vw;
  margin: 50px 0;
  position: relative;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  .icon-bg {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    box-shadow: 3px 3px 33px #00000033;
    letter-spacing: 56;
    line-height: 27px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: -50px;
    left: calc(50% - 50px);
    svg {
      fill: #5f3239;
      width: 70px;
      height: 70px;
    }
  }
`;
