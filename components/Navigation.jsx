import styled from "@emotion/styled";
import UserContext from "context/Context";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { login, home, contact, user } from "scripts/svgs";
import MessageBox from "components/MessageBox";
export default function Navigation(props) {
  const router = useRouter();
  const User = useContext(UserContext);
  const { student, teacher, admin, setAccountType } = User;

  const [messageBox, setMesageBox] = useState();

  const signOutHandler = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("account");
    setMesageBox(<MessageBox message={"logged out"} />);
    setAccountType();
    router.push("/");
  };

  const closeModal = () => {
    console.log("clicked");
    props.close(<span></span>);
  };

  useEffect(() => {
    const account = sessionStorage.getItem("account");
    if (account == "student") {
      setAccountType("student");
    }
  });

  const Login = (
    <li onClick={closeModal}>
      <Link href="login">
        <a>{login} Login</a>
      </Link>
    </li>
  );

  const signOut = (
    <li onClick={signOutHandler}>
      <a>{login} signout</a>
    </li>
  );

  const studentNav = (
    <>
      <li onClick={closeModal}>
        <Link href="profile">
          <a>{user} profile</a>
        </Link>
      </li>

      <li onClick={closeModal}>
        <Link href="result">
          <a>{home} result</a>
        </Link>
      </li>

      <li onClick={closeModal}>
        <Link href="">
          <a>{home} assignment</a>
        </Link>
      </li>

      <li onClick={closeModal}>
        <Link href="">
          <a>{home} take test</a>
        </Link>
      </li>

      {signOut}
    </>
  );

  const teacherNav = (
    <>
      <li onClick={closeModal}>
        <Link href="">
          <a>{contact} upload result</a>
        </Link>
      </li>
      <li onClick={closeModal}>
        <Link href="">
          <a>{contact} upload assignment</a>
        </Link>
      </li>
      <li onClick={closeModal}>
        <Link href="">
          <a>{contact} upload cbt questions</a>
        </Link>
      </li>

      {signOut}
    </>
  );

  return (
    <>
      <StyledSpan onClick={closeModal}></StyledSpan>
      <StyledDiv>
        <ul>
          <li onClick={closeModal}>
            <Link href="/">
              <a>{home}Home</a>
            </Link>
          </li>

          <li onClick={closeModal}>
            <Link href="/contact">
              <a>{contact}Contact</a>
            </Link>
          </li>

          {student ? studentNav : teacher ? teacherNav : Login}
        </ul>
        <span>{messageBox}</span>
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  ul {
    top: 0;
    left: 0;
    background-color: #fcfafc;
    position: fixed;
    z-index: 200;
    list-style-type: none;
    padding: 0 20px;
    height: 100vh;
    width: 60vw;

    li {
      margin-top: 20px;

      a {
        color: #8a1414;
        text-transform: capitalize;
        font-weight: 600;
        display: flex;
        align-items: center;
        svg {
          margin-right: 10px;
          fill: #5c5a5c;
          width: 15px;
          height: 15px;
        }
      }
    }
  }
`;

const StyledSpan = styled.span`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: hsla(0, 0%, 92.15686274509804%, 0.774);
  z-index: 100;
`;
