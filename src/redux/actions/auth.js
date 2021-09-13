import { AUTH_SUCCESS, AUTH_ERROR, LOGOUT, AUTH_START } from "../types"

const authSuccess = (user) =>  {
    return {
        type:AUTH_SUCCESS,
        payload:user
    }
}
const authError = (error) => {
    return {
        type:AUTH_ERROR,
        payload:error
    }
}
const authStart = () => {
    return {
        type:AUTH_START,
    }
}
export const auth =  (name,password) => {
    return async dispatch => {
        try {
            dispatch(authStart())
            const {users}  = await fetch('db.json',{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }}).then((response) => response.json())
            const user = users.find(user => user.name===name)
            if (!user) {
                dispatch(authError({name:'Пользователь не найден'}))
            } else if (user.password!==password) {
                dispatch(authError({password:'Неверный пароль'}))
            } else {
                localStorage.setItem('user',user.name)
                localStorage.setItem('contacts',user.contacts)
                dispatch(authSuccess(name))
            }
        }
        catch (e) {
            dispatch(authError({name:e.message}))
        }
    }
}

export const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('contacts')
    return {
        type:LOGOUT
    }
}

export const autoAuth = () => {
    return dispatch => {
    const user = localStorage.getItem('user')
    if (!user) dispatch(logout())
        else dispatch(authSuccess(user))
    }
}