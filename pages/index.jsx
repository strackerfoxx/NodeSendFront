import Layout from "@/components/Layout"
import axios from "axios";
import { useState,  useEffect } from "react";
import Link from "next/link";
import Alerta from "@/components/Alerta";

export default function Home() {
  const [url, setUrl] = useState("")
  const [enlace, setEnlace] = useState("")
  const [downloads, setDownloads] = useState(10)
  const [password, setPassword] = useState("")
  const [user, setUser] = useState("")
  const [validado, setValidado] = useState(false)
  const [validado2, setValidado2] = useState(false)
  const [alerta, setAlerta] = useState({})

  useEffect(() => {
    setUser(localStorage.getItem("user"))
  }, [])
  

  const handleImage = async (e) => {
    // Crea un objeto FormData para enviar la imagen
    const formData = new FormData();
    formData.append('archivo', e.target.files[0]);
    const token = localStorage.getItem("user")
    try {
      // Realiza la petición POST utilizando Axios
      const {data} = await axios.post(`${process.env.API_URL}api/archivo/downloads-${downloads || 10}-password-${password || ""}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token || ""}`
        }
      })
      setUrl(data.msg)
    } catch (error) {
      console.log(error.response)
    }
  }

  const handleCopyText = () => {
    navigator.clipboard.writeText("http://localhost:3000/downloads/" + url);
  };

  useEffect(() => {
    setEnlace(url)
  }, [url])
  useEffect(() => {
    setValidado2(validado)
  }, [validado])
  
  const handleConfig = (e) => {
    e.preventDefault();
    setValidado(true)
  }

  return (
    <Layout>
      <h1 className="font-bold text-4xl text-center mb-20"></h1>
      <div className="center">
        <div>
          {/* DROPZONE */}
            {enlace ? (
                <div className="text-center font-bold text-lg">
                    <h1>Ir a: <Link href={`http://localhost:3000/downloads/${enlace}`}>{`${enlace}`}</Link></h1>
                    <button className={`py-2 px-12 w-full mt-20 bg-sky-400 hover:bg-sky-600 rounded-lg`} 
                    onClick={handleCopyText}>Copiar Enlace</button>
                </div>
              ) : (
                <div>
                  {user ? (
                    <>
                      {!validado2 ? (
                      <div className="md:flex-1 mb-3 mx-2 lg:mt-0 bg-white  flex flex-col items-center 
                    justify-center border-dashed border-gray-400 border-2 text-black py-20">
                      <form className="font-bold text-md px-3">
                        <label htmlFor="downloads">numero de descargas</label>
                        <input name="downloads" type="number" className="p-2 mb-10 bg-gray-300 w-full text-center" placeholder="default: 10"
                        min="1" max="100" onChange={e => setDownloads(e.target.value)} />

                        <label htmlFor="password">Contraseña</label>
                        <input name="password" type="text" className="p-2 bg-gray-300 w-full text-center text-sm mb-10" 
                        placeholder="Escribe una contraseña(opcional)" onChange={e => setPassword(e.target.value)} />

                        <input type="submit" value="Subir Imagen" onClick={handleConfig} 
                        className="bg-orange-500 p-2 font-bold text-white w-full cursor-pointer" />
                      </form>
                    </div>
                    ) : (
                      <div>
                        <input type="file" onChange={ handleImage } className="md:flex-1 mb-3 mx-2 lg:mt-0 bg-white  flex flex-col items-center 
                        justify-center border-dashed border-gray-400 border-2 px-7 text-black py-48"/>
                      </div>
                    )}
                    </>
                    ) : (
                    <div>
                        <input type="file" onChange={ handleImage } className="md:flex-1 mb-3 mx-2 lg:mt-0 bg-white flex flex-col items-center 
                    justify-center border-dashed border-gray-400 border-2 text-black py-48"/>
                    </div>
                  )}
                </div>
            )}
          {/* DROPZONE */}
        </div>
        <div>
          <h1 className="font-bold text-4xl mb-6">Compartir archivos de forma sencilla y privada</h1>
          <p className="text-xl font-light"><span className="font-bold text-xl text-red-400">NodeSend</span> Te permite compartir archivos con 
          cifrado de extremo a extremo y un archivo que es eliminado despues de ser descargado. Asi que puedes mantener lo que compartes
          en privado. Solo sube tu imagen y comparte el link
          <br />
          <span className="font-bold text-xl text-red-400"><a href="/login">Crea una cuenta para mayores Beneficios</a></span></p>
        </div>
        </div>
    </Layout>
  )
}