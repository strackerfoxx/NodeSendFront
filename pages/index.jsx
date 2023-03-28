import Layout from "@/components/Layout"
import axios from "axios";
import Alerta from "@/components/Alerta";
import Dropzone from "@/components/Dropzone";

export default function Home() {
  const handleImage = async (e) => {
    // Crea un objeto FormData para enviar la imagen
    const formData = new FormData();
    formData.append('archivo', e.target.files[0]);
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MGJjMzcwOTc3OWY3ZWY1OTM0ZjBlMiIsIm5vbWJyZSI6IkFsZXggc2hvdHRlciIsImlhdCI6MTY3ODk5MzQ1OSwiZXhwIjoxNjg2NzY5NDU5fQ.cQQMuDPe30O9470_4EsIt5qvEVAFLfcgCnGcecBvMCc"
    try {
      // Realiza la petición POST utilizando Axios
      const {data} = await axios.post('http://localhost:4000/api/archivo/downloads-10-password-123456', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      })
      console.log(data)
    } catch (error) {
      console.log(error.response)
    }
  }
  return (
    <Layout>
      <h1 className="font-bold text-4xl text-center mb-20"></h1>
      <div className="center">
        <div>
          {/* DROPZONE */}
            <input type="file" onChange={ handleImage } className="md:flex-1 mb-3 mx-2 lg:mt-0 bg-white  flex flex-col items-center 
            justify-center border-dashed border-gray-400 border-2 px-7 text-black py-48"/>
          {/* DROPZONE */}
          <form>
          </form> 
        </div>
        <div>
          <h1 className="font-bold text-4xl mb-6">Compartir archivos de forma sencilla y privada</h1>
          <p className="text-xl font-light"><span className="font-bold text-xl text-red-400">NodeSend</span> Te permite compartir archivos con 
          cifrado de extremo a extremo y un archivo que es eliminado despues de ser descargado. Asi que puedes mantener lo que compartes
          en privado y solo sube tu imagen y comparte el link
          <br />
          <span className="font-bold text-xl text-red-400"><a href="/login">Crea una cuenta para mayores Beneficios</a></span></p>
        </div>
        </div>
    </Layout>
  )
}