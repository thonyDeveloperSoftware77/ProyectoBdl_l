import { useState } from "react";

export default function FormEditUnidad({ unidadSelected, handleCerrarFormUnidad }) {

    const [unidad, setUnidad] = useState(unidadSelected)
    console.log(unidad)
    console.log(unidadSelected)

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
        e.preventDefault()
        fetch(`/api/unidad/${unidadSelected._id}`, {
            method: 'PUT',
            body: JSON.stringify(unidad),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    handleCerrarFormUnidad(false)
                },
                (error) => {
                    console.log(error)
                    handleCerrarFormUnidad(false)
                }
            )
    }

    return (
        <div className='flex flex-col items-center justify-center modalFixed'>
            <h1 className='font-bold text-2xl'>
                Editar Unidad
            </h1>
            <form style={{ padding: "20px" }} onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
                <div className="flex">
                    <div>
                        <label className='font-bold text-xl'>
                            Marca
                        </label>
                        <input
                            className='border-2 border-gray-500 rounded-lg p-2 m-2'
                            type="text"
                            name="marca"
                            value={unidad.caracteristicas.marca}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <label className='font-bold text-xl'>
                            Modelo
                        </label>
                        <input
                            className='border-2 border-gray-500 rounded-lg p-2 m-2'
                            type="text"
                            name="modelo"
                            value={unidad.caracteristicas.modelo}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <label className='font-bold text-xl'>
                            Color Original
                        </label>
                        <input
                            className='border-2 border-gray-500 rounded-lg p-2 m-2'
                            type="text"
                            name="color_original"
                            value={unidad.caracteristicas.color_original}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <label className='font-bold text-xl'>
                            Cilindrada
                        </label>
                        <input
                            className='border-2 border-gray-500 rounded-lg p-2 m-2'
                            type="text"
                            name="cilindrada"
                            value={unidad.caracteristicas.cilindrada}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="flex">

                    <div>
                        <label className='font-bold text-xl'>
                            Chasis
                        </label>
                        <input
                            className='border-2 border-gray-500 rounded-lg p-2 m-2'
                            type="text"
                            name="chasis"
                            value={unidad.chasis}
                            onChange={handleChange}
                        />
                    </div>
                    <div  style={{ marginLeft: "20px" }}>
                        <label className='font-bold text-xl'>
                            Motor
                        </label>
                        <input
                            className='border-2 border-gray-500 rounded-lg p-2 m-2'
                            type="text"
                            name="motor"
                            value={unidad.motor}
                            onChange={handleChange}
                        />
                    </div>
                </div>


                <label className='font-bold text-xl'>
                    Numero
                </label>
                <input
                    className='border-2 border-gray-500 rounded-lg p-2 m-2'
                    type="text"
                    name="numero"
                    value={unidad.numero}
                    onChange={handleChange}
                />
                <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    type="submit"
                >
                    Editar
                </button>
                <button
                     className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    onClick={() => handleCerrarFormUnidad(false)}
                >
                    Cancelar
                </button>
            </form>
        </div>
    )
}