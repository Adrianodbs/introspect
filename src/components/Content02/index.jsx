import "./style.css";
import "../Button";

export default function Content02({ title, description }) {
  return (
    <div className="content02">
      <h3>{title}</h3>
      <p>{description}</p>
      <button title="Learn More" isWhite />
    </div>
  );
}
