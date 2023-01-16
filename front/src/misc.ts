import { cx0, r0, cy0 } from "./constants";

export const getAngleFromIndex = (index: number) => {
  return (index * 2 * Math.PI) / 10;
};

export const getPointFromAngle = (angle: number) => {
  return {
    x: cx0 + r0 * Math.cos(angle),
    y: cy0 + r0 * Math.sin(angle),
  };
};
