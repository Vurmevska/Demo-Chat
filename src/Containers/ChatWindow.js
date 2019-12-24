import React from 'react';
import {store} from '../store/index.js';
import {Header} from '../Components/Header/Header.js';
import {Chats} from '../Components/Chats/Chats.js';
import _ from "lodash";
import MessageInput from './MessageInput';


const ChatWindow=({activeUserID})=>{

    const state=store.getState();
    const activeUser=state.contacts[activeUserID];
    const activeMsg=state.messages[activeUserID];
    const typing=state.typing;
    
    return (
        <div className='ChatWindow'>
           <Header user={activeUser}/>
           <Chats messages={_.values(activeMsg)}/>
           <MessageInput value={typing}/>
        </div>
    );
};

export default ChatWindow;