import React from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import Main from '../Components/Main/Main'; 
import './App.css';
import {store} from '../store';
import _ from 'lodash';

class App extends React.Component{
    
  render (){ 
    const {contacts, activeUserID, user}=store.getState();
    return (
    <div className='App'>
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserID={activeUserID}/>
    </div>
      
  );
  }
}

export default App;
