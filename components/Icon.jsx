import styled from "@emotion/styled";
export default function Icon(props) {
  const { icon } = props;
  return <StyledDiv>{icon}</StyledDiv>;
}

const StyledDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #6752d6;
`;
