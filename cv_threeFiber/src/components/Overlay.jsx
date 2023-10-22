import { Scroll, useScroll } from "@react-three/drei";
import { styles } from "../styles";
import { useState } from "react";
import { useFrame } from "@react-three/fiber";


const Section = (props) => {
    return (
        <section 
        className={`h-screen flex flex-col justify-center p-10 ${
            props.right ? "items-end" : "items-start"}`}
            style={{opacity: props.opacity}}    
        > 
            <div className="w-1/2 flex items-center justify-center">
                <div className="max-w-sm w-full">
                    <div className="bg-tertiary rounded-lg px-8 py-12">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    )
}
export const  Overlay = () => {

    const scroll = useScroll();
    const [opacityFirstSection, setOpacityFirstSection] = useState (1);
    const [opacitySecondSection, setOpacitySecondSection] = useState (1);
    const [opacityLastSection, setOpacityLastSection] = useState (1);

    useFrame (() => {
        setOpacityFirstSection (1 - scroll.range(0,1 /3));
        setOpacitySecondSection (scroll.range(1 / 3,1 /3));
        setOpacityLastSection (scroll.range(2 / 3, 1 / 3));

    });


    return (
        <Scroll html>
            <div className="w-screen">
            <Section opacity={opacityFirstSection}>
            <h1 className={`${styles.heroHeadText} text-white`}>
                 Hola, Soy <span className="text-[#02f7eb]">
                 Ariana 
                </span>
             </h1>
            </Section>
            <Section right opacity={opacitySecondSection}>
                <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                Desarrollo Aplicaciones y   
                <br className="sm:block hidden"/>
                Servicios Web
                </p>    
            </Section>
            <Section opacity={opacityLastSection}>
            <a href="/home" 
                className= {`${styles.heroSubText} mt-2 text-white-250 cursor-pointer`} > Conoce más sobre mi  </a>
            </Section>
            </div>
            
        </Scroll>
        
    ) 
}