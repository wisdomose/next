export default function ResultRemarks() {
  return (
    //   do some renaming here
    <>
      <span>
        <b className="result-profile">TOTAL MARKS OBTAINABLE:</b>
        {name}
      </span>
      <span>
        <b className="result-profile">TOTAL MARKS OBTAINED:</b>
        {klass}
      </span>
      <span>
        <b className="result-profile">CLASS TEACHER'S REMARK:</b>
        {term}
      </span>
      <span>
        <b className="result-profile">HEAD TEACHER'S REMARK:</b>
        {position}
      </span>
      <span>
        <b className="result-profile">RESUMPTION:</b>
        {position}
      </span>
    </>
  );
}
