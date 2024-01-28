import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { useState } from "react";
import FormCreateUnidad from "./FormCreateUnidad";
import FormEditUnidad from "./FormEditUnidad";
import FormDeleteUnidad from "./FormDeleteUnidad";

export default function ViewUnidad({ socioSelected, handleCerrarForm, setUpdate}) {
    const [mostrarFormUnidad, setMostrarFormUnidad] = useState(false)
    const [mostrarFormEditUnidad, setMostrarFormEditUnidad] = useState(false)
    const [mostrarFormDeleteUnidad, setMostrarFormDeleteUnidad] = useState(false)
    const [unidadSelected, setUnidadSelected] = useState({})
    const [unidadSelectedObject, setUnidadSelectedObject] = useState({})


    const handleCerrarFormUnidad = () => {
        setMostrarFormUnidad(false)
        setMostrarFormEditUnidad(false)
        setMostrarFormDeleteUnidad(false)
        setUpdate(prevState => !prevState)
        setUpdate(prevState => !prevState)
        setUpdate(prevState => !prevState)
        handleCerrarForm(false)

    }

    const handleDeleteUnidad = (id) => {
        setUnidadSelected({})
        setUnidadSelected(id)
        setMostrarFormDeleteUnidad(true)
    }

    const handleEditUnidad = (id) => {
        setUnidadSelectedObject({})
        //Busca la unidad en el arreglo de socios
        //y lo setea en unidadSelected
        const unidad = socioSelected.unidades.find(unidad => unidad._id === id)
        setUnidadSelectedObject(unidad)
        setMostrarFormEditUnidad(true)
    }

    return (
        <>
            < div id="myModal" class="modal" >
                <div class="modal-content">
                    <span class="close" onClick={() => handleCerrarForm(false)} >&times;</span>
                    <div className="flex">
                        <h1>Unidades</h1>
                        <div style={{ marginLeft: "50px", marginTop: "25px" }}>
                            <FaPlusCircle onClick={(e) => setMostrarFormUnidad(true)} size={30} />
                        </div>
                    </div>

                    <table class="table-auto">
                        <thead>
                            <tr>
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th>Color</th>
                                <th>Cilindrada</th>
                                <th>Chasis</th>
                                <th>Motor</th>
                                <th>Numero</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {socioSelected.unidades.map((unidad) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{unidad.caracteristicas.marca}</td>
                                            <td>{unidad.caracteristicas.modelo}</td>
                                            <td>{unidad.caracteristicas.color_original}</td>
                                            <td>{unidad.caracteristicas.cilindrada}</td>
                                            <td>{unidad.chasis}</td>
                                            <td>{unidad.motor}</td>
                                            <td>{unidad.numero}</td>
                                            <td>
                                                <FaEdit onClick={(e) => handleEditUnidad(unidad._id)} size={30} />
                                                <FaDeleteLeft onClick={(e) => handleDeleteUnidad(unidad._id)} size={30} />
                                            </td>
                                        </tr>
                                    </>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div >
            {mostrarFormUnidad &&
                <FormCreateUnidad setUpdate={setUpdate}
                    handleCerrarFormUnidad={handleCerrarFormUnidad}
                    socio={socioSelected.cedula}
                />
            }
            {mostrarFormEditUnidad &&
                <FormEditUnidad setUpdate={setUpdate}
                    handleCerrarFormUnidad={handleCerrarFormUnidad}
                    unidadSelected={unidadSelectedObject}
                />
            }
            {mostrarFormDeleteUnidad &&
                <FormDeleteUnidad setUpdate={setUpdate}
                    handleCerrarFormUnidad={handleCerrarFormUnidad}
                    idUnidad={unidadSelected}
                />
            }
        </>
    )
}