import styled from "@emotion/styled";
export default function Testimony(props) {
  const { name, picture, testimony } = props;
  return (
    <StyledDiv>
      <div className="profile">
        <img src={picture} alt="profile picture" />
        <span>{name}</span>
      </div>
      <span className="testimony">{testimony}</span>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  border-radius: 25px;
  min-width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  box-shadow: 3px 3px 33px #00000033;
  margin: 0 10px 0 0;
  .profile {
    display: flex;
    align-items: center;
    padding: 0 10px;

    span {
      margin-left: 20px;
      font-size: 20px;
      font-weight: 500;
    }

    img {
      border: 4px solid #4d904d;
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }
  .testimony {
    padding: 0 10px;
    font-family: Monospac821 BT;
  }
`;
