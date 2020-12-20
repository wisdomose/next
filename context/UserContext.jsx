import { useState, useEffect } from "react";
import UserContext from "./Context";

export default function UserContextProvider(props) {
  const [student, setStudent] = useState(false);
  const [teacher, setTeacher] = useState(false);
  const [admin, setAdmin] = useState(false);

  const setAccountType = (type) => {
    switch (type) {
      case "student":
        setStudent(true);
        setTeacher(false);
        setAdmin(false);
        break;
      case "teacher":
        setStudent(false);
        setTeacher(true);
        setAdmin(false);
        break;

      case "admin":
        setStudent(false);
        setTeacher(false);
        setAdmin(true);
        break;

      default:
        setStudent(false);
        setTeacher(false);
        setAdmin(false);
        break;
    }
  };

  useEffect(() => {
    console.log("working on it");
  }, [student, teacher, admin]);
  return (
    <UserContext.Provider
      value={{ student, teacher, admin, setAccountType: setAccountType }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
