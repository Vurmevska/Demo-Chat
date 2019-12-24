import './Empty.css';
import React from 'react';


const Empty=({user})=>{
    const {profile_pic, name, status}=user;
    const first_name=name.split(" ")[0];

    return (
        <div className='Empty'>
            <h1 className="Empty__name">Welcome, {first_name} </h1>

            <img src={profile_pic} alt={name} className="Empty__img" />

            <p className="Empty__status">
                <b>Status:</b> {status}
            </p>

            <p className="Empty__p">Start a conversation</p>

            <p className="Empty__info">
                Search for someone to start chatting with or go to Contacts
                to see who is available
            </p>
        
        </div>

    );

    

}

export default Empty;