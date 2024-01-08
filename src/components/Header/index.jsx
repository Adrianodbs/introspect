import './style.css'

export default function Header() {
  return (
    <header className="header">
      <h1 className="title">introspect</h1>
      <nav className="list">
        <a>Home</a>
        <a>Generic</a>
        <a>Elements</a>
      </nav>
    </header>
  )
}
