import { AUTH_SUCCESS, AUTH_ERROR, LOGOUT } from "../types"

const authSuccess = (user) =>  {
    return {
        type:AUTH_SUCCESS,
        payload:user
    }
}
const authError = () => {
    return {
        type:AUTH_ERROR,
        error:'Пользователь не найден'
    }
}

export const auth =  (name,password) => {
    return async dispatch => {
        try {
            const {users}  = await fetch('db.json',{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }}) 
            .then((response) => response.json())
            
             const user = users.find(user => user.name===name && user.password ===password)
             if (user) {
                 localStorage.setItem('user',user.name)
                 localStorage.setItem('contacts',user.contacts)
                 dispatch(authSuccess(name))
             }


        }
        catch (e) {
            dispatch(authError())
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