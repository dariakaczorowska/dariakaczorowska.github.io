import React, {Component} from "react";

const UsersList = (props) => {

    return (
        <ul>
            {props.users.map(currentUser => 
            <li key={currentUser.id} onClick={() => props.removeUser(currentUser.id, currentUser.name)}>{currentUser}</li>
                )}
        </ul>
    )
}

export default UsersList;


