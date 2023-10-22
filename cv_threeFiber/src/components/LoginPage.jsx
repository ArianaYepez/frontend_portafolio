
import { useNavigate } from "react-router-dom";
import { useForm } from "../hook/useForm"
import {styles} from '../styles';
import { NavbarLogin } from "../components";
import axios from "axios";
import {motion} from 'framer-motion';
import {textVariant} from '../utils/motion';



export const LoginPage = () => {

    const navigate = useNavigate();

    const endpoint = 'http://127.0.0.1:8000/api/login'

    const {name, email, password, onInputChange, onResetForm} = useForm ({
        name: '',
        email: '',
        password: '',
    });

    const onLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(endpoint, {
                email,
                password
            });
            console.log(response);
            if(response.data && response.data.logged) {
                // Exitoso
                
                navigate('/dashboardPage',
                    {
                        replace: true,
                        state: {
                            logged: true
                        }
                    })

            } else {
                // TODO: Fallo - Manejar errores mediante errores de HTTP
                console.log('error');
                alert ('Credenciales erroneas, intentar de nuevo')
            }
        } catch (error) {
            //Manejo de errores
            console.log(error);
            alert ('Credenciales erroneas, intentar de nuevo')
        }

        onResetForm();
    }

    return ( 
        <div>
            <div>
                <NavbarLogin/>
            </div>
        <div className='flex-col flex gap-10 overflow-hidden'>
            
             <div className='mt-10 flex-[0.75] bg-black-100 p-20 rounded-2xl'>
             <div className= {`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
                        <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Ingreso al Dashboard Personal</p>
                <h2 className={styles.sectionHeadText}>Inicio de Sesión</h2>
                </motion.div>
                    </div>
            
            <div className='flex justify-center items-center'>
            <form onSubmit={onLogin} className='mt-12 min-w-[350px] '>
                
                <div className="input-group">
                   
                    <label className='flex flex-col'> 
                    <span className='text-white font-medium mb-4' htmlFor="name"> Usuario: </span>                  
                    <input placeholder='Ingresar Usuario' 
                            className='bg-tertiary py-4 px-6 
                            placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' 
                            type="text" name='name' id='name' value ={name} onChange={onInputChange} required autoComplete="off"/>
                    </label> <br></br>


                    <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4' htmlFor="email"> Email: </span>
                    <input placeholder='Ingresar email' className='bg-tertiary py-4 px-6 
                      placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' type="email" name='email'  id='email' value ={email} onChange={onInputChange} required autoComplete="off"/>
                   </label><br></br>

                    <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4' htmlFor="password"> Contraseña: </span>
                    <input placeholder='Ingresar Contraseña' className='bg-tertiary py-4 px-6 
                      placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' type="password" name='password'  id='password' value ={password} onChange={onInputChange} required autoComplete="off"/>
                    </label> <br></br>

                </div>
                <button className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'> Iniciar Sesion </button>
            </form>
            </div>

            </div>
        </div>

        </div>
    )
}

