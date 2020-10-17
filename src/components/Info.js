import React from 'react';
import Login from './Login';
import Datos from './Datos';


const Info = () => {

    if(localStorage.getItem('accessToken')) {
        return <Datos/>
    } 
    else{
        return <Login/>
    }
}

export default Info;