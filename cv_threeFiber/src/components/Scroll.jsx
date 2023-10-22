import { useState } from "react"
import {Canvas} from '@react-three/fiber'
import { Office } from "./Office"

export const Scroll = () => {
    return(

        <section className="relative w-full h-screen mx-auto">
        <Canvas camera={{
            fov:64,
            position: [2.3,1.5, 2.3],
        }}>
            <Office/>
        </Canvas>
        </section>
    );
}

