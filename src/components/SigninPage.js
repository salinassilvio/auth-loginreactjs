import React,{useState} from 'react';
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';
import Spinner from './utils/Spinner';

const SigninPage = () => {
    
    //mi state usuario
    const[user,setUser] = useState({
        usuario:'',
        clave:''
    });

    //state de login
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    //state spinner
    const [cargando,guardarCargando] = useState(false);
    //extraer los valores del state
    const {usuario,clave} = user;

    //Leer los datos del formulario y colocarlos en el state
    const obtenerInformacion = e =>{
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    //Funcion de loguearse
    const loguearse = async(e) =>{
        //mostar el spinner
        guardarCargando(true);

        e.preventDefault();
        if(usuario.trim() === '' || clave.trim() === ''){
            //guardarError(true);
            return;
        }
        const data = {
            usuario: usuario,
            clave:clave
        };

        console.log(data);
        const resultado = await axios.post('auth/login',data).then(
            res => {
                let token = res.data.access_token;
                console.log(token);
                localStorage.setItem('token',token)                
                //ocultar el spinner y mostrar 
                setTimeout(() => {
                    //cambiar estado de cargando
                    guardarCargando(false);
           
                }, 3000);
                if(token)
                {                    
                    guardarCargando(false);
                    setIsLoggedIn(true);
                }
            }
        ).catch(
            err => {
                guardarCargando(false);
                console.log(err);
            }
        )     

    }
    //Mostrar spinner o resultado 
    const componente = (cargando) ? <Spinner/> : <></>;

    if (isLoggedIn) {
        return <Redirect to='/Home' />
    }
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
                <form onSubmit={loguearse}>
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
                                onChange={obtenerInformacion}
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
                                onChange={obtenerInformacion}
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
                {componente}
            </div>
        </div>
    )
}

export default SigninPage
