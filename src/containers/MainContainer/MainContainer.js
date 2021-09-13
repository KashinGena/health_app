import React from 'react';
import  './MainContainer.scss'
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header/Header'
import {autoAuth, logout, auth} from '../../redux/actions/auth'
import Login from '../Login/Login'
import Contacts from '../../components/Contacts/Contacts';
import PrivateOffice from '../../components/PrivateOffice/PrivateOffice';
import MainGreeting from '../../components/MainGreeting/MainGreeting';
import { Route, Switch, Redirect } from 'react-router-dom';

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
        if (isLoggedIn) dispatch(logout())
            else setModalOpen(true)
    }
    return (
        <div>
            <Header onLoginClick={onLoginClickHandler}
                    isLoggedIn={isLoggedIn}
            />
            <div className="main">
                <Switch>
                    <Route exact path="/">
                        {isLoggedIn?
                            <PrivateOffice user={user}
                                            onLogout={onLoginClickHandler}
                            />
                        :
                        <MainGreeting
                            onLogin={onLoginClickHandler}
                        />}
                    </Route>
                    <Route exact path='/contacts'>
                        {isLoggedIn?<Contacts/>:<Redirect to="/"/>}
                    </Route>
                </Switch>
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