import {SET_TYPING_VALUE,SEND_MESSAGE,EDIT_CHAT} from '../actions/constants/action-types.js';

const typing=(state='',action)=>{

    switch(action.type){
        case SET_TYPING_VALUE:
            return action.payload;
        case SEND_MESSAGE:
            return '';
        case EDIT_CHAT:
            return action.payload.text;
        default:
            return state;
    }
     
};

export default typing;