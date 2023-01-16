import "./style.scss";
import { r, svgns } from "./constants";
import { getAngleFromIndex, getPointFromAngle } from "./misc";

const container = document.querySelector("g.samples");
if (container === null) {
  throw new Error("cannot find container");
}

for (let i = 0; i < 10; i++) {
  const angle = getAngleFromIndex(i);
  const { x: cx, y: cy } = getPointFromAngle(angle);
  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", cx + "");
  circle.setAttributeNS(null, "cy", cy + "");
  circle.setAttributeNS(null, "r", r + "");
  container.appendChild(circle);
}
