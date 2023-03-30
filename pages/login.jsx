import {useState} from 'react'
import Layout from '@/components/Layout'
import Form from '@/components/Form'
import axios from 'axios'
import Router from 'next/router'

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [alerta, setAlerta] = useState({error: true, msg: ""})
  
  const handleSubmit = async (e) =>{
    e.preventDefault()
    if([email, password].includes("")){
      return setAlerta({error: true, msg: "Por favor, llenar todos los campos"})
  }
    try {
      const {data} = await axios.post(`${process.env.API_URL}api/usuarios/login`, {
        "email": "correo@correo.com",
        "password": "1234567"
      })
      localStorage.setItem("user", data.token)
      localStorage.setItem("userNombre", data.nombre)
      return Router.push("/")
    } catch (error) {
      // setAlerta({error: true, msg: error.response.data.msg})
      console.log(error.response)
    }
  }
  return (
    <Layout>
        <div className='form login'>
        <h1 className="font-bold text-xl mb-10">Login</h1>
        <Form handleSubmit={handleSubmit} setEmail={setEmail} setPassword={setPassword} alerta={alerta} />
        </div>
    </Layout>
  )
}
