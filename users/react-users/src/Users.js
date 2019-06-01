import React, {Component} from "react";
import './App.css';
import UsersList from "./UsersList";

class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            users: []
        }
    }

addNewUser = () => {
    let user = {
        name: this.state.userName,
        id: Date.now()
    };
        this.setState(prevState => {
            return ({
                users: prevState.users.concat(this.state.userName),
                userName: '',
            })
    });
    }

onInputChange = (event) => {
    this.setState({ userName: event.target.value });
    
}

removeUser = (id,name) => {
    let users = this.state.users;
    users = users.filter(currentUser => {
        if (currentUser.id !== id) return currentUser;
    });

    this.setState({users});
}

render() {

 return( 
<div>   
<h2>User's List</h2>              

<input value={this.state.userName} 
onChange={this.onInputChange}
 type='text' name='fname' placeholder='Enter Name'></input>
 <button onClick={this.addNewUser}>Add user</button>  
 <UsersList users={this.state.users}
 removeUser={this.removeUser}/>


</div>
        ) 
    }
}
export default Users;