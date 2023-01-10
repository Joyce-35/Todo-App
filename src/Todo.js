import React from 'react';
import './App.css';

const Todo = (props) => {
    const handleDelete = (e) => {
        e.preventDefault()
        props.DeleteUser(props.userInfo.id)
    }

    return (
        <>
            <div className="list">
                <div className="item">
                    <h6>{props.userInfo.number}</h6>
                </div>
                <div className="item">
                    <h6>{props.userInfo.date}</h6>
                </div>
                <div className="item">
                    <h6>{props.userInfo.time}</h6>
                </div>
                <div className="item">
                    <h6>{props.userInfo.name}</h6>
                </div>
               

            </div>
            <div className="delete-all" onClick={handleDelete}>Delete</div>

        </>
    );
}

export default Todo;
