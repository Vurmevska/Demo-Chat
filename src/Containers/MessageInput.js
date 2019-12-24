import React from 'react';
import {setMessageValue, sendMessage} from '../actions/index';
import {store} from '../store/index';
import './MessageInput.css';
 

const MessageInput=({value})=>{

    const state = store.getState();

    const handleChange=(e)=>{     
        store.dispatch(setMessageValue(e.target.value));
    }

    const handleSubmit=(e)=>{

        e.preventDefault();
        const {activeUserID, typing, activeChatID} = state;
        store.dispatch(sendMessage(typing,activeUserID,activeChatID));       
      
 
    }

    return (
        <form className='Message' onSubmit={handleSubmit}>
            <input
            className='Message__input'
            placeholder='Enter your message'
            value={value}
            onChange={handleChange}            
            />  
        
        </form>
        
    );
}

 
export default MessageInput;