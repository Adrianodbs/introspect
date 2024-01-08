import './style.css'

export default function Button({ title, isWhite }) {
  const btnStyle = {
    border: isWhite ? '2px solid #fff' : '2px solid var(--red-100)',
    color: isWhite ? '#fff' : 'var(--red-100)'
  }

  return <button style={btnStyle}>{title}</button>
}
