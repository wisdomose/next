import styled from "@emotion/styled";
import { useState, useContext } from "react";
import UserContext from "context/Context";
import { user, key, login } from "scripts/svgs";
import { useRouter } from "next/router";
import axios from "axios";
import MessageBox from "components/MessageBox";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messageBox, setMesageBox] = useState();

  const { setAccountType } = useContext(UserContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios
      .post(`${process.env.API_URL}/student/login`, {
        username,
        password,
      })
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("account", "student");
        setMesageBox(<MessageBox message={"logged in"} />);
        setAccountType("student");
        router.push("/");
      })
      .catch((error) => {
        setMesageBox(<MessageBox message={error.message} />);
        console.log(error);
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
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
            <label htmlFor="username">username</label>
          </div>

          <div className="field field2">
            <span className="logo">{key}</span>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <label htmlFor="password">password</label>
          </div>

          <div className="forgot">
            <a>forgot password?</a>
          </div>

          <button>
            login <span>{login}</span>
          </button>
        </form>
      </StyledDiv>
      {messageBox}
    </>
  );
}

const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to bottom right, #fcfafc, #b8b7b8);
  /* #923b92 */
  form {
    background: #fcfafc10;
    backdrop-filter: blur(10px);
    border: 5px solid transparent;
    background-clip: padding-box;
    font-family: Monospac821 BT;
    max-width: 300px;
    width: 300px;
    text-align: center;
    border-radius: 25px;
    height: 330px;
    padding: 30px 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1), -3px -3px 10px #ffffff;
    display: flex;
    flex-direction: column;

    h4 {
      font-size: 32px;
      margin-bottom: 30px;
    }
    .field2 {
      margin-top: 10px;
    }
    .field {
      display: flex;
      position: relative;
      width: 100%;
      height: 50px;

      input {
        height: 100%;
        width: 100%;
        border-radius: 25px;
        border: 0;
        outline: none;
        box-shadow: inset 3px 3px 3px rgba(0, 0, 0, 0.1),
          inset -3px -3px 3px #ffffff;
        padding-left: 50px;

        &:focus ~ label {
          opacity: 0;
        }
        &:focus,
        &:valid {
          box-shadow: inset -3px -3px 3px #ffffff,
            inset 3px 3px 3px rgba(0, 0, 0, 0.1);
        }
        &:valid ~ label {
          opacity: 0;
        }
      }
      label {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        padding-left: 50px;
        pointer-events: none;
      }

      .logo {
        z-index: 3;
        position: absolute;
        line-height: 50px;
        width: 50px;
        height: 100%;
        display: grid;
        place-items: center;
        svg {
          fill: #8a1414;
          width: 20px;
          height: 20px;
        }
      }
    }

    .forgot {
      font-size: 13px;
      align-self: start;
      margin: 10px 0;
      a {
        text-decoration: none;

        color: teal;
        &:hover {
          font-weight: lighter;
          color: #2bc7c7;
        }
      }
    }

    button {
      align-self: center;
      width: 80%;
      height: 50px;
      border-radius: 25px;
      border: 0;
      outline: 0;
      background: transparent;
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1), -3px -3px 5px #ffffff;
      font-weight: bold;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      color: #8a1414;

      &:active {
        box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.1),
          inset -3px -3px 5px #ffffff;
      }
      svg {
        fill: #8a1414;
      }
    }
  }
`;
