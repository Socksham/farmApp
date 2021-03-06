import Firebase, {db} from '../config/Firebase'

export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const UPDATE_RF = 'UPDATE_RF'
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
export const UPDATE_LAT = 'UPDATE_LAT'
export const UPDATE_LNG = 'UPDATE_LNG'
export const LOGIN = 'LOGIN'
export const SIGNUP = 'SIGNUP'

export const updateEmail = email => {
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}

export const updatePassword = password => {
    return {
        type: UPDATE_PASSWORD,
        payload: password
    }
}

export const updateLAT = lat => {
    return{
        type: UPDATE_LAT,
        payload: lat
    }
}

export const updateLNG = lng => {
    return{
        type: UPDATE_LNG,
        payload: lng
    }
}

export const updateRF = rf => {
    return{
        type: UPDATE_RF,
        payload: rf
    }
}

export const updateAddress = address => {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export const login = () => {
    return async (dispatch, getState) => {
        try {
            const { email, password } = getState().user
            const response = await Firebase.auth().signInWithEmailAndPassword(email, password)

            dispatch(getUser(response.user.uid))
        } catch (e) {
            alert(e)
        }
    }
}

export const getUser = uid => {
    return async (dispatch, getState) => {
        try {
            const user = await db
                .collection('users')
                .doc(uid)
                .get()

            dispatch({ type: LOGIN, payload: user.data() })
        } catch (e) {
            alert("GET USER PROBLEM")
        }
    }
}

export const signup = () => {
    return async (dispatch, getState) => {
        try {
            const { email, password, rf, address, lat, lng } = getState().user
            const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)
            if (response.user.uid) {
                const user = {
                    uid: response.user.uid,
                    email: email,
                    rf: rf,
                    address: address,
                    lat: lat, 
                    lng: lng
                }

                db.collection('users')
                    .doc(response.user.uid)
                    .set(user)

                dispatch({ type: SIGNUP, payload: user })
            }
        } catch (e) {
            alert(e)
        }
    }
}