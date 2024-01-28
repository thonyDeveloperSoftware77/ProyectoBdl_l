export default function FormDeleteUnidad({ idUnidad, handleCerrarFormUnidad }) {
    const handleDelete = () => {
        fetch(`/api/unidad/${idUnidad}`, {
            method: 'DELETE',
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
                Eliminar Unidad
            </h1>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-bold text-xl'>
                    ¿Esta seguro que desea eliminar esta Unidad?
                </p>
                <br />
                <div className='flex flex-row'>
                    <button onClick={handleDelete} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
                        Eliminar
                    </button>
                    <button onClick={() => handleCerrarFormUnidad(false)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Cancelar
                    </button>
                </div>
                <br />
                <br />
            </div>
        </div>)
}