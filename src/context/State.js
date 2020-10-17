import React, { useReducer } from 'react';

import Reducer from './Reducer';
import Context from './Context';

import {SET_COORDINATES} from '../types';

const State = props => {

    // Estado inicial
    const initialState = {
        coordinates: {lat: -34.625528, lng: -58.4482137}
    }

    const [ state, dispatch ] = useReducer(Reducer,initialState);

    const setCoordinates = coordinates => {
        dispatch({
            type: SET_COORDINATES,
            payload: coordinates
        })
    }

    return (
        <Context.Provider
            value={{
                coordinates: state.coordinates,
                setCoordinates
            }}>
            {props.children}
        </Context.Provider>
    )

}

export default State;