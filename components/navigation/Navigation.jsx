import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import UserContext from "context/Context";
import { login, home, contact, user } from "scripts/svgs";
import { changeRoute } from "scripts/functions";

export default function Navigation(props) {
  // initializes the router
  const router = useRouter();

  // initializes context
  const { account, logOut, category } = useContext(UserContext);

  // this closes the overlay that appears behind the sidenav
  const closeModal = () => {
    props.close(<span></span>);
  };

  const toggle = (dom) => {
    document.querySelectorAll(`.${dom}`).forEach((elem) => {
      elem.style.display == "block"
        ? (elem.style.display = "none")
        : (elem.style.display = "block");
    });
  };

  const signOutHandler = () => {
    logOut();
    changeRoute(router, "");
    closeModal();
  };

  const Login = (
    <li onClick={closeModal}>
      <Link href="login">
        <a>{login} Login</a>
      </Link>
    </li>
  );

  const signOut = (
    <li onClick={signOutHandler}>
      <a>{login} sign out</a>
    </li>
  );

  const studentNav = (
    <>
      <li onClick={closeModal}>
        <Link href="student/profile">
          <a>{user} profile</a>
        </Link>
      </li>

      <li onClick={closeModal}>
        <Link href="student/result">
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
        <Link href="profile">
          <a>{user} profile</a>
        </Link>
      </li>
      <li onClick={closeModal}>
        <Link href="staff/uploadresult">
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

  const adminNav = (
    <>
      <li onClick={closeModal}>
        <Link href="admin/profile">
          <a>{user} profile</a>
        </Link>
      </li>
      <li onClick={closeModal}>
        <Link href="admin/uploadresult">
          <a>{contact} upload result</a>
        </Link>
      </li>

      <li onClick={() => toggle("account")} className="dropdown-toggler">
        <Link href="">
          <a>{user} Accounts</a>
        </Link>
      </li>

      <span className="account dropdown-menu" style={{ display: "none" }}>
        <li onClick={closeModal}>
          <Link href="admin/student">
            <a>{contact} create student</a>
          </Link>
        </li>
        <li onClick={closeModal}>
          <Link href="admin/staff">
            <a>{contact} create staff</a>
          </Link>
        </li>
        <li onClick={closeModal}>
          <Link href="admin/admin">
            <a>{contact} create admin</a>
          </Link>
        </li>
      </span>

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

          {account == "student"
            ? studentNav
            : category == "teacher"
            ? teacherNav
            : account == "admin"
            ? adminNav
            : Login}
        </ul>
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

    .dropdown-toggler {
      a {
        color: #580b0b;
        font-weight: bold;
      }
    }
    .dropdown-menu {
      a {
        margin-left: 20px;
        font-weight: 400;
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
