import "./style.css";

export default function Button({ title, isWhite }) {
  const btnStyle = {
    border: isWhite ? "2px solid #fff" : "2px solid #e5474b",
    color: isWhite ? "#fff" : "#e5474b",
  };

  return <button style={btnStyle}>{title}</button>;
}
