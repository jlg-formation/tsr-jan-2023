import "./style.css";

const svgns = "http://www.w3.org/2000/svg";

const r = 1;
const r0 = 45;
const cx0 = 50;
const cy0 = 50;

const getAngleFromIndex = (index: number) => {
  return (index * 2 * Math.PI) / 10;
};

const getPointFromAngle = (angle: number) => {
  return {
    x: cx0 + r0 * Math.cos(angle),
    y: cy0 + r0 * Math.sin(angle),
  };
};

const container = document.querySelector("g.samples");
for (let i = 0; i < 10; i++) {
  const angle = getAngleFromIndex(i);
  const { x: cx, y: cy } = getPointFromAngle(angle);
  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", cx + "");
  circle.setAttributeNS(null, "cy", cy + "");
  circle.setAttributeNS(null, "r", r + "");
  container?.appendChild(circle);
}
