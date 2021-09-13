export const validate = (name,password) => {
    const error = {}
    if (name.length===0)
        error.name= 'Имя не может быть пустым'
    if (password.length===0)
        error.password = 'Пароль не может быть пустым'
    else if (password.length<8)
        error.password = 'Пароль должен состоять минимум из 8 символов'
    return error
}
