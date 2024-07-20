import React, { useEffect } from 'react';
import { useSubastaContext } from '../context/SubastaContext';

function DatosEstadisticos() {
    const { 
        ListAllDatesSub, 
        todasLasSubastas, 
        subastasAbiertas, 
        subastasEnEspera, 
        subastasCerradas, 
        subastasEnProceso, 
        subastasConGanadorYPrecio, 
        subastasSinGanadorOPrecioInactivas, 
        subastasNoTerminadas, 
        subastasPorMes, 
        subastasPorAno 
    } = useSubastaContext();

    return (
        <div>
            <h1>Datos Estadísticos</h1>

            <h2>Resumen de Subastas</h2>
            <p>Todas las subastas: {todasLasSubastas}</p>
            <p>Subastas abiertas: {subastasAbiertas}</p>
            <p>Subastas en espera: {subastasEnEspera}</p>
            <p>Subastas cerradas: {subastasCerradas}</p>
            <p>Subastas en proceso: {subastasEnProceso}</p>

            <h2>Estadísticas de Subastas</h2>
            <p>Subastas con ganador y precio: {subastasConGanadorYPrecio}</p>
            <p>Subastas sin ganador o precio inactivas: {subastasSinGanadorOPrecioInactivas}</p>
            <p>Subastas no terminadas: {subastasNoTerminadas}</p>

            <h2>Subastas por Mes</h2>
            <pre>{JSON.stringify(subastasPorMes, null, 2)}</pre>

            <h2>Subastas por Año</h2>
            <pre>{JSON.stringify(subastasPorAno, null, 2)}</pre>
        </div>
    );
}

export default DatosEstadisticos;
