import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header/Header'
import {autoAuth, logout, auth} from '../../redux/actions/auth'
import MainGreeting from '../../components/MainGreeting/MainGreeting';
import Login from '../Login/Login'

const MainContainer = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector( state => state.auth.isLoggedIn)
    const name = useSelector (state => state.auth.name)
    const [isModalOpened,setModalOpen]= React.useState(false)
    React.useEffect(() =>{
        dispatch(autoAuth())
    },[])

    
    const onSubmitHandler = (name,password) => {
        dispatch(auth(name,password));
    }

    const onLoginClickHandler = () => {
        console.log(isLoggedIn);
        
        if (isLoggedIn) dispatch(logout())
            else setModalOpen(true)
        console.log(isModalOpened);
        
    }
    return (
        <div>
            <Header name={name}
                    onLoginClick={onLoginClickHandler}
                    isLoggedIn={isLoggedIn}
            />
            {!isLoggedIn?<MainGreeting/>:null}
            {isModalOpened?
                <Login onSubmit={onSubmitHandler}
                       onCancel={() => setModalOpen(false)}
                />
                :null
            }
        </div>
    );
};

export default MainContainer;