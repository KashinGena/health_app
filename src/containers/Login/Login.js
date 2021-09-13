import React from 'react';
import './Login.scss'
import { useSelector } from 'react-redux';
import { validate } from '../../helpers/validation';
import Input from '../../components/Input/Input';

const Login = ({onCancel,onSubmit}) => {
    const [name,setName]=React.useState({touched:false,value:''})
    const [password,setPassword]=React.useState({touched:false,value:''})
    const [errors,setErrors]=React.useState({})
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const error = useSelector(state => state.auth.error)

    React.useEffect(() => {
        
        
        if (isLoggedIn) {
            console.log('asdf');
            onCancel()
        }
    },[isLoggedIn])

    React.useEffect(() => {
        console.log('уккщк');
        if (error) setErrors(error)
    },[error])

    const onSubmitHandler =  (e) => {
        e.preventDefault()
        setName({...name,touched:true})
        setPassword({...password,touched:true})
        const error = validate(name.value,password.value);
        setErrors(validate(name.value,password.value))
        if (Object.keys(error).length===0) {
            console.log(errors);
            onSubmit(name.value,password.value)
        } else {
            setErrors(error)
        }
        
    }

    return (
        <div className="auth__overlay">
            <div className="auth__inner">
                <form className="auth__form">
                    <legend className="auth__title">Авторизация</legend>
                    <Input type='text'
                        touched={name.touched}
                        error={errors.name}
                        value={name.value} 
                        placeholder="Логин" 
                        onChange={(e) => setName({touched:false,value:e.target.value})}
                    />
                    <Input type='password'
                        touched={password.touched}
                        error={errors.password}
                        value={password.value} 
                        placeholder="Пароль" 
                        onChange={(e) => setPassword({touched:false,value:e.target.value})}
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