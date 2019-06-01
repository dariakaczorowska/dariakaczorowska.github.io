import React, {Component} from "react";
import './App.css';
import UsersList from "./UsersList";

class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: ''
        }
    }

onInputChange = (event) => {
    this.setState({ userName: event.target.value });
    console.log(event.target.value);
}


render() {
        return( 
<div>   
<h2>User's List</h2>              
<form>
<input value={this.state.userName} 
onChange={this.onInputChange}
 type='text' name='fname' placeholder='Enter Name'></input><button>Add user</button>  
</form>

<UsersList />

</div>
        ) 
    }
}
export default Users;