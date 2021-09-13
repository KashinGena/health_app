import { AUTH_SUCCESS, AUTH_ERROR, LOGOUT } from "../types"

const initialState = {
    isLoggedIn:false,
    error:'',
    user:''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case (AUTH_SUCCESS): {
            return {
                ...state,
                isLoggedIn:true,
                user: action.payload,
                error:''

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
                user:''
            }
        }

        default:
            return state
    }
}

export default authReducer