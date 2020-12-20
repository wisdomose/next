import styled from "@emotion/styled";
export default function MessageBox(props) {
  const { message } = props.message;
  return <StyledDiv>{props.message}</StyledDiv>;
}

const StyledDiv = styled.div`
  background-color: black;
  color: white;
  max-width: 300px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
`;
