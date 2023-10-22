import {styles} from '../styles';
import {NavbarLogin} from '../components';
import {motion} from 'framer-motion';
import {fadeIn} from '../utils/motion';
//import {SectionWrapper} from '../hoc';
import {textVariant} from '../utils/motion';
//import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';

const endpoint = 'http://127.0.0.1:8000/api'

export const DashboardPage = () => {

    const [messages, setMessages] = useState([])
    useEffect(() => {
        getAllMessages()

    }, [])

    const getAllMessages = async () => {
        const response = await axios.get(`${endpoint}/messages`)
        setMessages(response.data)
        console.log(response.data)
    }

    const deleteMessage = async (id) => {
        await axios.delete(`${endpoint}/messages/${id}`)
        getAllMessages()
    }

    return (
    
        <div>
                <div >
                    <NavbarLogin/>
                </div>
                <div className='flex-col flex gap-10 overflow-hidden'>

                

                <div className='mt-20 flex-[0.75] bg-black-100 p-8 rounded-2xl'>


                    <div className= {`${styles.padding}
                    bg-tertiary rounded-2xl min-h-[300px]`}>

                        <motion.div variants={textVariant()}>
                        <p className={styles.sectionSubText}> Dashboard Personal</p>
                        <h2 className={styles.sectionHeadText}> Lista de Mensajes Recibidos </h2>
                        </motion.div>
                    </div>
               
                    <div>

                        <motion.div
                            variants={fadeIn("","spring")}
                            className=" bg-black-200 p-10 rounded-3xl  w-full"
                        >
                        
                        <div className='flex justify-center items-center'>
                        <table >
                            <thead>
                            <tr>
                                <th className='px-4 py-2'> Nombre</th>
                                <th className='px-4 py-2'> Email</th>
                                <th className='px-4 py-2'> Mensaje</th>
                                <th className='px-4 py-2'> Acción</th>
                            </tr>
                            </thead>
                            <tbody>
                            {messages.map((message) => (
                                <tr key={message.id}>
                                    <td className='border px-4 py-2'>{message.name} </td>
                                    <td className='border px-4 py-2'>{message.email} </td>
                                    <td className='border px-4 py-2'>{message.detail} </td>
                                    <td className='border px-4 py-2'>
                                        <button onClick={() => deleteMessage(message.id)}
                                                className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Borrar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        </div>
                        </motion.div>
                    </div>
                </div>
            
            </div>
        </div>
        
    )
}

