import {useState} from 'react'
import Header from './Header'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Layout({children}) {
  const [isLoading, setIsLoading] = useState(true)
  const [transition, setTransition] = useState(true)
  const ruta = useRouter().asPath

  setTimeout(() => {
      setIsLoading(false)
  }, 2500);
  setTimeout(() => {
      setTransition(false)
  }, 1800);

  return (
    <div>
      <Head>
        <title>NodeSend</title>
        <meta content="Pagina para compartir archivos anonimamente" />
      </Head>
        <Header/>
        <div className={`${isLoading && "bg-black"} `}>
          {!transition && (
            <div className={`${ruta === "/login" || ruta === "/register" ? "no-blur" : "blur"} text-white p-3`}>
              {children}
            </div>
            )}
          {isLoading && (
            <div className={`background ${!transition && "fade-out"}`}>
              <h1 className={`text-pop-up-top ${!transition && "fade-out"} font-bold text-9xl text-white`}>NODE SEND</h1>
            </div>
          )}
        </div>
    </div>
  )
}
