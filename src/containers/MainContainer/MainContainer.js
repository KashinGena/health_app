import React from 'react';
import  './MainContainer.scss'
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header/Header'
import {autoAuth, logout, auth} from '../../redux/actions/auth'
import MainGreeting from '../../components/MainGreeting/MainGreeting';
import Login from '../Login/Login'
import PrivateOffice from '../../containers/PrivateOffice/PrivateOffice'

const MainContainer = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector( state => state.auth.isLoggedIn)
    const user = useSelector (state => state.auth.user)
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
            <Header name={user}
                    onLoginClick={onLoginClickHandler}
                    isLoggedIn={isLoggedIn}
            />
            <div className="main">
                {!isLoggedIn?<MainGreeting/>:<PrivateOffice user={user}/>}
            </div>
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