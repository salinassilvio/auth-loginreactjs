import React from 'react';
import {Link} from 'react-router-dom';

const SigninPage = () => {
    let url='';
    return (
        <div className="signIn-page">
            <br/>   
            <br/>         
            <div className="p-10">
                <h2 className="text-center text-3xl leading-9 
                font-extrabold text-gray-800"
                >
                    Inicio de Sesión 
                </h2>
                <p className="text-center text-sm leading-5 
                    text-gray-600"
                >
                O 
                <Link className="text-purple-400 mx-2" to={'/crear'} >  
                    Crea tu cuenta 
                </Link>
                    con estos pasos sencillos
                    <br/>
                </p>
                <form>
                    <div className="flex justify-center">
                        <div className="lg:w-1/3 md:w-2/3 w-full">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Usuario
                            </label>
                            <input 
                                type="text"
                                name="usuario"
                                id="usuario"
                                placeholder="Ingrese su usuario"
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full
                                 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"  
                                required                                
                            />
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <div className="lg:w-1/3 md:w-2/3 w-full">
                            <label 
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="password"
                            >
                                Contraseña
                            </label>
                            <input 
                                type="password"
                                name="clave"
                                id="clave"
                                placeholder="**********"
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full
                                 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"  
                                required                                
                            />
                        </div>                    
                    </div>
                    {/*  Submit button */}
                    <div className="mt-4 flex justify-center">
                            <button 
                                type="submit"
                                className ="group w-full lg:w-1/3 md:w-2/3 py-2 px-4 border border-transparent text-sm leading-5 font-medium
                                 rounded-md text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:border-blue-400 
                                 focus:shadow-outline active:outline-none transition duration-150 ease-in-out"
                            >
                            Login
                            </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SigninPage
