import axios from 'axios'
import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Archivo({enlace}) {

  return (
    <Layout>
        {enlace ? (
          <>
            <h1 className='font-bold text-4xl text-center mt-5'>Download</h1>
            <Link href={`https://meek-shortbread-4d7c94.netlify.app/api/archivo/${enlace}`} className="flex items-center justify-center text-center">
              <button className="py-3 px-24 mt-20 bg-orange-500 hover:bg-red-600 rounded-lg font-bold ">Descargar Archivo</button>
            </Link>
          </>
        ): (
          <>
            <h1 className='font-bold text-4xl text-center mt-5'>ERROR 404</h1>
            <h1 className='font-bold text-3xl text-center mt-5'>Este archivo No Existe o ya fue Eliminado</h1>
          </>
        )}
    </Layout>
  )
}

export async function getServerSideProps({query: {link}}){
  const {data: enlace} = await axios(`https://meek-shortbread-4d7c94.netlify.app/api/link/${link}`)
  return{
    props: {
      enlace
    }
  }
}