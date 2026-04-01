import { useFrame, useThree } from "@react-three/fiber";

export default function ControlLogger() {
  const { camera, controls } = useThree();

  useFrame((state) => {
    if (state.clock.elapsedTime % 1 < 0.02) {
      console.log("--- WORKSPACE LOG ---");
      console.log("Camera Pos:", [
        camera.position.x.toFixed(3),
        camera.position.y.toFixed(3),
        camera.position.z.toFixed(3),
      ]);

      if (controls) {
        console.log("Target Pos:", [
          controls.target.x.toFixed(3),
          controls.target.y.toFixed(3),
          controls.target.z.toFixed(3),
        ]);
      }
    }
  });

  return null;
}
