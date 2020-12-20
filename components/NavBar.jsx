import styled from "@emotion/styled";
import { useState } from "react";
import { hamBurgerMenu } from "../scripts/svgs";
import Navigation from "components/Navigation";
export default function NavBar() {
  const [navigation, setNavigation] = useState(<span></span>);

  const ChangeNavigation = () => {
    setNavigation(<Navigation close={setNavigation} />);
  };
  return (
    <>
      <StyledNav>
        <img
          src="/vercel.svg"
          width="70px"
          height="70px"
          alt="ebenezer bells academy logo"
        />
        <span onClick={ChangeNavigation}>{hamBurgerMenu}</span>
      </StyledNav>
      {navigation}
    </>
  );
}

const StyledNav = styled.nav`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 300;
`;
