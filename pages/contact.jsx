import styled from "@emotion/styled";
import { send, mail, location, contact, heading } from "scripts/svgs";
export default function ContactUs() {
  const setHeight = (e) => {
    e.target.style.height = e.target.scrollHeight + "px";
  };
  return (
    <StyledDiv>
      <StyledForm>
        <h4 className="form-heading">contact us</h4>

        <div className="field">
          <span>{mail}</span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            required
          />
        </div>
        <div className="field field2">
          <span>{heading}</span>
          <input
            type="text"
            name="heading"
            id="heading"
            placeholder="heading"
            required
          />
        </div>

        <label htmlFor="message">your message</label>
        <textarea
          onChange={setHeight}
          name="message"
          id="message"
          placeholder="type in your message here"
          required
        ></textarea>

        <button>send {send}</button>
      </StyledForm>

      <StyledUl>
        <li>
          {mail} <span>ebenezerbellsacademy@gmail.com</span>
        </li>
        <li>
          {location} <span>No. 17 Ekpeyoung Bassey Street</span>
        </li>
        <li>
          {contact}
          <span>
            <a href="tel:+2348057150586">+234 805 715 0586</a>
          </span>
        </li>
      </StyledUl>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #fcfafc;
  font-family: Monospac821 BT;
  svg {
    fill: #8a1414;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 30px 20px;

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
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      padding-left: 50px;
      pointer-events: none;
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
      }
    }
  }

  .field2 {
    margin-top: 20px;
  }

  input {
    color: #999999;
    letter-spacing: 2px;
    height: 100%;
    width: 100%;
    position: absolute;
    border-radius: 25px;
    border: 0;
    outline: none;
    padding-left: 50px;
    box-shadow: inset 3px 3px 3px rgba(0, 0, 0, 0.1),
      inset -3px -3px 3px #ffffff;

    &:focus,
    &:valid {
      box-shadow: inset -3px -3px 3px #ffffff,
        inset 3px 3px 3px rgba(0, 0, 0, 0.1);
    }
  }

  input[type="text"] {
    text-transform: capitalize;
  }

  label {
    font-size: 18px;
    font-weight: 600;
    text-transform: capitalize;
    margin-top: 20px;
  }

  textarea {
    color: #999999;
    letter-spacing: 2px;
    overflow: hidden;
    min-height: 50px;
    width: 100%;
    margin-top: 20px;
    padding: 5px 50px;
    border-radius: 25px;
    border: 0;
    outline: none;
    box-shadow: inset 3px 3px 3px rgba(0, 0, 0, 0.1),
      inset -3px -3px 3px #ffffff;
  }

  button {
    align-self: center;
    width: 80%;
    height: 50px;
    margin-top: 20px;
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
  }
`;

const StyledUl = styled.ul`
  width: 100vw;
  height: auto;
  padding: 0 20px;
  list-style-type: none;

  li {
    width: 100%;
    height: auto;
    display: inline-block;
    display: flex;
    align-items: center;
    margin: 10px 0;
    svg {
      width: 30px;
      height: 30px;
    }

    span {
      margin-left: 10px;
      height: auto;
      width: calc(100% - 70px);
      font-size: 13px;

      p {
        display: inline;
      }
    }
  }
`;
