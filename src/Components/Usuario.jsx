import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Usuario = () => {

    const [usuario, setUsuario] = useState([]);
    const { id } = useParams()
    const obtenerUsuario = async () => {
        const respuesta = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user = await respuesta.data;
        setUsuario(user);
    }

    useEffect(() => {
        obtenerUsuario()
    }, [])

    return (
        <div>
            <h1>Usuario</h1>
            <p>Nombre: {usuario.name}</p>
            <p>Email: {usuario.email}</p>
            <small>Telefono: {usuario.phone}</small>
        </div>
    );
}

export default Usuario;
