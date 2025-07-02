import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {Computer} from "./Models/Computer.jsx";
import {useEffect, useState} from "react";

const getResponsiveFov = () => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
        // Tailwind lg: 1024px and up
        return 45;
    } else if (window.matchMedia("(min-width: 768px)").matches) {
        // Tailwind md: 768px and up
        return 50;
    } else {
        // sm and below
        return 65;
    }
};

const ContactExperience = () => {

    const [fov, setFov] = useState(55); // default

    useEffect(() => {
        const updateFov = () => setFov(getResponsiveFov());

        updateFov(); // set on mount

        // Optionally update on resize
        window.addEventListener("resize", updateFov);
        return () => window.removeEventListener("resize", updateFov);
    }, []);

    return (
        <Canvas shadows camera={{ position: [0, 3, 7], fov }}>
            <ambientLight intensity={0.5} color="#fff4e6" />

            <directionalLight position={[5, 5, 3]} intensity={2.5} color="#1e2939" />

            <directionalLight
                position={[5, 9, 1]}
                castShadow
                intensity={2.5}
                color="#ffd9b3"
            />

            <OrbitControls
                enablePan={false} // Prevents panning of the scene
                enableZoom={false}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            <group scale={[1, 1, 1]}>
                <mesh
                    receiveShadow
                    position={[0, -1.5, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                >
                    <planeGeometry args={[30, 30]} />
                    <meshStandardMaterial color="#1e2939" />
                </mesh>
            </group>

            <group scale={0.03} position={[0, -1.49, -2]} castShadow>
                <Computer />
            </group>
        </Canvas>
    );
};

export default ContactExperience;
