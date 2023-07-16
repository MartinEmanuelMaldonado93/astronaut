import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

function App() {
	return (
		<Canvas style={{ height: "100vh" }} camera={{ position: [0, 1.5, 2] }}>
			<color attach="background" args={["#ececec"]} />
			<Experience />
			<EffectComposer>
				<Bloom luminanceThreshold={1} intensity={1.25} mipmapBlur />
			</EffectComposer>
		</Canvas>
	);
}

export default App;
