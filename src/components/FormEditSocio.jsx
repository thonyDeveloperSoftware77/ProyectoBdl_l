import { useEffect, useState } from "react"

export default function FormEditSocio({ socioSelected, handleCerrarForm }) {
    const [socio, setSocio] = useState({
        nombre: socioSelected.nombre,
        apellido: socioSelected.apellido,
        cedula: socioSelected.cedula,
        tipo_licencia: socioSelected.tipo_licencia,
        direccion: {
            sector: socioSelected.direccion.sector,
            calle_principal: socioSelected.direccion.calle_principal,
            calle_secundaria: socioSelected.direccion.calle_secundaria,
            numero: socioSelected.direccion.numero
        }
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name in socio) {
            setSocio({
                ...socio,
                [name]: value
            });
        } else {
            setSocio({
                ...socio,
                direccion: {
                    ...socio.direccion,
                    [name]: value
                }
            });
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`/api/socios/${socioSelected._id}`, {
            method: 'PUT',
            body: JSON.stringify(socio),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    handleCerrarForm(false)
                },
                (error) => {
                    console.log(error)
                    handleCerrarForm(false)
                }
            )
    }

    return (
        <div className='flex flex-col items-center justify-center modalFixed'>
            <h1 className='font-bold text-2xl'>
                Editar Socio
            </h1>
            <form style={{ padding: "50px" }} className='flex flex-col items-center justify-center' onSubmit={handleSubmit}>
                <div className='flex flex-col items-center justify-center'>

                    <div className="flex">
                        <div>
                            <label className='font-bold'>
                                Nombre:
                            </label>
                            <input
                                className='border-2 border-blue-900 rounded-lg'
                                type="text"
                                name="nombre"
                                value={socio.nombre}
                                onChange={handleChange}
                            />
                        </div>
                        <div style={{ marginLeft: "20px" }}>
                            <div className='flex flex-col items-center justify-center'>
                                <label className='font-bold'>
                                    Apellido:
                                </label>
                                <input
                                    className='border-2 border-blue-900 rounded-lg'
                                    type="text"
                                    name="apellido"
                                    value={socio.apellido}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                </div>


                <div className='flex flex-col items-center justify-center'>
                    <label className='font-bold'>
                        Tipo de Licencia:
                    </label>
                    <input
                        className='border-2 border-blue-900 rounded-lg'
                        type="text"
                        name="tipo_licencia"
                        value={socio.tipo_licencia}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex">
                    <div className='flex flex-col items-center justify-center'>
                        <label className='font-bold'>
                            Sector:
                        </label>
                        <input
                            className='border-2 border-blue-900 rounded-lg'
                            type="text"
                            name="sector"
                            value={socio.direccion.sector}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{ marginLeft: "20px" }} className='flex flex-col items-center justify-center'>
                        <label className='font-bold'>
                            Numero:
                        </label>
                        <input
                            className='border-2 border-blue-900 rounded-lg'
                            type="text"
                            name="numero"
                            value={socio.direccion.numero}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="flex">
                    <div className='flex flex-col items-center justify-center'>
                        <label className='font-bold'>
                            Calle Principal:
                        </label>
                        <input
                            className='border-2 border-blue-900 rounded-lg'
                            type="text"
                            name="calle_principal"
                            value={socio.direccion.calle_principal}
                            onChange={handleChange}
                        />
                    </div>
                    <div  style={{ marginLeft: "20px" }}  className='flex flex-col items-center justify-center'>
                        <label className='font-bold'>
                            Calle Secundaria:
                        </label>
                        <input
                            className='border-2 border-blue-900 rounded-lg'
                            type="text"
                            name="calle_secundaria"
                            value={socio.direccion.calle_secundaria}
                            onChange={handleChange}
                        />
                    </div>
                </div>



                <button
                   className='bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                    type="submit"
                >
                    Editar
                </button>
                <div className='flex flex-col items-center justify-center'>
                    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleCerrarForm(false)}>Cerrar</button>
                </div>
            </form>
        </div>
    )

}
