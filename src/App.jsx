import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, Center } from "@react-three/drei";
import ChessKing from "./ChessKing";
import Header from "./components/Header";
import Content from "./components/Content";
import ContentTwo from "./components/ContentTwo";
import ContentThree from "./components/ContentThree";
import ContentFour from "./components/ContentFour";
import ContentFive from "./components/ContentFive";
import ContentSix from "./components/ContentSix";
import ContentSeven from "./components/ContentSeven";
import ContentEight from "./components/ContentEight";
import ContentNine from "./components/ContentNine";
import ContentTen from "./components/ContentTen";
import CameraHandler from "./components/CameraHandler"; // Import your handler
import KingVisibility from "./components/KingVisibility";

import "./App.css";

function App() {
  const kingRef = useRef();

  return (
    <div className="app space">
      <Header />

      <div style={{ width: "100%", height: "100vh" }}>
        <Canvas
          flat
          // Start the camera at your first scouted POS
          // camera={{ position: [3.8, 2.8, 0.5], fov: 30 }}
          camera={{ position: [0, 2.8, 0.1], fov: 30 }}
        >
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />

          {/* 1. Wrap everything in ScrollControls */}
          {/* pages={4} because you have 4 shots in your handler */}
          <ScrollControls pages={9} damping={0.3}>
            {/* 2. Add the CameraHandler (Removes the need for OrbitControls) */}
            <CameraHandler />

            <Suspense fallback={null}>
              <group ref={kingRef} rotation={[0, 0, 0]} position={[0, 0, 0]}>
                {/* <Center> */}
                <ChessKing scale={1} />
                {/* </Center> */}
              </group>
            </Suspense>

            <KingVisibility kingRef={kingRef} />

            {/* 3. Move your Content BACK into the Scroll wrapper */}
            <Scroll html style={{ width: "100%" }}>
              <Content />
              <ContentTwo />
              <ContentThree />
              <ContentFive />
              <ContentSix />
              <ContentSeven />
              <ContentEight />
              <ContentNine />
              <ContentTen />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
