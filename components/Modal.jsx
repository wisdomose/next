import styled from "@emotion/styled";
export default function Modal(props) {
  return (
    <>
      {props.children}
      <StyledDiv></StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: hsla(0, 0%, 92.15686274509804%, 0.774);
`;
