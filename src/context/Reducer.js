import { SET_COORDINATES} from "../types";

export default (state,action) => {
    switch(action.type) {
        case SET_COORDINATES:
            return {
                ...state,
                coordinates: action.payload
            }  
        default: 
            return state;
    }
}