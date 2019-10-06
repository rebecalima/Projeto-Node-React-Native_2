import React, { useEffect, useState } from 'react';
import api from '../../services/api';

export default function Dashboard() {

    const [spots, setSpots] = useState([]);

    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
                headers: { user_id }
            });
            setSpots(response.data);
        }
        loadSpots(); 
    }, []);
    return (
        <>
            <ul className='spot-list'>
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header />
                        <strong>{ spot.company }</strong>
                        <span>{ spot.price }</span>
                    </li>
                ))}
            </ul>
        </>
    );
}


// executa uma função assim que essa url é acessada.

// o array vazio na função significa que esse effect será executado uma vez
// porém eu poderia ter uma lista de filtros em que ele seria executado 
// toda vez que o filtro alterasse