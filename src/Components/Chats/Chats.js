import React from 'react';
import './Chats.css';
import {editChat,deleteChat} from '../../actions';
import {store} from '../../store/index';

const HandleEditChat=(number,text)=>{
     const activeUserID=store.getState().activeUserID;
     store.dispatch(editChat(number,activeUserID,text));
};

const HandleDeleteChat=(number)=>{
    const activeUserID = store.getState().activeUserID;
    store.dispatch(deleteChat(number, activeUserID));
};

const Chat=({message,})=>{
    const {is_user_msg, text,number}=message;     

    return is_user_msg ? ( 
        <div className='Chat is-user-msg'
            onDoubleClick={HandleEditChat.bind(null,number,text)}

        >
            <span
            className='Chat__close' 
            onClick={HandleDeleteChat.bind(null,number)}       
            >
            X
            </span>
            {text}
        </div>) : (
            
            <span className='Chat'> {text} </span>

    );
        

    
};

export class Chats extends React.Component {
    constructor(props){
        super(props);
        this.chatsRef=React.createRef();
    }

    scrollToBottom(){
        this.chatsRef.current.scrollTop=this.chatsRef.current.scrollHeight;
    }

    componentDidMount(){
        this.scrollToBottom();
    }
    componentDidUpdate(){
        this.scrollToBottom();

    }

    render(){      
    
        return(
            <div className='Chats' ref={this.chatsRef}>
                {this.props.messages.map(message=>{
                    return <Chat  message={message} key={message.number}/>
                })}
            </div>
        );
    }
}

 
