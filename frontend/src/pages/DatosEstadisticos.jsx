import React, { useEffect } from 'react';
import { BadgeDelta, Card, Title, Flex, Grid, BarChart, LineChart, DonutChart, Legend } from '@tremor/react';
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
        subastasPorAno,
        subastasPorVariedad
    } = useSubastaContext();

    useEffect(() => {
        ListAllDatesSub();
    }, [ListAllDatesSub]);

    const donutData = [
        { name: 'Terminadas Exitosamente', value: subastasConGanadorYPrecio },
        { name: 'Sin Establecer Ganador', value: subastasSinGanadorOPrecioInactivas },
        { name: 'Aún No Terminadas', value: subastasNoTerminadas }
    ];

    return (
        <div className="p-4">
            <Card className='mx-auto max-w-4xl'>
                <Flex justify="between" align="center">
                    <Title>Resumen de Subastas</Title>
                    <BadgeDelta
                        deltaType="moderateIncrease"
                        isIncreasePositive={true}
                        size="xs"
                    >
                        Todas las subastas: {todasLasSubastas}
                    </BadgeDelta>
                </Flex>
                <div className='flex mt-3'>
                    <Card className="mx-auto max-w-48">
                        <div className="flex items-center justify-between">
                            <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Subastas abiertas:</h4>
                        </div>
                        <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{subastasAbiertas}</p>
                    </Card>
                    <Card className="mx-auto max-w-48">
                        <div className="flex items-center justify-between">
                            <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Subastas en proceso:</h4>
                        </div>
                        <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{subastasEnProceso}</p>
                    </Card>
                    <Card className="mx-auto max-w-48">
                        <div className="flex items-center justify-between">
                            <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Subastas en espera:</h4>
                        </div>
                        <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{subastasEnEspera}</p>
                    </Card>
                    <Card className="mx-auto max-w-48">
                        <div className="flex items-center justify-between">
                            <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Subastas cerradas:</h4>
                        </div>
                        <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{subastasCerradas}</p>
                    </Card>
                </div>
            </Card>

            <Grid numCols={2} className="mt-6 gap-4 flex">
                <Card className="max-w-sm justify-center items-center flex flex-col">
                    <Title>Estadísticas de Subastas</Title>
                    <DonutChart
                        data={donutData}
                        variant="pie"
                        valueFormatter={(value) => `subastas: ${value}`}
                        colors={['cyan', 'red', 'orange']}
                        className="max-w-xs"
                    />
                    <Legend
                        categories={[
                            `Terminadas Exitosamente ${(subastasConGanadorYPrecio / todasLasSubastas * 100).toFixed(2)}%`,
                            `Sin Establecer Ganador ${(subastasSinGanadorOPrecioInactivas / todasLasSubastas * 100).toFixed(2)}%`,
                            `Aún No Terminadas ${(subastasNoTerminadas / todasLasSubastas * 100).toFixed(2)}%`
                        ]}
                        colors={['cyan', 'red', 'orange']}
                        className="max-w-xs"
                    />
                </Card>

                <Card>
                    <Title>Subastas por Mes</Title>
                    <LineChart
                        data={subastasPorMes}
                        index="mes"
                        categories={['subastas']}
                        colors={['cyan']}
                        yAxisWidth={30}
                        xAxisLabel="Meses del año"
                        yAxisLabel="Cantidad de subastas (N°)"
                        className='max-h-64'
                    />
                </Card>
            </Grid>

            <Grid numCols={2} className="mt-4 gap-4 flex">
                <Card className="max-w-sm">
                    <Title>Mejores Variedades de Café</Title>
                    <BarChart
                        data={subastasPorVariedad.map(item => ({
                            name: item.variedad,
                            subastas: item.subastas_por_variedad
                        }))}
                        index="name"
                        categories={['subastas']}
                        colors={['cyan']}
                        yAxisWidth={44}
                        onValueChange={(v) => console.log(v)}
                        className='max-h-64'
                    />
                </Card>
                <Card>
                    <Title>Subastas por Año</Title>
                    <LineChart
                        data={subastasPorAno}
                        index="año"
                        categories={['subastas_por_año']}
                        colors={['cyan']}
                        yAxisWidth={48}
                        xAxisLabel="Años"
                        yAxisLabel="Cantidad de subastas (N°)"
                        className='max-h-64'
                    />
                </Card>
            </Grid>
        </div>
    );
}

export default DatosEstadisticos;
