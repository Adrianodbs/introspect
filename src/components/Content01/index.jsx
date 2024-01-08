import "./style.css";
export default function Content01({ title, img, description, first }) {
  const styleContent = {
    background: first ? "#f4f4f4" : "#f7f7f7",
  };
  return (
    <div style={styleContent} className="content01">
      <h3>{title}</h3>
      <img src={img} alt={title} />
      <p>{description}</p>
    </div>
  );
}
