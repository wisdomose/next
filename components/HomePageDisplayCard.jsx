import styled from "@emotion/styled";
export default function HomePageDisplayCard(props) {
  const { image, text } = props;
  return (
    <StyledDiv>
      <div>
        <img src={image} alt={text} />
      </div>
      <div className="text">{text}</div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 100%;
  height: 250px;
  text-transform: capitalize;
  background-color: #ffffff;
  border-radius: 25px;
  box-shadow: 34px 34px 68px #bfbfbf, -34px -34px 68px #ffffff;
  text-align: center;
  margin-bottom: 20px;
  div {
    height: 80%;
    border-radius: 25px;
  }

  img {
    border-radius: 25px 25px 0 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .text {
    border-radius: 0 0 25px 25px;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Segoe UI";
    color: #5f3239;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
  }
`;
