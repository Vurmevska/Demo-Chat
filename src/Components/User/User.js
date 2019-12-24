import React from 'react';
import './User.css';
import {setActiveUserId, deleteContact} from '../../actions/index.js';
import {store} from '../../store/index.js';

function handleUserClick({user_id}){
    
    store.dispatch(setActiveUserId(user_id));
}

function handleDeleteClick(e,{user_id}){

    e.stopPropagation();
    store.dispatch(deleteContact(user_id)); 
    store.dispatch(setActiveUserId(null));
     
}

export const User = ({user})=>{

    const {name,profile_pic,status}=user;

    return(
        <div className='User' onClick={handleUserClick.bind(null,user)}>
            <span className="User__closeIcon" onClick={(e)=>handleDeleteClick(e,user)}>X</span> 
                      
            <img src={profile_pic} alt={name} className="User__pic"/>

                <div className='User_details'>                    
                    <p className='User_details-name'>{name}</p>
                    <p className='User_details-status'>{status}</p>
                </div>
        
        </div>
    );
}