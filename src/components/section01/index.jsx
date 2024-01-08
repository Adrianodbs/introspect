import Content01 from "../Content01";
import "./style.css";
import pic01 from "../../assets/img/pic01.jpg";
import pic02 from "../../assets/img/pic02.jpg";

export default function Section01() {
  return (
    <div className="section01">
      <Content01
        title="PELLENTESQUE ADIPIS"
        img={pic01}
        description="Cumsan mollis eros. Pellentesque a diam sit amet mi magna ullamcorper vehicula. Integer adipiscin sem. Nullam quis massa sit amet lorem ipsum feugiat tempus."
      />
      <Content01
        title="MORBI INTERDUM MOL"
        img={pic02}
        description="Cumsan mollis eros. Pellentesque a diam sit amet mi magna ullamcorper vehicula. Integer adipiscin sem. Nullam quis massa sit amet lorem ipsum feugiat tempus."
      />
    </div>
  );
}
