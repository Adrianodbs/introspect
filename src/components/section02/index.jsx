import Content02 from "../Content02";
import "./style.css";
import "../Button";

export default function Section02() {
  return (
    <div className="section02">
      <Content02
        title="TEMPUS FEUGIAT"
        description="Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna lorem ullamcorper laoreet, lectus arcu."
      />
      <Content02
        title="ALIQUAM NULLA"
        description="Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed."
      />
      <Content02
        title="SED MAGNA"
        description="Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula."
      />
    </div>
  );
}
