import {getMessages} from "../static-data";
import {SEND_MESSAGE,DELETE_CHAT} from '../actions/constants/action-types';
import _ from 'lodash';

const messages=(state=getMessages(10),action)=>{

    switch(action.type){
        case SEND_MESSAGE:

            const { message, activeUserID, activeChatID } = action.payload;             
            const allUserMsgs = state[activeUserID];
            const number = activeChatID || +_.keys(allUserMsgs).pop() + 1;

            return {
                ...state,
                [activeUserID]: {
                ...allUserMsgs,
                [number]: {
                    number,
                    text: activeChatID ? message.concat(" (edited)") : message,
                    is_user_msg: true
                }}
            };

        case DELETE_CHAT:

            const messageID = action.payload.number;
            
            const UserID = action.payload.activeUserID;

            return {
                ...state,
                [UserID]: _.omit(state[UserID], messageID)
            };               
                
                
        default:
            return state;
    }
   
}

export default messages;