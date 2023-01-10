import React from 'react';
import Todo from './Todo';

const Todos = (props) => {
    return (
        <div>
              {
                        props.userData.map((user)=>{
                            return    <Todo userInfo={user} key= {user.id} DeleteUser={props.DeleteUser}

                            />
                        })
                    }
           
        </div>
    );
}

export default Todos;
