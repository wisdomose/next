import styled from "@emotion/styled";
export default function Button(props) {
  const { text, image } = props;
  return (
    <StyledButton>
      <span className="text">{text}</span>
      {image}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  border-radius: 29px;
  height: 58px;
  width: 212px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 3px 33% 97 black;
  position: absolute;
  .text {
    font-size: 16px;
  }
`;
