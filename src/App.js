import React, { Component } from 'react';
import TodoList from './TodoList'
import 'bootstrap/dist/css/bootstrap.min.css';
import Todos from './Todos';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: [
        {
          number: "",
          name: "",
          date: "",
          time:"",
          id: "dvj47y4b78"
        },
      ]
    }


  }
  addNewUser=(user)=>{
    user.id = Math.random().toString()
      this.setState({
        users: [...this.state.users, user]
      })
  }
  DeleteUser=(id)=>{
    let undeletedUsers =this.state.users.filter(user=>user.id !== id)
    this.setState({
      users: undeletedUsers
    })
}

  render() {
    return (
      <>
        <div className='all'>
          <h1>TODO LIST</h1>
          <TodoList addUser ={this.addNewUser}/>
        </div>
        <div className='todo'>
        <div className="grid-container">
          <div className="grid-item">
            <h5>S/N</h5>
          </div>
          <div className="grid-item">
            <h5>Date</h5>
          </div>
          <div className="grid-item">
            <h5>time</h5>
          </div>
          <div className="grid-item">
            <h5>Task</h5>
          </div>

         
        </div>
          <Todos  userData ={this.state.users} DeleteUser={this.DeleteUser} />
        </div>


      </>
    );
  }
}

export default App;
