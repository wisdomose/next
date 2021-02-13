import { useRouter } from "next/router";
import ProfileHeader from "components/profile/ProfileHeader";
import styled from "@emotion/styled";
import { changeRoute } from "scripts/functions";
import { useContext, useEffect } from "react";
import Context from "context/Context";
import Loading from "components/Loader";
import useFetch from "hooks/useFetch";

export default function StudentProfile() {
  const router = useRouter();

  const { token, account } = useContext(Context);

  if (!token) {
    return (
      <span className="ose">
        {<Loading />}
        <br />
        <p>no data yet</p>
      </span>
    );
  }

  let url = `${process.env.API_URL}/${account}/account/token?token=${token}`;
  const { data, error, loading } = useFetch(url, token);

  if (loading) {
    return <span className="ose">{<Loading />}</span>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (data) {
    const {
      email,
      username,
    } = data;
    return (
      <StyledDiv>
        <ProfileHeader />
        <div className="profile">
          <div className="profile-item">
            <h3 className="heading">username</h3>
            <div className="value">{username}</div>
          </div>
          <div className="profile-item">
            <h3 className="heading">email</h3>
            <div className="value">{email}</div>
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
  .button {
    padding: 10px 25px;
  }
`;
