import Button from '../Button'
import './style.css'

export default function Presentation() {
  return (
    <div className="presentation">
      <h1 className="presentation_title">
        INTROSPECT:
        <span>A FREE + FULLY RESPONSIVE SITE TEMPLATE BY TEMPLATED</span>
      </h1>
      <Button title="Get Started" isWhite />
    </div>
  )
}
