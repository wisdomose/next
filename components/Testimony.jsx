import styled from "@emotion/styled";
export default function Testimony(props) {
  const { name, picture, testimony } = props;
  return (
    <StyledDiv>
      <div className="profile">
        <img src={picture} alt="profile picture" />
        <p>{name}</p>
      </div>
      <p className="testimony">{testimony}</p>
      <p className="parent">- parent</p>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  position:relative;
  overflow:hidden;
  border-radius: 25px;
  min-width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  box-shadow: 3px 3px 33px #00000033;
  margin: 0 10px 0 0;

  &:after{
    content:"";
    width:90%;
    height:90%;
    border-radius:50%;
    position:absolute;
    top:-30px;
    left:-40px;
    background:linear-gradient(to top left, #e3d95d, #515fe8);
    z-index:-1;
    opacity:0.8;
  }

  .profile {
    display: flex;
    align-items: center;
    justify-content:space-between;
    width:100%;
    padding: 0 10px;



    p {
      padding-left:10px;
      font-size: 20px;
      font-weight: 500;
    }

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      box-shadow: 34px 34px 68px #bfbfbf, -34px -34px 68px #ffffff;
    }
  }
  .testimony {
    padding: 0 10px;
    line-height:30px;
  }

  .parent{
    font-weight:600;
  }
`;
