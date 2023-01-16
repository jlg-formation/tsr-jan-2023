import "./style.scss";
import { multiplicationFactor, r, sampleNbr, svgns } from "./constants";
import { drawLine, getAngleFromIndex, getPointFromAngle } from "./misc";
import { Point } from "./interfaces/Point";

const container = document.querySelector("g.samples");
if (container === null) {
  throw new Error("cannot find container");
}

for (let i = 0; i < sampleNbr; i++) {
  const angle = getAngleFromIndex(i);
  const { x: cx, y: cy } = getPointFromAngle(angle);
  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", cx + "");
  circle.setAttributeNS(null, "cy", cy + "");
  circle.setAttributeNS(null, "r", r + "");
  container.appendChild(circle);
}

for (let i = 0; i < sampleNbr; i++) {
  const j = i * multiplicationFactor;
  const p1: Point = getPointFromAngle(getAngleFromIndex(i));
  const p2: Point = getPointFromAngle(getAngleFromIndex(j));
  drawLine(p1, p2);
}
