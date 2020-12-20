export default function ResultProfile(props) {
  const { name, klass, term, position } = props;
  return (
    <>
      <span>
        <b className="result-profile">NAME:</b>
        {name}
      </span>
      <span>
        <b className="result-profile">CLASS:</b>
        {klass}
      </span>
      <span>
        <b className="result-profile">TERM:</b>
        {term}
      </span>
      <span>
        <b className="result-profile">POSITION:</b>
        {position}
      </span>
    </>
  );
}
