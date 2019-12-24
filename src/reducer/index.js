import {combineReducers} from "redux";
import user from "./user";
import contacts from "./contacts";
import activeUserID from './activeUserId';
import messages from './messages';
import typing from './input_value';
import activeChatID from './activeChatID';

export const reducer=combineReducers({
  user,
  contacts,
  activeUserID,
  messages,
  typing,
  activeChatID
});