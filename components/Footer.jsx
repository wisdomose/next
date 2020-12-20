import styled from "@emotion/styled";
import Icon from "./Icon";
import { facebook, instagram, twitter } from "../scripts/svgs.js";
export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <Icon icon={facebook} />
        <Icon icon={instagram} />
        <Icon icon={twitter} />
      </div>
      <p>&copy; 2020</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 5px;
  }
  p {
    font-weight: 800;
    font-family: Monospac821 BT;
    text-align: center;
  }
`;
