import { cx0, r0, cy0, sampleNbr, svgns } from "./constants";
import { Point } from "./interfaces/Point";

export const getAngleFromIndex = (index: number) => {
  return (index * 2 * Math.PI) / sampleNbr;
};

export const getPointFromAngle = (angle: number) => {
  return {
    x: cx0 + r0 * Math.cos(angle),
    y: cy0 + r0 * Math.sin(angle),
  };
};

const lineContainer = document.querySelector("svg g.lines");
if (lineContainer === null) {
  throw new Error("cannot find container");
}

export const drawLine = (p1: Point, p2: Point) => {
  const line = document.createElementNS(svgns, "line");
  line.setAttributeNS(null, "x1", p1.x + "");
  line.setAttributeNS(null, "y1", p1.y + "");
  line.setAttributeNS(null, "x2", p2.x + "");
  line.setAttributeNS(null, "y2", p2.y + "");
  lineContainer.appendChild(line);
};
