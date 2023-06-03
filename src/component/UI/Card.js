import "./card.css";
function Card(props) {
  let classes = "cardView ";
  if (props.className !== undefined) {
    classes = classes + props.className;
  }
  return (
    <div>
      <div className={classes}>{props.children}</div>
    </div>
  );
}

export default Card;
