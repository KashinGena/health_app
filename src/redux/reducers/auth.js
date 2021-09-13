import { AUTH_SUCCESS, AUTH_ERROR, LOGOUT, AUTH_START } from "../types"

const initialState = {
    isLoggedIn:false,
    error:null,
    user:''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case (AUTH_SUCCESS): {
            return {
                ...state,
                isLoggedIn:true,
                user: action.payload,
                error:null

            }
        }
        case (AUTH_START): {
            return {
                ...state,
                isLoggedIn:false,
                user: '',
                error:null

            }
        }
        case (AUTH_ERROR): {
            return {
                ...state,
                user:'',
                error:action.payload,
                isLoggedIn:false
            }
        }
        case (LOGOUT): {
            return {
                ...state,
                isLoggedIn:false,
                user:'',
                error:null
            }
        }

        default:
            return state
    }
}

export default authReducer