import {useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Header() {
  const [user, setUser] = useState("")
  useEffect(() => {
    setUser(localStorage.getItem("user"))
  }, [user])
  const local = () => {
    localStorage.removeItem("user") 
    localStorage.removeItem("userNombre")
    setUser("")
  }
  
  const router = useRouter().asPath
  return (
    <header className='flex justify-between px-3 py-2 font-bold text-lg bg-black text-white border-b border-gray-300'>
      <Link href="/"><Image src="/../public/img/logo.png" width={100} height={100} alt="logo" /></Link>
            {!user ? (
                  <div className='flex gap-5 mt-7 mr-5'>
                      <Link href="/login">
                          <button className={`py-2 px-14  ${router === "/login" ? "bg-orange-700 hover:bg-orange-500" : 
                          "bg-orange-500 hover:bg-orange-700"} rounded-lg`}>Login</button>
                      </Link>
                      <Link href="/register">
                          <button className={`py-2 px-12  ${router === "/register" ? "bg-sky-600 hover:bg-sky-400" : 
                          "bg-sky-400 hover:bg-sky-600"} rounded-lg`}>Sign up</button>
                      </Link>
                  </div>
            ) : (
              <div className='mt-4 mr-5 '>
                {"Hola: " + localStorage.getItem("userNombre")}
                <Link href="/">
                    <button className="ml-5 py-2 px-7 mt-3 bg-red-700 hover:bg-red-500 rounded-lg " 
                    onClick={local }>Log Out</button>
                </Link>
              </div>
            )}
    </header>
  )
}
