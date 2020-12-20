export default function Subject(prop) {
  const { subject, midTermScore, examScore } = props;
  if (midTermScore) {
    return (
      <>
        <td>{subject}</td>
        <td>{midTermScore}</td>
        <td>{examScore}</td>
      </>
    );
  } else {
    return (
      <>
        <td>{subject}</td>
        <td>{examScore}</td>
      </>
    );
  }
}
