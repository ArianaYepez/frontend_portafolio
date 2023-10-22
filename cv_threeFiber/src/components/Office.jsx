import {OrbitControls, ScrollControls} from "@react-three/drei";
import { Office3d } from "./Office3d";
import { Overlay } from "./Overlay";

export const Office = () => {
    return (
        <>
            <ambientLight intensity={1} />
            <OrbitControls enableZoom={false} />
            <ScrollControls pages={3} damping={0.25}>
                <Overlay/>
                <Office3d/>
            </ScrollControls>
        </>
    );
};