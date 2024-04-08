import React from 'react'
import ButtonAtomFull from '../atoms/ButtonAtomFull'
import { icono } from "../atoms/IconsAtom";


function ModalProtectMolecule({volver}) {
  return (
    <div className="bg-blanco rounded-xl flex flex-col justify-center items-center border-grisOscuro w-44 border shadow-md p-2 text-sm m-2">
    <icono.iconoInterrogation className="text-rojo mb-2 w-32 h-32" />
    <p className="mb-4 text-grisOscuro font-semibold">¿Estás seguro?</p>
    <ButtonAtomFull
      onClick={volver}
      color="verdeSena1"
      colorHover="verdeSena2"
    >
      Volver
    </ButtonAtomFull>
  </div>
  )
}

export default ModalProtectMolecule