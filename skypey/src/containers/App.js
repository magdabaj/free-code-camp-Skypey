import React from 'react';
import './App.css';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import store from '../redux/store';
import _ from 'lodash';

const App = () => {
    const {contacts} = store.getState().contacts;
    const {user} = store.getState();
    const {activeUserId} = store.getState();
    return (
        <div className="App">
            <Sidebar contacts={_.values(contacts)}/>
            <Main user={user} activeUserId={activeUserId}/>
        </div>
    )
};

export default App;