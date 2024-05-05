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
    title: `Mission - Secourir une personne`,
    subtitle: `Description de la mission `,
  },
  {
    cameraRailDist: 1.5,
    position: new Vector3(curvePoints[2].x + 2, curvePoints[2].y, curvePoints[2].z),
    title: "Durée estimé ",
    subtitle: `24:00 `,
  },
  {
    cameraRailDist: -1,
    position: new Vector3(curvePoints[3].x - 3, curvePoints[3].y, curvePoints[3].z),
    title: "Fear of flying?",
    subtitle: `Our flight attendants will help you have a great journey`,
  },
  {
    cameraRailDist: 1.5,
    position: new Vector3(curvePoints[4].x + 3.5, curvePoints[4].y, curvePoints[4].z - 12),
    title: "Agents",
    subtitle: `- Peter \n - Mark \n -Jean`,
  },
  {
    cameraRailDist: 1.8,
    position: new Vector3(curvePoints[5].x - 3.5, curvePoints[4].y, curvePoints[4].z - 12),
    title: "Gadgets ",
    subtitle: `- Pistolet AM89 \n - Stylo laser  \n -Hyper parapluie`,
  },
];
