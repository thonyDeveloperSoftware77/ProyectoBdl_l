'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaPlusCircle } from "react-icons/fa";
import FormCreateSocio from '../components/FormCreateSocio'
import FormEditSocio from '../components/FormEditSocio'
import FormDeleteSocio from '../components/FormDeleteSocio'
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import ViewUnidad from '@/components/ViewUnidad';

export default function Home() {
  const [socios, setSocios] = useState([])
  const [mostrarForm, setMostrarForm] = useState(false)
  const [mostrarFormEdit, setMostrarFormEdit] = useState(false)
  const [mostrarFormDelete, setMostrarFormDelete] = useState(false)
  const [mostrarViewUnidad, setMostrarViewUnidad] = useState(false)
  const [socioSelected, setSocioSelected] = useState({})
  const [update, setUpdate] = useState(false)
  const [idUnidad, setIdUnidad] = useState('')

  const handleCerrarForm = () => {
    setMostrarForm(false)
    setMostrarFormEdit(false)
    setMostrarFormDelete(false)
    setMostrarViewUnidad(false)
    setUpdate(!update)
  }

  const handleSetSocioEdit = (id) => {
    setSocioSelected({})
    //Busca el socio en el arreglo de socios
    //y lo setea en socioSelected
    const socio = socios.find(socio => socio._id === id)
    setSocioSelected(socio)
    setMostrarFormEdit(true)
  }



  const handleSetSocioDelete = (id) => {
    setSocioSelected({})
    //Busca el socio en el arreglo de socios
    //y lo setea en socioSelected
    const socio = socios.find(socio => socio._id === id)
    setSocioSelected(socio)
    setMostrarFormDelete(true)
  }

  const handleSetViewUnidad = (id) => {
    setSocioSelected({})
    //Busca el socio en el arreglo de socios
    //y lo setea en socioSelected
    const socio = socios.find(socio => socio._id === id)
    setSocioSelected(socio)
    setMostrarViewUnidad(true)
  }

  useEffect(() => {
    fetch('/api/socios')
      .then(res => res.json())
      .then(
        (result) => {
          setSocios(result)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [mostrarForm, mostrarFormEdit, mostrarFormDelete, update])

  return (
    <>
      <main className="bg-blue-900 flex min-h-screen flex-col items-center justify-between p-24">
        <div className='flex'>
          <div>
            <h1 className='font-bold'>
              Cooperativa de Taxis
            </h1>
          </div>
          <div style={{ marginLeft: "50px", marginTop: "25px" }}>
            <FaPlusCircle onClick={(e) => setMostrarForm(true)} size={30} />
          </div>
        </div>

        <div className='flex flex-row flex-wrap justify-center ContainerStyle'>
          {socios.map(socio => (
            <div key={socio._id} className=' bg-blue-950 card flex flex-col items-center justify-center m-4'>

              <div className='flex'>
                <h2 className='font-bold'>
                  {socio.nombre} {socio.apellido}
                </h2>


              </div>
              <div style={{ marginTop: "-25px", position: "relative", right: "-140px" }}>
                <FaEdit onClick={() => handleSetSocioEdit(socio._id)} size={30} />
              </div>
              <div style={{ marginTop: "-30px", position: "relative", right: "-175px" }}>
                <FaDeleteLeft onClick={() => handleSetSocioDelete(socio._id)} size={30} />
              </div>

              <button onClick={() => handleSetViewUnidad(socio._id)} style={{ marginTop: "20px" }} className='button'>
                Ver unidades
              </button>



              <br />
              <br />
              <div className='flex'>
                <div>
                  <p>Cedula: {socio.cedula}</p>
                </div>
                <div style={{ paddingLeft: "20px" }}>
                  <p>Tipo de Licencia: {socio.tipo_licencia}</p>
                </div>
              </div>
              <br />
              <div>
                <h2 className='font-medium'>
                  Dirección:
                </h2>
              </div>
              <div >
                Sector: {socio.direccion.sector}
                <br />
                Calle Principal: {socio.direccion.calle_principal}
                <br />
                Calle Secundaria: {socio.direccion.calle_secundaria}
                <br />
                numero: {socio.direccion.numero}
              </div>
              <div>

              </div>

            </div>
          ))}
        </div>
        <div className='flex flex-row flex-wrap justify-center ContainerStyle'>
          {
            mostrarForm && <FormCreateSocio handleCerrarForm={handleCerrarForm} />
          }
        </div>
        <div className='flex flex-row flex-wrap justify-center ContainerStyle'>
          {
            mostrarFormEdit && <FormEditSocio socioSelected={socioSelected} handleCerrarForm={handleCerrarForm} />
          }
        </div>
        <div className='flex flex-row flex-wrap justify-center ContainerStyle'>
          {
            mostrarFormDelete && <FormDeleteSocio idSocio={socioSelected._id} handleCerrarForm={handleCerrarForm} />
          }
        </div>
        <div className='flex flex-row flex-wrap justify-center ContainerStyle'>
          {
            mostrarViewUnidad && <ViewUnidad setUpdate={setUpdate} socioSelected={socioSelected} handleCerrarForm={handleCerrarForm} />
          }
        </div>

      </main>



    </>
  )
}
