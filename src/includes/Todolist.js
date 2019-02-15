import React from 'react';

const Todolist=(props)=>{
    


    return(
        <div  onClick={()=>{props.delete(props.index)}} className="card card-body ">
           <h4>{props.todo}</h4>
        </div>
    )

}


export default Todolist;