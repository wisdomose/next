import styled from "@emotion/styled";
import { useState } from "react";
import { hamBurgerMenu } from "../../scripts/svgs";
import Navigation from "components/navigation/Navigation";

export default function NavBar() {
  const [navigation, setNavigation] = useState(<span></span>);

  const ChangeNavigation = () => {
    setNavigation(<Navigation close={setNavigation} />);
  };
  
  return (
    <>
      <StyledNav>
        <img
          src="/images/logo chroma.png"
          width="50px"
          height="50px"
          alt="ebenezer bells academy logo"
        />
        <span onClick={ChangeNavigation}>{hamBurgerMenu}</span>
      </StyledNav>
      {navigation}
    </>
  );
}

const StyledNav = styled.nav`
  position: absolute;
  width: 100%;
  height:70px;
  max-height:70px;
  z-index: 10;
  top: 0;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
