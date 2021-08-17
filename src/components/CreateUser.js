import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const CreateUser = () => {

    //mi state usuario
    const [user, setUser] = useState({
        usuario: '',
        clave: ''
    });

    //extraer los valores del state
    const { usuario, clave } = user;

    //Leer los datos del formulario y colocarlos en el state
    const obtenerInformacion = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    //Funcion de Crear usuario
    const crearUsuario = e => {
        e.preventDefault();
        if (usuario.trim() === '' || clave.trim() === '') {
            //guardarError(true);
            return;
        }
        const data = {
            usuario: usuario,
            clave: clave
        };

        console.log(data);
        axios.post('auth/registrar', data).then(
            res => {
                console.log(res)
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    }

    return (
        <>
            <h2 className="text-center text-3xl leading-9 
                font-extrabold text-gray-800"
            >
                Crear tu usuario
            </h2>
            <form onSubmit={crearUsuario} className="min-h-screen bg-gray-100 flex items-center">
                    <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
                        <div className="py-12 p-10 bg-white rounded-xl">
                            <div className="mb-6">
                                <label className="mr-4 text-gray-700 font-bold inline-block mb-2" for="name">Usuario</label>
                                <input
                                    type="text"
                                    name="usuario"
                                    id="usuario"
                                    onChange={obtenerInformacion}
                                    className="border bg-gray-100 py-2 px-4 w-96
                                                outline-none focus:ring-2 
                                              focus:ring-indigo-400 rounded"
                                    placeholder="Ingrese un nombre de usuario"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="mr-4 text-gray-700 font-bold inline-block mb-2" for="name">Contraseña</label>
                                <input
                                    type="password"
                                    name="clave"
                                    id="clave"
                                    onChange={obtenerInformacion}
                                    className="border bg-gray-100 py-2 px-4 
                                            w-96 outline-none focus:ring-2 
                                            focus:ring-indigo-400 rounded"
                                    placeholder="******"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <button
                                    type="submit"
                                    className=" btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
                                >
                                    Crear
                                </button>
                                <Link
                                    to={'/'}
                                    className=" border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">Cancelar</Link>
                            </div>
                        </div>
                    </div>
            </form>
        </>
    )
}

export default CreateUser
