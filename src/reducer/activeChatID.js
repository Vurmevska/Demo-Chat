import { EDIT_CHAT,SEND_MESSAGE } from '../actions/constants/action-types';

const activeChatID=(state = null, action)=>{
  switch (action.type) {
    case EDIT_CHAT:
      return action.payload.number;
    case SEND_MESSAGE:
      return null;  
    default:
      return state;
    }
}
  

export default activeChatID;