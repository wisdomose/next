import styled from "@emotion/styled";
import { useState, useContext } from "react";
import Context from "context/Context";
import { user, key, login } from "scripts/svgs";
import { useRouter } from "next/router";
import axios from "axios";
import { changeRoute } from "scripts/functions";

export default function Login() {
  // initializes the hook for page redirect
  const router = useRouter();

  // initializes context
  const {
    setAccountType,
    token,
    setUserToken,
    setUserCategory,
    updateMessage,
  } = useContext(Context);

  // if (token) {
  //   changeRoute(router, "profile");
  //   // to prevent it from loading anything
  //   return null;
  // }
  // sets the state for form
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState("");
  const [message, setMessage] = useState();

  const submitHandler = async (e) => {
    setMessage("logging in. you will be redirected shortly");
    e.preventDefault();
    const url = `${process.env.API_URL}/${account}/account/login`;

    // account can be staff or student
    // handles the login and calls the necessary functions to set up the UI

    await axios
      .post(url, {
        username: username.toLowerCase(),
        password,
      })
      .then((res) => {
        setUserToken(res.data.token);
        setAccountType(account);
        setUserCategory(res.data.cagtegory);
        account == "student"
          ? changeRoute(router, "student/profile")
          : account == "staff"
          ? changeRoute(route, "")
          : changeRoute(route, "");
      })
      .catch((error) => {
        console.log(error);
        setMessage("failed to login");
      });
  };

  return (
    <>
      <StyledDiv>
        <form onSubmit={submitHandler}>
          <h4 className="form-heading">Login</h4>

          <div className="field">
            <span className="logo">{user}</span>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              placeholder="username"
              onChange={(e) => {
                setUsername(e.target.value.toLowerCase());
              }}
              required
            />
            <label htmlFor="username">username</label>
          </div>
          <br />
          <div className="field">
            <span className="logo">{key}</span>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <label htmlFor="password">password</label>
          </div>
          <br />
          <div className="account-type">
            <input
              type="radio"
              name="account"
              id="student"
              value="student"
              onChange={(e) => {
                setAccount(e.target.value);
              }}
            />{" "}
            <span>student</span>
          </div>

          <div className="account-type">
            <input
              type="radio"
              name="account"
              id="staff"
              value="staff"
              onChange={(e) => setAccount(e.target.value)}
            />{" "}
            <span>staff</span>
          </div>

          <a className="forgot-password">forgot password?</a>

          <input type="submit" value="login" />
        </form>
        {/* {message? <MessageBox message = {message}/> : ""}  */}
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  width: 100vw;
  max-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* #923b92 */

  form {
    box-shadow: 0 4px 8px 0 #dad7d7, 0 6px 20px 0 rgba(0, 0, 0, 0.12);
    max-width: 300px;
    width: 300px;
    border-radius: 25px;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;

    h4 {
      font-size: 32px;
      margin: 0 0 30px 0;
      text-align: center;
    }

    .field {
      position: relative;
      display: flex;
      width: 100%;
      height: 50px;

      label {
        display: none;
      }

      span {
        position: absolute;
        width: 50px;
        line-height: 50px;
        z-index: 3;
        height: 100%;
        display: grid;
        place-items: center;

        svg {
          width: 20px;
          height: auto;
          fill: #33375f;
        }
      }

      input {
        background-color: rgba(248, 248, 248, 0.651);
        color: rgb(43, 24, 24);
        letter-spacing: 2px;
        height: 100%;
        width: 100%;
        border: 0;
        // border: 2px solid #5f3239;
        outline: none;
        padding-left: 50px;

        &:focus,
        &:valid {
          border-bottom: 2px solid #4d904d;
        }
      }
    }

    .forgot-password {
      padding: 20px 0;
      text-decoration: none;
      color: #515fe8;
      &:hover {
        color: #5f3239;
      }
    }

    .account-type {
      font-size: 1rem;
      padding-top: 10px;
      color: rgb(68, 67, 67);


      span {
        font-weight: 600;
      }
    }

    [type="submit"] {
      border: 0;
      outline: 0;
      align-self: center;
      width: 100%;
      height: 50px;
      border-radius: 25px;
      font-weight: bold;
      font-size: 18px;
      background-color: #5f3239;
      color: rgb(247, 247, 247);
      margin:15px 0;
    }
  }
`;
