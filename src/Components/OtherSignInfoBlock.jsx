function OtherSignInfoBlock(props) {
  return (
    <div className="otherSignsInfoBlock">
      <div className="otherSignsInfoBlockMid">
        <h2>{props.title}</h2>
        <img src={props.image} alt={props.alt} />
      </div>
      <div className="moonSignsInfoBlockText">
        <h3>{props.mobileMoonTitle}</h3>
        <p>{props.moonDescription1}</p>
        <p>{props.moonDescription2}</p>
        <p>{props.moonDescription3}</p>
      </div>
      <div className="risingSignsInfoBlockText">
        <h3>{props.mobileRisingTitle}</h3>
        <p>{props.risingDescription1}</p>
        <p>{props.risingDescription2}</p>
        <p>{props.risingDescription3}</p>
      </div>
    </div>
  );
}

export default OtherSignInfoBlock;
