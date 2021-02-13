import { user } from "scripts/svgs";
import styled from "@emotion/styled";
// import water from "./water.jpg";
import Image from "next/image";
// import water from "public/water.jpg";
export default function ProfileHeader(props) {
  const { image } = props;
  // set default image if profile image dosent exist
  return (
    <StyledDiv>
      <div className="background">
        <Image
          src="/water.jpg"
          alt="bg"
          width={500}
          height={200}
          objectFit="cover"
        />
      </div>

      <div className="profile-pix">{image ? <img src={user} /> : user}</div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  position: relative;
  height: 200px;

  .background {
    width: 100%;
    height: 200px;
    img {
      min-height: 200px;
    }
  }

  .profile-pix {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    backdrop-filter: blur(40px);
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -50px;
    left: calc(50% - 50px);

    svg {
      width: 100px;
      height: 100px;
    }

    img {
      width: 100px;
      height: 100px;
    }
  }
`;
