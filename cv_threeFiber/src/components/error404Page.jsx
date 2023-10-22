import {styles} from '../styles';
import {motion} from 'framer-motion';
import {slideIn} from '../utils/motion';
import {textVariant} from '../utils/motion';
//import { Link } from 'react-router-dom';
import {Navbar} from "../components";


export const error404Page = () => {

    return (
    
        <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar/>
            </div>
                <motion.div
                variants={slideIn('left', "tween", 0.2, 1)}
                className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
                <div className='mt-20 bg-black-100 rounded-[20px]'>
                    <div className= {`${styles.padding}
                    bg-tertiary rounded-2xl min-h-[300px]`}>
                        <motion.div variants={textVariant()}>
                        <p className={styles.sectionSubText}> ERROR 404 </p>
                        <h2 className={styles.sectionHeadText}> Lo siento, parece que esta página no ha sido encontrada </h2>
                        <h3 className={styles.sectionSubText}> Intenta volver a comenzar en la pagina principal </h3>
                        </motion.div>
                    </div>
               
                    
                </div>
            </motion.div>
        </div>
        
    )
}