import { Vector3 } from "three";
import * as THREE from "three";

export const CURVE_DISTANCE = 105;

export const curvePoints = [
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(0, 0, -CURVE_DISTANCE),
  new THREE.Vector3(100, 0, -2 * CURVE_DISTANCE),
  new THREE.Vector3(-100, 0, -3 * CURVE_DISTANCE),
  new THREE.Vector3(100, 0, -4 * CURVE_DISTANCE),
  new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
  new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
  new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE),
];
export const textSections = [
  {
    cameraRailDist: -1,
    position: new Vector3(curvePoints[1].x - 5, curvePoints[1].y, curvePoints[1].z),
    title: `Mission - Operation Shadow Sentinel`,
    subtitle: `Extracting confidential information from a high-security inmate`,
  },
  {
    cameraRailDist: 1.5,
    position: new (curvePoints[2].x + 2, curvePoints[2].y, curvePoints[2].z)(),
    title: "Time to arrive  ",
    subtitle: `At 0200 hours  `,
  },
  {
    cameraRailDist: -1,
    position: new Vector3(curvePoints[3].x - 3, curvePoints[3].y, curvePoints[3].z),
    title: "Main goals",
    subtitle: `-Planting surveillance devices in key areas of the prison without detection`,
  },
  {
    cameraRailDist: 1.5,
    position: new Vector3(curvePoints[4].x + 3.5, curvePoints[4].y, curvePoints[4].z - 12),
    title: "Agents",
    subtitle: `- 007 \n - 002 \n -009`,
  },
  {
    cameraRailDist: 1.8,
    position: new Vector3(curvePoints[5].x - 3.5, curvePoints[4].y, curvePoints[4].z - 12),
    title: "Gadgets ",
    subtitle: `- Lipstick \n - Glasses   \n - Gun`,
  },
];
