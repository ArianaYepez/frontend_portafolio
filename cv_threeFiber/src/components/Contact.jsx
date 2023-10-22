//import React from 'react'
import { useState} from 'react';
import { motion } from 'framer-motion';
import {styles} from '../styles';
import {CellphoneCanvas} from './canvas';
import {SectionWrapper} from '../hoc';
import { slideIn } from '../utils/motion';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';


const endpoint = 'http://127.0.0.1:8000/api/message'

const Contact = () => {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [detail, setDetail] = useState('')
  const navigate = useNavigate()

  const store = async (e) => {
    e.preventDefault()

    try {
      await axios.post(endpoint, {name: name, email: email, detail: detail})
      setName('')
      setEmail('')
      setDetail('')
      setTimeout (() => {
        navigate('/home')
        alert ('Gracias, pronto me contactaré contigo');
      },1000)
    } catch (error){
      console.log(error)
      alert ('Algo salió mal.')
    }
      
  }
  

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
      variants={slideIn('left', "tween", 0.2, 1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Contactate conmigo</p>
        <h3 className={styles.sectionHeadText}>Contacto</h3>

        <form  onSubmit={store} className='mt-12 flex flex-col gap-8'>
        
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'> Tu nombre</span>
          <input 
            type='text'
            name='name'
            value={name}
            onChange={ (e)=> setName(e.target.value)}
            placeholder='¿Cuál es tu nombre?'
            className='bg-tertiary py-4 px-6 
                      placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
          />
        </label>


        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'> Tu email</span>
          <input 
            type='email'
            name='email'
            value={email}
            onChange={ (e)=> setEmail(e.target.value)}
            placeholder='¿Cuál es tu email?'
            className='bg-tertiary py-4 px-6 
                      placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
          />
        </label>


        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'> Tu mensaje</span>
          <textarea 
          rows="7"
            name='message'
            value={detail}
            onChange={(e)=> setDetail(e.target.value)}
            placeholder='¿Cuál es tu mensaje?'
            className='bg-tertiary py-4 px-6 
                      placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
          />
        </label>

        <button 
          type='submit'
          className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >Enviar Mensaje
        </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <CellphoneCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper (Contact, "contact")