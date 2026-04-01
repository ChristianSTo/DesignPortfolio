import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

export function Scout() {
  const controlsRef = useRef();
  const { camera } = useThree();

  useFrame(() => {
    if (controlsRef.current) {
      const p = camera.position;
      const t = controlsRef.current.target;
      // This gives you the exact "DNA" of the shot
      console.log(
        `POS: ${p.x.toFixed(3)}, ${p.y.toFixed(3)}, ${p.z.toFixed(3)} | TARGET: ${t.x.toFixed(3)}, ${t.y.toFixed(3)}, ${t.z.toFixed(3)}`
      );
    }
  });

  return <OrbitControls ref={controlsRef} makeDefault />;
}

export default Scout;
