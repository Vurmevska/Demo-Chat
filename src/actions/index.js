import {SET_ACTIVE_USER_ID, SET_TYPING_VALUE, SEND_MESSAGE, DELETE_CHAT, EDIT_CHAT} from './constants/action-types.js';
import {DELETE_CONTACT} from './constants/action-types.js';
 

export const setActiveUserId=(id)=>{
    return {
        type: SET_ACTIVE_USER_ID,
        payload: id
    };
};

export const deleteContact=(id)=>{
    return {
        type: DELETE_CONTACT,
        payload: id
    };

};

export const setMessageValue=(input_value)=>{
    return{
        type: SET_TYPING_VALUE,
        payload: input_value
    };
};

export const sendMessage=(message,activeUserID,activeChatID)=>{
    return{
        type: SEND_MESSAGE,
        payload: { 
            message,
            activeUserID,
            activeChatID
        }
    };
};

export const deleteChat = (number, activeUserID) => {
    return {
        type: DELETE_CHAT,
        payload: {
        number,
        activeUserID
        }
    };
};
  
export const editChat = (number, activeUserID, text) =>{
    return {
        type: EDIT_CHAT,
        payload: {
            number,
            activeUserID,
            text
        }
    };
};



 
