export default function Loading(){
    return(
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
    )
}