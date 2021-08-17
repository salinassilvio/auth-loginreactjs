import React from 'react'

const CreateUser = () => {
    return (
        <>
            <h2 className="text-center text-3xl leading-9 
                font-extrabold text-gray-800"
                >
                Crear tu usuario 
            </h2>
            <div className="min-h-screen bg-gray-100 flex items-center">
                <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
                    <div className="py-12 p-10 bg-white rounded-xl">
                        <div className="mb-6">
                            <label className="mr-4 text-gray-700 font-bold inline-block mb-2" for="name">Usuario</label>
                            <input 
                                type="text" 
                                name="usuario"
                                id="usuario"
                                className="border bg-gray-100 py-2 px-4 w-96
                                 outline-none focus:ring-2 
                                 focus:ring-indigo-400 rounded" 
                                 placeholder="Ingrese un nombre de usuario"
                                 required
                                 />
                        </div>
                        <div className="">
                            <label className="mr-4 text-gray-700 font-bold inline-block mb-2" for="name">Contraseña</label>
                            <input 
                            type="password"
                            name="clave"
                            id="clave"
                            className="border bg-gray-100 py-2 px-4 
                            w-96 outline-none focus:ring-2 
                            focus:ring-indigo-400 rounded" 
                            placeholder="******"
                            required
                             />
                        </div>
                        <button 
                        type="submit"
                        className="w-full mt-6 text-indigo-50 font-bold 
                        bg-indigo-600 py-3 rounded-md 
                        hover:bg-indigo-500 transition duration-300"
                        >
                        Crear
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateUser
