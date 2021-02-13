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
          <label htmlFor="email">email</label>
          <span>{mail}</span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email address"
            required
          />
        </div>

        <br />

        <div className="field textarea-field">
          <label htmlFor="message">message</label>
          <textarea
            onChange={setHeight}
            name="message"
            id="message"
            placeholder="type in your message here"
            required
          ></textarea>
        </div>

        <input type="submit" value="send" />
      </StyledForm>

      <StyledUl>
        <li>
          {mail} <p>ebenezerbellsacademy@gmail.com</p>
        </li>
        <li>
          {location} <p>No. 17 Ekpeyoung Bassey Street</p>
        </li>
        <li>
          {contact}
          <p>
            <a href="tel:+2348057150586">+234 805 715 0586</a>
          </p>
        </li>
      </StyledUl>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  width: 100vw;
  font-family: segoe ui;
  margin-top: 40px;
  svg {
    fill: #33375f;
  }
`;
const StyledForm = styled.form`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
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
      }
    }
  }

  .textarea-field {
    height: auto;
  }

  [type="email"] {
    background-color: rgba(248, 248, 248, 0.651);
    color: rgb(43, 24, 24);
    letter-spacing: 2px;
    height: 100%;
    width: 100%;
    border: 0;
    outline: none;
    padding-left: 50px;
    &:focus,
    &:valid {
      border-bottom: 2px solid #4d904d;
    }
  }

  textarea {
    color: rgb(43, 24, 24);
    background-color: rgba(248, 248, 248, 0.651);
    overflow: hidden;
    min-height: 50px;
    width: 100%;
    padding: 5px;
    border: 0;
    outline: none;
    &:focus,
    &:valid {
      border-bottom: 2px solid #4d904d;
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
`;

const StyledUl = styled.ul`
  width: 100vw;
  height: auto;
  padding: 0 20px;
  list-style-type: none;

  a {
    color: #5f3239;
    font-weight: 500;
  }

  li {
    font-weight: 500;
    color: #5f3239;
    width: 100%;
    height: auto;
    display: inline-block;
    display: flex;
    align-items: center;
    margin: 10px 0;

    svg {
      width: 20px;
      height: auto;
    }

    p {
      font-size: 0.9rem;
      display: inline;
      margin-left: 10px;
    }
  }
`;
