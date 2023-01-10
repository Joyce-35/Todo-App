import React, { Component } from 'react';
import './App.css';
import { Form, } from "react-bootstrap";

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
              number: "",
              name: "",
              date: "",
              time:""
        }
    
    
      }
      handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state)
        this.setState({
            number: "",
            name: "",
            date: "",
            time:"",
        })
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <div className='container'>
               <Form onSubmit={this.handleSubmit} className='form'>
               <Form.Group className="mb-2">
                    <Form.Label>Number of Task</Form.Label>
                    <Form.Control type="number" placeholder="S/N" name='number' value={this.state.number} onChange={this.handleChange} />
                </Form.Group>
               
                <Form.Group className="mb-2">
                    <Form.Label>Date of Task</Form.Label>
                    <Form.Control type="date" placeholder="Enter Date" name='date' value={this.state.date} onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Time</Form.Label>
                    <Form.Control type="time" placeholder="time" name='time' value={this.state.time} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Name of Task</Form.Label>
                    <Form.Control type="text" placeholder="Enter Task" name='name' value={this.state.name} onChange={this.handleChange}/>
                </Form.Group>
                <button className='add' type="submit">
                    Submit
                </button>
            </Form>
            </div>
            </div>
        );
    }
}

export default TodoList;
