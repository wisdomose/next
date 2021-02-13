export const totalScore = (results) => {
    let scores = results.map((result) => result.score);
    let tot = scores.reduce((total, score) => (total = total + score));
    return tot;
  };

export const average = (results) => {
  let scores = results.map((result) => result.score);
  let tot = scores.reduce((total, score) => (total = total + score));
  let length = scores.length;
  let average = tot / length;
  return average.toFixed(2);
};

export const position= number=>{
  let position = number == 1 ? (
      <sup>st</sup>
    ) : number == 2 ? (
      <sup>nd</sup>
    ) : number == 3 ? (
      <sup>rd</sup>
    ):(<sup>th</sup>)
  return(<span style={{textTransform:"lowercase"}}>{number}{position}</span>)
}

export const changeRoute = (router, path)=>{
  typeof window !== "undefined" ? router.push(`/${path}`) : "";
};