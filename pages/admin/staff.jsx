import styled from "@emotion/styled";
import ClassList from "components/ClassList";
import { useEffect, useState } from "react";
import {
  user as userLogo,
  mail,
  location,
  contact,
  home,
  rightArrow,
} from "scripts/svgs";

export default function Student() {
  const setHeight = (e) => {
    e.target.style.height = e.target.scrollHeight + "px";
  };

  const [user, setUser] = useState({
    username: "",
    email: "",
    adminNumber: "",
    surname: "",
    firstname: "",
    lastname: "",
    fullname: "",
    address: "",
    sex: "",
    tin: "",
    bank: "",
    bvn: "",
    dateOfBirth: "",
    dateEmployed: "",
    accountNumber: "",
    category: "",
    contacts: [],
    subjects: [
      {
        subject: "",
        class: [],
      },
    ],
  });
  const [subject, setSubject] = useState({
    subject: "",
    class: [],
  });
  const [contact, setContact] = useState("");

  const update = (data, value) => {
    setUser({ ...user, [value]: data });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <StyledDiv>
      <h3>register a new staff</h3>

      <form onSubmit={submitHandler}>
        {/* step one */}
        <>
        {/* surname */}
        <div className="field">
          <span className="logo">{mail}</span>
          <input
            type="text"
            name="surname"
            id="surname"
            value={user.surname}
            placeholder="surname"
            autoComplete="off"
            onChange={(e) => update(e.target.value.toLowerCase(), "surname")}
            required
          />
          <label htmlFor="surname">surname</label>
        </div>

        {/* firstname */}
        <div className="field">
          <span className="logo">{mail}</span>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={user.firstname}
            placeholder="firstname"
            autoComplete="off"
            onChange={(e) => {
              update(e.target.value.toLowerCase(), "firstname");
            }}
            required
          />
          <label htmlFor="firstname">firstname</label>
        </div>

        {/* lastname */}
        <div className="field">
          <span className="logo">{mail}</span>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={user.lastname}
            placeholder="lastname"
            autoComplete="off"
            onChange={(e) => {
              update(e.target.value.toLowerCase(), "lastname");
            }}
          />
          <label htmlFor="lastname">lastname</label>
        </div>

        {/* email */}
        <div className="field">
          <span className="logo">{mail}</span>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            placeholder="email"
            autoComplete="off"
            onChange={(e) => {
              update(e.target.value.toLowerCase(), "email");
            }}
          />
          <label htmlFor="email">email</label>
        </div>

        {/* sex */}
        <div className="field">
          <span className="logo">{mail}</span>
          <select
            name="sex"
            id="sex"
            value={user.sex}
            placeholder="sex"
            autoComplete="off"
            onChange={(e) => {
              update(e.target.value.toLowerCase(), "sex");
            }}
            required
          >
            <option value="">sex</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>

        {/* date of birth */}
        <div className="heading">date of birth</div>
        <div className="field">
          <span className="logo">{mail}</span>
          <input
            type="date"
            name="date of birth"
            id="date of birth"
            value={user.dateOfBirth}
            placeholder="date of birth"
            autoComplete="off"
            onChange={(e) => {
              update(e.target.value.toLowerCase(), "dateOfBirth");
            }}
          />
          <label htmlFor="lastname">lastname</label>
        </div>

        {/* contacts */}
        <>
          {/* displayed contacts */}
          {user.contacts.length > 0 && (
            <div className="display-contacts">
              {user.contacts.map((contact) => {
                return (
                  <div
                    key={contact}
                    data-value={contact}
                    className="display-contact"
                    onClick={(e) => {
                      let value = e.target.dataset.value;
                      let filtered = user.contacts.filter(
                        (contact) => contact != value
                      );
                      setUser({
                        ...user,
                        contacts: filtered,
                      });
                    }}
                  >
                    {contact}
                  </div>
                );
              })}
            </div>
          )}

          {/* contacts */}
          <div className="field">
            <label htmlFor="contact">contact</label>

            <input
              type="text"
              name="number"
              id="number"
              value={contact}
              placeholder="phone number"
              autoComplete="off"
              onChange={(e) => {
                setContact(e.target.value);
              }}
            />

            {/* add button */}
            <div
              className="add"
              onClick={() => {
                if (
                  !user.contacts.includes(contact) &&
                  contact &&
                  contact.length == 11
                ) {
                  setUser({
                    ...user,
                    contacts: [...user.contacts, contact],
                  });
                  setContact("");
                }
              }}
            >
              add
            </div>
          </div>
        </>

        {/* address */}
        <div className="field textarea">
          <span className="logo">{home}</span>
          <textarea
            name="address"
            id="address"
            value={user.address}
            placeholder="house address"
            autoComplete="off"
            onChange={(e) => {
              setHeight(e);
              update(e.target.value.toLowerCase(), "address");
            }}
            required
          ></textarea>
          <label htmlFor="address">address</label>
        </div>
</>
        
        {/* step two */}
        {user.surname &&
          user.firstname &&
          user.address &&
          user.dateOfBirth &&
          user.sex &&
          user.contacts.length>0 && (
            <>
              {/* username */}
              <div className="field">
                <span className="logo">{userLogo}</span>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={user.username}
                  placeholder="username"
                  autoComplete="off"
                  onChange={(e) => {
                    update(e.target.value.toLowerCase(), "username");
                  }}
                  required
                />
                <label htmlFor="username">username</label>
              </div>

              {/* admin number */}
              <div className="field">
                <span className="logo">{mail}</span>
                <input
                  type="text"
                  name="adminNumber"
                  id="adminNumber"
                  value={user.adminNumber}
                  placeholder="admin number"
                  autoComplete="off"
                  onChange={(e) => {
                    update(e.target.value.toLowerCase(), "adminNumber");
                  }}
                  required
                />
                <label htmlFor="adminNumber">admin number</label>
              </div>

              {/* category */}
              <div className="field">
                <span className="logo">{mail}</span>
                <select
                  name="category"
                  id="category"
                  value={user.category}
                  placeholder="category"
                  autoComplete="off"
                  onChange={(e) => {
                    update(e.target.value.toLowerCase(), "category");
                  }}
                  required
                >
                  <option value="">office of staff</option>
                  <option value="care giver">care giver</option>
                  <option value="teacher">teacher</option>
                </select>
              </div>
            </>
          )}

        {/* step three */}
        {user.username && user.adminNumber && user.category && (
          <>
            {/* tin */}
            <div className="field">
              <span className="logo">{mail}</span>
              <input
                type="text"
                name="tin"
                id="tin"
                value={user.tin}
                placeholder="tin"
                autoComplete="off"
                onChange={(e) => {
                  update(e.target.value.toLowerCase(), "tin");
                }}
              />
              <label htmlFor="lastname">lastname</label>
            </div>

            {/* bvn */}
            <div className="field">
              <span className="logo">{mail}</span>
              <input
                type="text"
                name="bvn"
                id="bvn"
                value={user.bvn}
                placeholder="bvn"
                autoComplete="off"
                onChange={(e) => {
                  update(e.target.value.toLowerCase(), "bvn");
                }}
              />
              <label htmlFor="lastname">lastname</label>
            </div>

            {/* bank */}
            <div className="field">
              <span className="logo">{mail}</span>
              <input
                type="text"
                name="bank"
                id="bank"
                value={user.bank}
                placeholder="bank"
                autoComplete="off"
                onChange={(e) => {
                  update(e.target.value.toLowerCase(), "bank");
                }}
              />
              <label htmlFor="lastname">lastname</label>
            </div>

            {/* account number */}
            <div className="field">
              <span className="logo">{mail}</span>
              <input
                type="text"
                name="account number"
                id="account number"
                value={user.accountNumber}
                placeholder="account number"
                autoComplete="off"
                onChange={(e) => {
                  update(e.target.value.toLowerCase(), "accountNumber");
                }}
              />
              <label htmlFor="lastname">lastname</label>
            </div>
          </>
        )}

        {/* step four */}
        {user.bank && user.accountNumber && (
          <>
            {/* date employed */}
            <div className="heading">date employed</div>
            <div className="field">
              <span className="logo">{mail}</span>
              <input
                type="date"
                name="date employed"
                id="date employed"
                value={user.dateEmployed}
                placeholder="date employed"
                autoComplete="off"
                onChange={(e) => {
                  update(e.target.value.toLowerCase(), "dateEmployed");
                }}
              />
              <label htmlFor="lastname">lastname</label>
            </div>

            {user.category == "teacher" && (
              <>
                {/* subject */}
                <>
                  {/* ..............................................
          this shows the values in the user state
           */}
                  {/* displayed subjects */}
                  {user.subjects.length > 1 && (
                    <div className="subjects">
                      {user.subjects.map((subject) => {
                        if (subject.subject) {
                          return (
                            <div
                              key={subject.subject}
                              data-value={subject.subject}
                              className="subject"
                              onClick={(e) => {
                                let value = e.target.dataset.value;
                                let filtered = user.subjects.filter(
                                  (subj) => value != subj.subject
                                );
                                setUser({
                                  ...user,
                                  subjects: filtered,
                                });
                              }}
                            >
                              {subject.subject}
                              <div className="content">
                                {subject.class.map((klass) => {
                                  return (
                                    <span
                                      className="class"
                                      style={{
                                        backgroundColor: "#fe546599",
                                        borderRadius: "5px",
                                        padding: "5px",
                                        margin: "3.5px",
                                      }}
                                    >
                                      {klass}
                                    </span>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        }
                      })}
                    </div>
                  )}
                  {/* ................................................ */}

                  {/* ............................................................................
  this shows as you type. it acts like a screen
*/}
                  {(subject.subject || subject.class.length > 0) && (
                    <div className="subjects">
                      <div className="subject">
                        {subject.subject}
                        <div className="content">
                          {subject.class.map((klass) => {
                            return (
                              <span
                                className="class"
                                style={{ paddingLeft: "10px" }}
                              >
                                {klass}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                  {/* ............................................................................ */}

                  {/* subject combination */}
                  <div className="select">
                    {/* for subject */}
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={subject.subject}
                      placeholder="subject"
                      autoComplete="off"
                      onChange={(e) =>
                        setSubject({
                          subject: e.target.value.toLowerCase(),
                          class: subject.class,
                        })
                      }
                      required
                    />

                    {/* for class */}
                    <select
                      name="subject"
                      id="subject"
                      value={subject.class[-1]}
                      placeholder="subject"
                      autoComplete="off"
                      onChange={(e) => {
                        setSubject({
                          subject: subject.subject,
                          class: [...subject.class, e.target.value],
                        });
                      }}
                    >
                      {<ClassList />}
                    </select>

                    {/* add button */}
                    <div
                      className="add"
                      onClick={() => {
                        if (subject.subject != "") {
                          setUser({
                            ...user,
                            subjects: [...user.subjects, subject],
                          });
                          setSubject({
                            subject: "",
                            class: [],
                          });
                        }
                      }}
                    >
                      add
                    </div>
                  </div>
                </>
              </>
            )}
          </>
        )}

        <input type="submit" value="register" />
      </form>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  margin-top: 70px;
  height: auto;
  h3 {
    text-align: center;
  }
  form {
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    height: auto;

    .field {
      position: relative;
      display: flex;
      width: 100%;
      height: 50px;
      margin-bottom: 10px;

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

      &:focus {
        border-bottom: 2px solid #4d904d;
      }
    }

    select {
      background-color: rgba(248, 248, 248, 0.651);
      color: rgb(43, 24, 24);
      letter-spacing: 2px;
      height: 100%;
      width: 100%;
      border: 0;
      outline: none;
      padding-left: 50px;

      option {
        width: 50%;
      }
    }

    .textarea {
      height: auto;
    }

    .select {
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      input {
        height: 50px;
      }
      select {
        margin-top: 5px;
        height: 50px;
      }
      .add {
        margin: 10px 0;
      }
    }

    textarea {
      background-color: rgba(248, 248, 248, 0.651);
      color: rgb(43, 24, 24);
      overflow: hidden;
      min-height: 50px;
      width: 100%;
      padding: 5px 50px;
      border: 0;
      outline: none;
      &:focus,
      &:valid {
        border-bottom: 2px solid #4d904d;
      }
    }

    [type="submit"] {
      padding: 0;
      border: 0;
      outline: 0;
      width: 100%;
      height: 50px;
      border-radius: 25px;
      font-size: 18px;
      background-color: #5f3239;
      color: rgb(247, 247, 247);
      margin: 15px 0;
    }
  }

  .display-contacts {
    display: flex;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 10px;
    justify-content: space-between;
    .display-contact {
      border: 2px solid #cdd3cd;
      border-radius: 10px;
      padding: 5px 10px;
      height: auto;
    }
  }

  .subjects {
    display: flex;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 10px;
    justify-content: space-between;

    .subject {
      border: 2px solid #cdd3cd;
      width: 40vw;
      border-radius: 10px;
      padding: 5px 10px;
      height: auto;

      .content {
        display: flex;
        text-align: center;
        flex-wrap: wrap;
        max-width: 100%;
      }
    }
  }

  .add {
    background-color: #066575;
    color: white;
    margin-left: 5px;
    width: 70px;
    text-align: center;
    line-height: 50px;
    border-radius: 5px;
  }

  .radio {
    display: flex;
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    flex-direction: column;
    background-color: rgba(248, 248, 248, 0.651);
    padding: 10px;

    .content {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
    .button {
      width: 100px;
      height: 50px;
      background-color: #066575;
      color: white;
      text-align: center;
      line-height: 50px;
      border-radius: 5px;
    }
  }

  .heading {
    font-weight: bold;
    font-size: 1.2rem;
  }
  .warning {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
  }
  .hint {
    background-color: #d1d7f1;
  }
  .success {
    background-color: #cff7cf;
  }
  .danger {
    background-color: #f7c3c3;
  }
`;
