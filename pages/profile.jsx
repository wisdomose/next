import styled from "@emotion/styled";
import ProfileHeader from "components/ProfileHeader";
import { useRouter } from "next/router";
import useUser from "hooks/useGetProfile";

export default function Profile() {
  const center = {
    position: "absolute",
    left: "50%",
    top: "calc(50% - 70px)",
    transform: "translateX(-50%)",
  };

  const changeRoute = () => {
    const router = useRouter();
    typeof window !== "undefined" ? router.push("/login") : "";
  };

  const token =
    typeof window !== "undefined" ? sessionStorage.getItem("token") : "";

  if (!token) changeRoute();

  const { data, loading, error } = useUser(token);

  if (error) {
    changeRoute();
    return null;
  }
  if (loading) {
    return (
      <img
        src="/loader.gif"
        width="50px"
        height="50px"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          // transform: "translateX(calc(50% - 70px))",
        }}
      />
    );
  }
  if (data) {
    const {
      surname,
      firstname,
      lastname,
      username,
      class: klass,
      contacts,
      subjectCombination,
      dateOfBirth,
    } = data;
    return (
      <StyledDiv>
        <ProfileHeader />
        <div className="profile">
          <div className="profile-item">
            <h2 className="heading">surname</h2>
            <div className="value">{surname}</div>
          </div>

          <div className="profile-item">
            <h2 className="heading">firstname</h2>
            <div className="value">{firstname}</div>
          </div>
          <div className="profile-item">
            <h2 className="heading">lastname</h2>
            <div className="value">{lastname}</div>
          </div>
          <div className="profile-item">
            <h2 className="heading">username</h2>
            <div className="value">{username}</div>
          </div>
          <div className="profile-item">
            <h2 className="heading">date of birth</h2>
            <div className="value">{dateOfBirth.toDateString()}</div>
          </div>
          <div className="profile-item">
            <h2 className="heading">class</h2>
            <div className="value abbreviation">{klass}</div>
          </div>

          <div className="profile-item">
            <h2 className="heading">contacts</h2>
            {contacts.map((contact) => {
              return (
                <div className="mini-profile-item">
                  <h2 className="mini-heading">{contact.name}</h2>
                  <div className="value">
                    <a href={`tel: ${contact.contacts}`}>{contact.contact}</a>
                    {/* change this to an array and also modify the schema to that of an array */}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="profile-item">
            <h2 className="heading">subject combination</h2>
            <ul>
              {subjectCombination.map((subject) => {
                return <li>{subject.subject}</li>;
              })}
            </ul>
          </div>
        </div>
      </StyledDiv>
    );
  }
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
  .heading {
    font-size: 1.5rem;
  }
  .value {
    font-size: 1rem;
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
