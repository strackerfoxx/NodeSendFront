import {useState} from 'react'
import Layout from '@/components/Layout'
import Form from '@/components/Form'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function Register() {
  const router = useRouter()

  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [alerta, setAlerta] = useState({error: true, msg: ""})
  
  const handleSubmit = async (e) =>{
    e.preventDefault()
    if([nombre, email, password].includes("")){
        return setAlerta({error: true, msg: "Por favor, llenar todos los campos"})
    }

    try {
      const {data} = await axios.post("http://localhost:4000/api/usuarios", {"nombre": nombre,"email": email,"password": password})
      setTimeout(() => {
        router.push("/login")
      }, 2000);
      setAlerta({error: false, msg: data.msg})
    } catch (error) {
      setAlerta({error: true, msg: error.response.data.msg})
    }
  }
  
  return (
    <Layout>
    <div className='form'>
        <Form handleSubmit={handleSubmit} setNombre={setNombre} setEmail={setEmail} setPassword={setPassword} alerta={alerta}/>
    </div>
</Layout>
  )
}