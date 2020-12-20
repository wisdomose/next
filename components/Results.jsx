import Subject from "./Subject";

export default function Result() {
  if (true) {
    return (
      <StyledTable>
        <tr>
          <td>subject</td>
          {secondary ? <td>contionus assesment</td> : <td>midterm</td>}
          <td>examination</td>
        </tr>
        {results.map((result) => {
          return (
            <tr>
              <Subject
                subject={subject}
                midTermScore={midTermScore}
                examScore={examScore}
              />
            </tr>
          );
        })}
      </StyledTable>
    );
  } else {
    return (
      <StyledTable>
        <tr>
          <td>subject</td>
          <td>examination</td>
        </tr>
        {results.map((result) => {
          return (
            <tr>
              <Subject subject={subject} examScore={examScore} />
            </tr>
          );
        })}
      </StyledTable>
    );
  }
}
