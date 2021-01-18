import { combineReducers } from 'redux'
import { LOGIN, SIGNUP, UPDATE_EMAIL, UPDATE_PASSWORD, UPDATE_RF, UPDATE_ADDRESS, UPDATE_LAT, UPDATE_LNG } from '../actions/user'

const user = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return action.payload
        case SIGNUP:
            return action.payload
        case UPDATE_EMAIL:
            return { ...state, email: action.payload }
        case UPDATE_PASSWORD:
            return { ...state, password: action.payload }
        case UPDATE_RF:
            return { ...state, rf:action.payload }
        case UPDATE_ADDRESS:
            return { ...state, address:action.payload }
        case UPDATE_LAT:
            return { ...state, lat:action.payload }
        case UPDATE_LNG:
            return { ...state, lng:action.payload }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    user
})

export default rootReducer