import { useState } from "react";

export default function FormCreateUnidad({ socio, handleCerrarFormUnidad, setUpdate }) {
    const [unidad, setUnidad] = useState({
        socio: socio,
        caracteristicas: {
            marca: '',
            modelo: '',
            color_original: '',
            cilindrada: ''
        },
        chasis: '',
        motor: '',
        numero: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name in unidad) {
            setUnidad({
                ...unidad,
                [name]: value
            });
        } else {
            setUnidad({
                ...unidad,
                caracteristicas: {
                    ...unidad.caracteristicas,
                    [name]: value
                }
            });
        }
    }

    const handleSubmit = (e) => {
        console.log(unidad)
        console.log(socio)
        e.preventDefault()
        fetch('/api/unidad', {
            method: 'POST',
            body: JSON.stringify(unidad),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setUpdate(prevUpdate => !prevUpdate)
                    handleCerrarFormUnidad(false)
                    handleCerrarFormUnidad(false)
                },
                (error) => {
                    console.log(error)
                    setUpdate(prevUpdate => !prevUpdate)
                    handleCerrarFormUnidad(false)
                    handleCerrarFormUnidad(false)
                }
            )
    }

    return (
        <div className='flex flex-col items-center justify-center modalFixed'>
            <h1 className='font-bold text-2xl'>
                Crear Unidad
            </h1>
            <form style={{padding:"20px"}} onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
                <div className="flex">
                    <div className='flex flex-col items-center justify-center'>
                        <label htmlFor="marca">Marca</label>
                        <input onChange={handleChange} value={unidad.caracteristicas.marca} name='marca' type="text" />
                    </div>
                    <div style={{marginLeft:"20px"}} className='flex flex-col items-center justify-center'>
                        <label htmlFor="modelo">Modelo</label>
                        <input onChange={handleChange} value={unidad.caracteristicas.modelo} name='modelo' type="text" />
                    </div>
                </div>

                <div className="flex">
                    <div className='flex flex-col items-center justify-center'>
                        <label htmlFor="color_original">Color Original</label>
                        <input onChange={handleChange} value={unidad.caracteristicas.color_original} name='color_original' type="text" />
                    </div>
                    <div style={{marginLeft:"20px"}}  className='flex flex-col items-center justify-center'>
                        <label htmlFor="cilindrada">Cilindrada</label>
                        <input onChange={handleChange} value={unidad.caracteristicas.cilindrada} name='cilindrada' type="text" />
                    </div>
                </div>

                <div className="flex">
                    <div className='flex flex-col items-center justify-center'>
                        <label htmlFor="chasis">Chasis</label>
                        <input onChange={handleChange} value={unidad.chasis} name='chasis' type="text" />
                    </div>
                    <div style={{marginLeft:"20px"}}  className='flex flex-col items-center justify-center'>
                        <label htmlFor="motor">Motor</label>
                        <input onChange={handleChange} value={unidad.motor} name='motor' type="text" />
                    </div>
                </div>

                <div  className='flex flex-col items-center justify-center'>
                    <label htmlFor="numero">Numero</label>
                    <input onChange={handleChange} value={unidad.numero} name='numero' type="text" />
                </div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Crear</button>
                <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleCerrarFormUnidad(false)} >Cancelar</button>
            </form>
        </div>
    )
}