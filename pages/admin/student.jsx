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
  const seniorSecondary = [
    "mathematics",
    "english language",
    "civic education",
    "biology",
  ];

  const juniorSecondary = [
    "mathematics",
    "english language",
    "civic education",
    "french",
    "music",
    "basic science",
    "basic technology",
    "social studies",
    "home economics",
    "christian religious knowledge",
    "physical and health education",
    "fine art",
  ];

  const primary = [
    "mathematics",
    "english language",
    "national and value education",
    "pre-vocational studies",
    "moral instruction",
    "christian religious knowledge",
    "verbal reasoning",
    "quantitative reasoning",
    "vocational aptitude",
  ];

  const merryland = [
    "number work",
    "letter work",
    "composition",
    "phonetics",
    "current affairs",
    "moral and social habit",
    "poem songs and rhymes",
    "fine art",
    "christian religious knowledge",
    "elementary science",
  ];

  const wonderland = [
    "number work",
    "letter work",
    "composition",
    "phonetics",
    "current affairs",
    "moral and social habit",
    "poem songs and rhymes",
    "fine art",
    "christian religious knowledge",
    "elementary science",
    "handwriting",
    "dictation",
  ];

  const toyland = [
    "number work",
    "letter work",
    "scribbling",
    "physical and health education",
    "moral instruction",
    "poem songs and rhymes",
    "fine art",
    "christian religious knowledge",
  ];

  const [user, setUser] = useState({
    username: "",
    email: "",
    class: "",
    adminNumber: "",
    surname: "",
    firstname: "",
    lastname: "",
    fullname: "",
    paid: false,
    address: "",
    dateOfBirth: "",
    sex: "male",
    subjectCombination: [],
    contacts: {
      numbers: [],
      contacts: [],
    },
  });
  const [subject, setSubject] = useState("");
  const [warnings, setWarnings] = useState([]);
  const [contact, setContact] = useState({
    name: "",
    numbers: [],
  });

  const update = (data, value) => {
    setUser({ ...user, [value]: data });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <StyledDiv>
      <h3>register a new student</h3>

      <form onSubmit={submitHandler}>
        {/* step one */}

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

        {/* step two */}

        {user.surname && user.firstname && (
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
          </>
        )}

        {/* step three */}

        {user.username && (
          <>
            {/* contacts */}
            <>
              {/* displayed contacts */}
              <div className="subjects">
                {user.contacts.contacts.map((contact) => {
                  return (
                    <div
                      key={contact.name}
                      data-value={contact.name}
                      className="subject"
                      onClick={(e) => {
                        let value = e.target.dataset.value;
                        let filtered = user.contacts.contacts.filter(
                          (contact) => contact.name != value
                        );
                        let contactToBeDeleted = user.contacts.contacts.filter(
                          (contact) => contact.name == value
                        );
                        let validNumbers = user.contacts.numbers.filter(
                          (num) => num != contactToBeDeleted[0].numbers[0]
                        );
                        setUser({
                          ...user,
                          contacts: {
                            numbers: validNumbers,
                            contacts: filtered,
                          },
                        });
                      }}
                    >
                      {contact.name}
                    </div>
                  );
                })}
              </div>

              {/* contacts */}
              <div className="contact">
                <label htmlFor="contact">contact</label>
                <div className="heading">contact</div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={contact.name}
                  placeholder="name"
                  autoComplete="off"
                  onChange={(e) => {
                    setContact({
                      name: e.target.value.toLowerCase(),
                      numbers: contact.numbers,
                    });
                  }}
                />

                <input
                  type="text"
                  name="number"
                  id="number"
                  value={contact.numbers[0]}
                  placeholder="phone number"
                  autoComplete="off"
                  onChange={(e) => {
                    setContact({
                      name: contact.name,
                      numbers: [e.target.value],
                    });
                  }}
                />

                {/* add button */}
                <div
                  className="add"
                  onClick={() => {
                    if (
                      !user.contacts.numbers.includes(contact.numbers[0]) &&
                      contact.numbers[0] &&
                      contact.name
                    ) {
                      setUser({
                        ...user,
                        contacts: {
                          numbers: user.contacts.numbers.concat(
                            contact.numbers
                          ),
                          contacts: [...user.contacts.contacts, contact],
                        },
                      });
                      setContact({
                        name: "",
                        numbers: [""],
                      });
                    }
                  }}
                >
                  add
                </div>
              </div>
            </>
            {/* class */}
            <div className="field">
              <span className="logo">{home}</span>
              <select
                value={user.class}
                name="class"
                id="class"
                placeholder="class"
                required
                onChange={(e) => {
                  switch (e.target.value) {
                    case "toyland 1":
                    case "toyland 2":
                      setUser({
                        ...user,
                        class: e.target.value,
                        subjectCombination: toyland,
                      });
                      break;
                    case "wonderland":
                      setUser({
                        ...user,
                        class: e.target.value,
                        subjectCombination: wonderland,
                      });
                      break;
                    case "merryland":
                      setUser({
                        ...user,
                        class: e.target.value,
                        subjectCombination: merryland,
                      });
                      break;
                    case "emerald":
                    case "jewel":
                    case "pearl":
                    case "silver":
                    case "gold":
                      setUser({
                        ...user,
                        class: e.target.value,
                        subjectCombination: primary,
                      });
                      break;
                    case "jss1":
                    case "jss2":
                    case "jss3":
                      setUser({
                        ...user,
                        class: e.target.value,
                        subjectCombination: juniorSecondary,
                      });
                      break;
                    case "sss1":
                    case "sss2":
                    case "sss3":
                      setUser({
                        ...user,
                        class: e.target.value,
                        subjectCombination: seniorSecondary,
                      });
                      break;
                    default:
                      break;
                  }
                }}
              >
                {<ClassList />}
              </select>
              <label htmlFor="class">class</label>
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

            {/* subjects */}
            <>
              {/* show warning when ther are subjects. its more like to tell how to delete a subject */}
              {user.subjectCombination.length != 0 && (
                <div className="warning hint">
                  <p>to delete a subject, click on it</p>
                </div>
              )}
              {user.subjectCombination.length == 0 && (
                <div className="warning danger">
                  <p>please select a subject</p>
                </div>
              )}

              {/* displayed subjects */}
              <div className="subjects">
                {user.subjectCombination.map((subject) => {
                  return (
                    <div
                      key={subject}
                      data-value={subject}
                      className="subject"
                      onClick={(e) => {
                        let value = e.target.dataset.value;
                        let filtered = user.subjectCombination.filter(
                          (subj) => value != subj
                        );
                        setUser({
                          ...user,
                          subjectCombination: filtered,
                        });
                      }}
                    >
                      {subject}
                    </div>
                  );
                })}
              </div>

              {/* subject combination */}
              <div className="field">
                <span className="logo">{mail}</span>
                <select
                  name="subject"
                  id="subject"
                  value={subject}
                  placeholder="subject"
                  autoComplete="off"
                  onChange={(e) => {
                    setSubject(e.target.value.toLowerCase());
                  }}
                >
                  <option value="">select a subject</option>
                  <optgroup label="toyland subjects">
                    {toyland.map((subject) => (
                      <option value={subject} key={`toyland${subject}`}>
                        {subject}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="wonderland subjects">
                    {wonderland.map((subject) => (
                      <option value={subject} key={`wonderland${subject}`}>
                        {subject}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="merryland subjects">
                    {merryland.map((subject) => (
                      <option value={subject} key={`merryland${subject}`}>
                        {subject}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="primary subjects">
                    {primary.map((subject) => (
                      <option value={subject} key={`primary${subject}`}>
                        {subject}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="junior secondary subjects">
                    {juniorSecondary.map((subject) => (
                      <option value={subject} key={`juniorSecondary${subject}`}>
                        {subject}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="senior secondary subjects">
                    {seniorSecondary.map((subject) => (
                      <option value={subject} key={`seniorSecondary${subject}`}>
                        {subject}
                      </option>
                    ))}
                    <option value="agricultural science">
                      agricultural science
                    </option>
                    <option value="biology">biology</option>
                    <option value="chemistry">chemistry</option>
                    <option value="economics">economics</option>
                    <option value="further mathematics">
                      further mathematics
                    </option>
                    <option value="geography">geography</option>
                    <option value="physics">physics</option>
                    <option value="tourism">tourism</option>
                  </optgroup>
                </select>
                <label htmlFor="subject">subject</label>

                {/* add button */}
                <div
                  className="add"
                  onClick={() => {
                    if (!user.subjectCombination.includes(subject) && subject) {
                      setUser({
                        ...user,
                        subjectCombination: [
                          ...user.subjectCombination,
                          subject,
                        ],
                      });
                      setSubject("");
                    }
                  }}
                >
                  add
                </div>
              </div>
            </>

            {/* paid */}
            <div className="radio">
              <div className="heading">paid</div>
              <div className="content">
                <span
                  className="button"
                  data-value="yes"
                  onClick={() => {
                    setUser({
                      ...user,
                      paid: !user.paid,
                    });
                  }}
                >
                  {user.paid ? "true" : "false"}
                </span>
              </div>
            </div>
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

  .subjects {
    display: flex;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 10px;
  }
  .subject {
    border: 2px solid #cdd3cd;
    border-radius: 25px;
    padding: 5px 10px;
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

  .contact {
    display: flex;
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    flex-direction: column;

    label {
      display: none;
    }

    input {
      padding: 0;
      height: 50px;
      margin-bottom: 10px;
    }
    .add {
      width: 50px;
      height: 50px;
      align-self: center;
      margin: 0px;
    }
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
