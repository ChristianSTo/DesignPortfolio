import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

export default function CameraHandler() {
  const scroll = useScroll();
  const vPos = useRef(new THREE.Vector3());
  const vTarget = useRef(new THREE.Vector3());

  useFrame((state) => {
    const shots = [
      { pos: [0, 4.75, 0.1], target: [0, 4.75, 0.1], roll: 0 },
      { pos: [0, 0.5, 100.0], target: [0, 1.5, 0.1], roll: 0 },
      // { pos: [0, 2.0, 150.0], target: [0, 2.0, 0.1], roll: 0 },
      { pos: [0, 60.0, 120.0], target: [0, 2.0, 0.1], roll: Math.PI * 0.25 },
      { pos: [0, 150.0, 20.0], target: [0, 2.0, 0.1], roll: Math.PI * 0.5 },
      { pos: [0, 60.0, 120.0], target: [0, 2.0, 0.1], roll: Math.PI * 0.75 },
      { pos: [0, 2.0, 150.0], target: [0, 2.0, 0.1], roll: Math.PI },
      { pos: [0, -60.0, 120.0], target: [0, 2.0, 0.1], roll: Math.PI * 1.25 },
      { pos: [0, -150.0, 20.0], target: [0, 2.0, 0.1], roll: Math.PI * 1.5 },
      { pos: [0, -60.0, 120.0], target: [0, 2.0, 0.1], roll: Math.PI * 1.75 },
      { pos: [0, 2.0, 150.0], target: [0, 2.0, 0.1], roll: Math.PI * 2 },
    ];
    const rpp = scroll.offset;
    const totalSections = shots.length - 1;
    const rawIndex = rpp * totalSections;
    const index = Math.min(Math.floor(rawIndex), totalSections - 1);
    const t = rawIndex - index;

    vPos.current.lerpVectors(
      new THREE.Vector3(...shots[index].pos),
      new THREE.Vector3(...shots[index + 1].pos),
      t
    );
    vTarget.current.lerpVectors(
      new THREE.Vector3(...shots[index].target),
      new THREE.Vector3(...shots[index + 1].target),
      t
    );

    const roll =
      shots[index].roll + (shots[index + 1].roll - shots[index].roll) * t;

    state.camera.position.copy(vPos.current);
    state.camera.lookAt(vTarget.current);

    // Apply roll around camera's own forward axis
    const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(
      state.camera.quaternion
    );
    const rollQuat = new THREE.Quaternion().setFromAxisAngle(forward, roll);
    state.camera.quaternion.premultiply(rollQuat);
  });

  return null;
}

// import { useScroll } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";
// import { useRef } from "react";

// export default function CameraHandler() {
//   const scroll = useScroll();
//   const vPos = useRef(new THREE.Vector3());
//   const vTarget = useRef(new THREE.Vector3());
//   const vUp = useRef(new THREE.Vector3(0, 1, 0));
//   const qStart = useRef(new THREE.Quaternion());
//   const qEnd = useRef(new THREE.Quaternion());
//   const qCurrent = useRef(new THREE.Quaternion());

//   useFrame((state) => {
//     const shots = [
//       // 1 start
//       { pos: [0, 4.75, 0.1], target: [0, 4.75, 0.1] },
//       // 2
//       { pos: [0, 0.5, 100.0], target: [0, 1.5, 0.1] },
//       // 3
//       { pos: [0, 15.0, 100.0], target: [0, 0.5, 0.1], up: [-2.0, 1, 0] },
//       // 4
//       { pos: [-2.5, 57.5, 50.05], target: [0, 0.5, 0.1], up: [-1.0, 0.5, 0] },
//       // 5
//       {
//         pos: [-1.25, -21.25, 25.075],
//         target: [0, 0.5, 0.1],
//         up: [0.5, -0.25, 0],
//       },
//       // 6
//       {
//         pos: [0.95, 1.925, 12.005],
//         target: [0, 2.925, 0.1],
//         up: [9.6, 0.05, 0],
//       },
//     ];

//     const rpp = scroll.offset;
//     const totalSections = shots.length - 1;
//     const rawIndex = rpp * totalSections;
//     const index = Math.min(Math.floor(rawIndex), totalSections - 1);
//     const t = rawIndex - index;

//     vPos.current.lerpVectors(
//       new THREE.Vector3(...shots[index].pos),
//       new THREE.Vector3(...shots[index + 1].pos),
//       t
//     );
//     vTarget.current.lerpVectors(
//       new THREE.Vector3(...shots[index].target),
//       new THREE.Vector3(...shots[index + 1].target),
//       t
//     );

//     const upStart = new THREE.Vector3(
//       ...(shots[index].up || [0, 1, 0])
//     ).normalize();
//     const upEnd = new THREE.Vector3(
//       ...(shots[index + 1].up || [0, 1, 0])
//     ).normalize();

//     qStart.current.setFromUnitVectors(new THREE.Vector3(0, 1, 0), upStart);
//     qEnd.current.setFromUnitVectors(new THREE.Vector3(0, 1, 0), upEnd);

//     qCurrent.current.slerpQuaternions(qStart.current, qEnd.current, t);

//     vUp.current.set(0, 1, 0).applyQuaternion(qCurrent.current);

//     state.camera.position.copy(vPos.current);
//     state.camera.lookAt(vTarget.current);
//     state.camera.up.copy(vUp.current);
//   });

//   return null;
// }
