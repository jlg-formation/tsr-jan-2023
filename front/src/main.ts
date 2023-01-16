import "./style.scss";
import { r, sampleNbr, svgns } from "./constants";
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

const p1: Point = { x: 20, y: 32 };
const p2: Point = { x: 40, y: 52 };
drawLine(p1, p2);
