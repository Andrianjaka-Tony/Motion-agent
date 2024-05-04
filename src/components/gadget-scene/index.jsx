import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function GadgetScene({ children }) {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#fff" }}>
      <Canvas>
        <OrbitControls autoRotate autoRotateSpeed={15} />
        <ambientLight color={"white"} intensity={5} />
        <spotLight position={[0, 3, 0]} intensity={50} color={"white"} />
        {children}
      </Canvas>
    </div>
  );
}

export default GadgetScene;
