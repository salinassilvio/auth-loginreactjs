import axios from 'axios';
import React,{useState} from 'react'
import Navbar from './utils/Navbar'
const Home = () => {

    //mi state usuario
    const [saludo, setSaludo] = useState('');

    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    };

    axios.get('saludo',config).then(
        res => {
            debugger;
            setSaludo(res.data.respuesta);
            console.log(saludo);
        }
    )

    return (
        <>
        <Navbar></Navbar>
        <div>
            <h1>Mensaje enviado desde el API {saludo}</h1>
        </div>
        </>
    )
}

export default Home
