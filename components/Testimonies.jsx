import styled from "@emotion/styled";
import { useState } from "react";
import Testimony from "./Testimony";
export default function Testimonies() {
  const [testimonies, setTestimony] = useState([
    {
      name: "Mrs Udin Utit Uko",
      picture: "/images/testimony/001.png",
      testimony:
        "Ebenezer Bells Academy is a fabulous school that has changed my children for the better; Academically, spiritually and morally",
    },
    {
      name: "Mr Louis Okim Ikpan",
      picture: "/images/testimony/002.png",
      testimony:
        "Ebenezer Bells Academy is a school which excels academically. i also commend them on children welfare, discipline and their extra mural activities",
    },
    {
      name: "Mrs Naomi Sunday",
      picture: "/images/testimony/003.png",
      testimony:
        "My children are academically sound and intelligent. their command of english is also excellent and i will commend the school to anyone. you won't regreet it",
    },
    {
      name: "Mrs Afolabi Omabuwa",
      picture: "/images/testimony/005.png",
      testimony:
        "Ebenezer Bells Academy is one of the best schools in Cross River State. my children stand out where ever we go and i dont mind driving long distaces to send my children to school",
    },
    {
      name: "Mrs Eunice Ofem",
      picture: "/images/testimony/006.png",
      testimony:
        "I am grateful to Ebenezer Bells Academy for impacting knowledge into my kids who at the age of 3+ were able to join and read three letters words and at 4 were reading fluently",
    },
    {
      name: "Mrs Maureen E. Ephraim",
      picture: "/images/testimony/007.png",
      testimony:
        "Ebenezer Bells Academy is a school with great teachers and extra curricular activities i can attest to this as my ward at five can do some very interesting things",
    },
    {
      name: "Mrs Ogboaka Angela Obi",
      picture: "/images/testimony/008.png",
      testimony:
        "Ebenezer Bells Academy is a great school with great teachers. Two of my children have already graduated and are excelling very well",
    },
    {
      name: "Mrs Rita Charles Bassey",
      picture: "/images/testimony/009.png",
      testimony:
        "I am really grateful to the school for being able to organise online lectures to keep the children busy during the whole lockdown period",
    },
    {
      name: "Engr Odo Sylvester Okeke",
      picture: "/images/testimony/010.png",
      testimony:
        "I give a big kudos to Ebenezer Bells Academy who have made it a standard for children below 4 years to read and write. My kids are doing excellently well and can perform anytime anywhere",
    },
  ]);
  return (
    <StyledDiv>
      {testimonies.map((testimony) => (
        <Testimony
          name={testimony.name}
          picture={testimony.picture}
          testimony={testimony.testimony}
          key={testimony.name}
        />
      ))}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  margin: 10px 0;
  padding: 20px;
  width: 100vw;
  overflow-x: scroll;
  z-index: -10;
`;
