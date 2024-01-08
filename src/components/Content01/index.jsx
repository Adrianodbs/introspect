export default function Content01({ title, img, description }) {
  return (
    <div className="content01">
      <h3>{title}</h3>
      <img src={img} alt={title} />
      <p>{description}</p>
    </div>
  );
}
