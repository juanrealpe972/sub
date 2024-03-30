import React from 'react'
import TiposDeCafeOrganism from '../organisms/TiposDeCafeOrganism'

export const TiposDeCafeTemplates = () => {
  return (
    <div className="w-full py-12">
    <h2 className="text-center text-4xl font-semibold">
      Una plataforma de café perfecta para todos
    </h2>
    <h3 className="text-lg font-semibold mt-8 text-center">
      Subasta o puja por el café de tu gusto.
    </h3>
    <TiposDeCafeOrganism />
  </div>
  )
}
