import Button from '../Button'
import './style.css'

export default function About() {
  return (
    <div className="about">
      <h1>MAGNA ETIAM LOREM</h1>
      <p>
        Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit
        amet mi ullamcorper vehicula. Integer adipiscin sem. Nullam quis massa
        sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, faucibus
        non, congue vel, arcu, erisque hendrerit tellus. Integer sagittis.
        Vivamus a mauris eget arcu gravida tristique. Nunc iaculis mi in ante.
      </p>
      <Button title="learn more" />
    </div>
  )
}
