import "./section.css";
function Section(props) {
  let classes = "section ";
  if (props.className !== undefined) {
    classes = classes + props.className;
  }
  return <div className={classes}>{props.children}</div>;
}

export default Section;
