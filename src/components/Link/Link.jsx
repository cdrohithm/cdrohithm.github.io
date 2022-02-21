import "./Link.scss";

const Link = (props) => {
  return (
    <a className="link" href="/">
      {props.children}
    </a>
  );
};
export default Link;
