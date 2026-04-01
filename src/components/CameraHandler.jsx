import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

export default function CameraHandler() {
  const scroll = useScroll();
  const vPos = useRef(new THREE.Vector3());
  const vTarget = useRef(new THREE.Vector3());
  const vUp = useRef(new THREE.Vector3(0, 1, 0));

  useFrame((state) => {
    const shots = [
      // 1 start
      { pos: [0, 4.75, 0.1], target: [0, 4.75, 0.1] },
      // 2
      { pos: [0, 0.5, 12.5], target: [0, 1.5, 0.1] },
      // 3
      { pos: [0, 0.5, 100.0], target: [0, 1.5, 0.1] },
      // 4
      { pos: [0, 0.5, 100.0], target: [0, 1.5, 0.1], up: [-2.0, 1, 0] },
      // 5
      { pos: [0, 0.5, 100.0], target: [0, 1.5, 0.1], up: [2.0, 1, 0] },
      // 6
      {
        pos: [0.95, 1.925, 12.005],
        target: [0, 2.925, 0.1],
        up: [9.6, 0.05, 0],
      },
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
    vUp.current.lerpVectors(
      new THREE.Vector3(...(shots[index].up || [0, 1, 0])),
      new THREE.Vector3(...(shots[index + 1].up || [0, 1, 0])),
      t
    );

    state.camera.position.copy(vPos.current);
    state.camera.lookAt(vTarget.current);
    state.camera.up.copy(vUp.current); // use lerped up vector
  });

  return null;
}
