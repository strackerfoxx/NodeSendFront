import React from 'react'
import { useRouter } from 'next/router'
import Alerta from './Alerta'

export default function Form({handleSubmit, setNombre, setEmail, setPassword, alerta}) {
    const router = useRouter().asPath
  return (
    <div>
        {alerta.msg && <Alerta error={alerta.error} msg={alerta.msg} /> }
        <form onSubmit={handleSubmit}>
          {router === "/register" ? (
          <div>
            <label htmlFor="Nombre" className='block mt-4 mb-1' >Nombre</label>
            <input type="text" placeholder='Escribe tu nombre' onChange={e => setNombre(e.target.value)}
            className='bg-gray-200 block p-2 w-full text-center' autoComplete='true'/>
          </div>
          ) : ""}

          <label htmlFor="Email" className='block mt-4 mb-1' >Email</label>
          <input type="email" placeholder='Escribe tu email' onChange={e => setEmail(e.target.value)}
          className='bg-gray-200 block p-2 w-full text-center' autoComplete='true'/>

          <label htmlFor="Password" className='block mt-4 mb-1' >Password</label>
          <input type="password" placeholder='Escribe tu password' onChange={e => setPassword(e.target.value)}
          className='bg-gray-200 block p-2 w-full text-center mb-7' autoComplete='true'/>
          <input type="submit" value="Registrar" className='p-3 bg-orange-500 w-full rounded-lg text-white font-bold cursor-pointer hover:bg-orange-700'/>
        </form>
    </div>
  )
}
