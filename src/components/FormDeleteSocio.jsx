export default function FormDeleteSocio({ idSocio, handleCerrarForm }) {
    const handleDelete = () => {
        fetch(`/api/socios/${idSocio}`, {
            method: 'DELETE',
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
                Eliminar Socio
            </h1>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-bold text-xl'>
                    ¿Esta seguro que desea eliminar este socio?
                </p>
                <br />
                <div className='flex flex-row'>
                    <button onClick={handleDelete} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
                        Eliminar
                    </button>
                    <button onClick={() => handleCerrarForm(false)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Cancelar
                    </button>
                </div>
                <br />
                <br />
            </div>
        </div>
    )
}