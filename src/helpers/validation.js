export const validate = (name,password) => {
    if (name.length===0)
        return 'Имя не может быть пустым'
    if (password.length===0)
        return 'Пароль не может быть пустым'
    if (password.length<8)
        return 'Пароль должен состоять минимум из 8 символов'
}