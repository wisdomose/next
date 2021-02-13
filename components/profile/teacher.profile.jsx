import styled from "@emotion/styled";
import ProfileHeader from "./ProfileHeader";
export default function StaffProfile(props) {
  console.log(props.data);
  const {
    surname,
    firstname,
    lastname,
    username,
    contacts,
    formTeacher,
    subjects,
    dateOfBirth,
    adminNumber,
  } = props.data;
  return (
    <StyledDiv>
      <ProfileHeader />
      <div className="profile">
        <div className="profile-item">
          <h3 className="heading">admin number</h3>
          <div className="value">{adminNumber ? adminNumber : "0001"}</div>
        </div>
        <div className="profile-item">
          <h3 className="heading">surname</h3>
          <div className="value">{surname}</div>
        </div>

        <div className="profile-item">
          <h3 className="heading">firstname</h3>
          <div className="value">{firstname}</div>
        </div>
        <div className="profile-item">
          <h3 className="heading">lastname</h3>
          <div className="value">{lastname}</div>
        </div>
        <div className="profile-item">
          <h3 className="heading">username</h3>
          <div className="value">{username}</div>
        </div>
        <div className="profile-item">
          <h3 className="heading">date of birth</h3>
          <div className="value">{dateOfBirth}</div>
        </div>

        {formTeacher ? (
          <div className="profile-item">
            <h3 className="heading">form class</h3>
            <div className="value">{formTeacher}</div>
          </div>
        ) : (
          ""
        )}

        <div className="profile-item">
          <h3 className="heading">contacts</h3>
          {contacts.map((contact) => {
            return (
              <div className="mini-profile-item">
                <h3 className="mini-heading">{contact.name}</h3>
                <div className="value">
                  <a href={`tel: ${contact.contacts}`}>{contact.contact}</a>
                  {/* change this to an array and also modify the schema to that of an array */}
                </div>
              </div>
            );
          })}
        </div>
        {/* 
        <div className="profile-item">
          <h3 className="heading">subjects handling</h3>
          <ul>
            {subjects.map((subject) => {
              return <li key={subject.subject}>{subject.subject}</li>;
            })}
          </ul>
        </div> */}
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  .profile {
    margin-top: 50px;
    font-family: open sans;
    padding: 0 20px;
    text-transform: capitalize;

    .profile-item {
      margin-top: 10px;
      background-color: #f8f8f8;
      padding: 5px 10px;
      .abbreviation {
        text-transform: uppercase;
      }
    }
  }
  .value {
    font-style: italic;
    color: #8b8b8b;
  }

  .mini-profile-item {
    background-color: #ffffff;
    margin: 5px 10px;
    padding: 7px;
    .mini-heading {
      font-size: 1rem;
      color: inherit;
    }
  }

  ul {
    list-style-type: square;
    margin: 0 20px;
    padding: 7px;
  }
`;
