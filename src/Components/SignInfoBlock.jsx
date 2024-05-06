function SignInfoBlock(props) {
  return (
    <div className="signInfoBlock">
      <div className="signInfoBlockImage">
        <img src={props.image} alt={props.alt} />
      </div>
      <div className="signInfoBlockText">
        <h2>{props.title}</h2>
        <p>{props.description1}</p>
        <p>{props.description2}</p>
        <p>{props.description3}</p>
      </div>
    </div>
  );
}

export default SignInfoBlock;
