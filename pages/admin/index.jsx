import styled from "@emotion/styled";
import { useState, useContext } from "react";
import Context from "context/Context";
import { user, key, login } from "scripts/svgs";
import { useRouter } from "next/router";
import axios from "axios";
import { changeRoute } from "scripts/functions";

export default function Admin(){
    
    const router = useRouter();

    const {setUserToken, setAccountType} = useContext(Context);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const url = `${process.env.API_URL}/admin/account/login?username=${username}&password=${password}`;
    // handles the login and calls the necessary functions to set up the UI
    await axios
      .post(url, {
        username: username.toLowerCase(),
        password,
      })
      .then((res) => {
        setUserToken(`${res.data.token}`);
        setAccountType("admin");
        changeRoute(router, "admin/profile");
      })
      .catch((error) => {
        console.log(error)
      });
  };

    return(
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
        <br/>
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
                  <a className="forgot-password">forgot password?</a>
        
                  <button>
                    login
                  </button>
        
                </form>
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

form{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.12);
    max-width: 300px;
    width: 300px;
    border-radius: 25px;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;

    h4 {
        font-size: 32px;
        margin-bottom: 30px;
        text-align: center;
      }
  
      .field {
        position: relative;
        display: flex;
        width: 100%;
        height: 50px;
  
        label {
         display:none;
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
            fill:#33375f
          }
        }
  
        input {
          background-color: rgb(247, 247, 247);
          color: rgb(138, 20, 20);
          letter-spacing: 2px;
          height: 100%;
          width: 100%;
          border:0;
          // border: 2px solid #5f3239;
          outline: none;
          padding-left: 50px;
  
          &:focus,
          &:valid {
            border-bottom: 2px solid #4D904D;
          }
        }
      }
  
      .forgot-password{
        padding:20px 0;
        text-decoration: none;
        color: #515fe8;
          &:hover {
            color:#5f3239;
          }
      }
  
  
      button {
        border: 0;
        outline: 0;
        align-self: center;
        width: 80%;
        height: 50px;
        border-radius: 25px;
        background: #e3d95d;
        font-weight: bold;
        font-size: 18px;
        color: #5f3239;
      }
    }
`;