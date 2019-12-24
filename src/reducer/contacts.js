import {contacts} from '../static-data';
import {DELETE_CONTACT} from '../actions/constants/action-types';
import _ from "lodash";

 export default (state=contacts, action) =>   {
     switch(action.type){
         case DELETE_CONTACT:              
            const state_cpy = _.cloneDeep(state);
            delete state_cpy[action.payload];
            return state_cpy;
         default:
             return state;
        }
      
    };

 