function SmallSignCard(props) {
  return (
    <div className="signCard">
      <img src={props.image} alt={props.alt} />
      <h3>{props.title}</h3>
      <p>{props.date}</p>
    </div>
  );
}

export default SmallSignCard;
