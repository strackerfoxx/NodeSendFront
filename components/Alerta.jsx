import React from 'react'

export default function Alerta({error = true, msg}) {
  return (
    <div className={`w-full p-2 ${error ? "bg-red-500" : "bg-lime-500"} font-bold text-white rounded-md` } >
        <h1>{msg}</h1>
    </div>
  )
}
