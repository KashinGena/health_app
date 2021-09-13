import React from 'react';
import './Login.scss'
import { useSelector } from 'react-redux';
import { validate } from '../../helpers/validation';

const Login = ({onCancel,onSubmit}) => {
    const [name,setName]=React.useState('')
    const [password,setPassword]=React.useState('')
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    React.useEffect(() => {
        if (isLoggedIn) onCancel()
    },[isLoggedIn])

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const error = validate(name,password)
        if (error) alert(error)
            else onSubmit(name,password)
    }

    return (
        <div className="auth__overlay">
            <div className="auth__inner">
                <form className="auth__form">
                    <legend className="auth__title">Авторизация</legend>
                    <input type='text'
                        className="auth__form-input" 
                        value={name}
                        placeholder="Логин" 
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input type='password'
                        className="auth__form-input" 
                        value={password} 
                        placeholder="Пароль" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="auth__btn-container">
                        <button onClick={onSubmitHandler}
                                className="auth__login-btn main-btn btn-login"
                        >
                            Войти
                        </button>
                        <button onClick={onCancel}
                                className="auth__cancel-btn main-btn btn-second"
                        >
                            Назад
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Login;