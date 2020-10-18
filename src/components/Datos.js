import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Context from '../context/Context';


const Datos = () => {

    // Variables globales de la App    
    const { setCoordinates } = useContext(Context);

    // Variables globales del componente 
    const [city, setCity] = useState(null);
    const [cities, setCities] = useState([]);

    // Al iniciar el componente se obtienen las ciudades para renderizar los botones
    useEffect(() => {
        getCities();
    }, []);

    // Método para obtener los nombres de las ciudades
    const getCities = async () => {
        const token = localStorage.getItem('accessToken');
        const res = await axios.get(`https://climabackend.herokuapp.com//weather/cities`, { headers: { 'authorization': token } });
        if(res.data.status === 403) {
            localStorage.removeItem('accessToken');
            window.location.reload();
        }
        else {
            const cities = res.data;
            setCities(cities);
        }
        
    }

    // Método para obtener la información de una ciudad
    const getWeather = async (city) => {
        const token = localStorage.getItem('accessToken');
        const res = await axios.get(`https://climabackend.herokuapp.com/weather/${city}`, { headers: { 'authorization': token } });
        if(res.data.status === 403) {
            console.log(res.message)
            localStorage.removeItem('accessToken');
            window.location.reload();
        } 
        else {
            const city = res.data;
            setCity(city);
            const { coord } = city;
            setCoordinates(coord);
        }
        
    }

    // Método para cerrar sesión
    const logOut = () => {
        localStorage.removeItem('accessToken');
        window.location.reload();
    }

    return (
        <div >
            <button className="btn btn-dark mt-2" onClick={() => logOut()}>Cerrar Sesión</button>
            <div style={{ marginTop: '50px' }}>
                {cities.length>0 &&
                    <>
                        {cities.map((city, index) => <button key={index} onClick={() => getWeather(city.city)} className="btn btn-dark m-1">{city.city}</button>)}
                    </>}
                {city &&
                    <>
                        <div className="row">
                            <div className="col-12">
                            </div>
                            <div className="col-6">
                                <h1>{city.city}</h1>
                                <div style={{ margin: 'auto', backgroundColor: `rgba(0,0,0,0.1)` }} className="card p-4">
                                    <ul>
                                        <li>Temperatura: <i><b>{`${city.main.temp} °C`}</b></i></li>
                                        <li>Sensación Térmica: <i><b>{`${city.main.feels_like} °C`}</b></i></li>
                                        <li>Temperatura mínima: <i><b>{`${city.main.temp_min} °C`}</b></i></li>
                                        <li>Temperatura máxima: <i><b>{`${city.main.temp_max} °C`}</b></i></li>
                                        <li>Presión: <i><b>{`${city.main.pressure} hPa`}</b></i></li>
                                        <li>Humedad: <i><b>{`${city.main.humidity}%`}</b></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6">
                                <h3 className="text-center">{city.weather.description}</h3>
                                <div style={{ height: '300px', width: '300px' }} className="d-flex justify-content-center align-items-center">
                                    <img src={city.weather.iconURL} alt={city.weather.iconURL} style={{ width: '100%', height: '100%' }} />
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Datos;