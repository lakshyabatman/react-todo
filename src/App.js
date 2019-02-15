import React, { Component } from 'react';
import Todolist from './includes/Todolist';
import Form from './includes/Form';

class App extends Component {
  constructor(props){
    super(props);
    console.log("Constructor is working");
  }
  state={
    todos:[
      {
        todo:"Create React App",
        id:0
      },
      {
        todo:"GO DIE",
        id:1
      }
    ]
  }

  componentWillMount(){
    console.log('[App.js] Component Will Mount');
  }
  

  deleteTodo= (selectedid)=>{
    var newTodo=this.state.todos.filter((todo)=>{
      return selectedid!=todo.id;
    });
    console.log(newTodo);
    this.setState({
      todos:newTodo,
    })
  }

  addnewTodo =(todo)=>{
    if(todo.length>0){
      var todoObj={
        id: Math.random()*10,
        todo:todo,
      }
      var newTodo=[...this.state.todos,todoObj];
      console.log(newTodo)
      this.setState({
        todos:newTodo,
      });
    }
    else{
      alert("Tod0 cannot be empty");
    }
  }

  render() {
    return (
     <div >
          <div className="jumbotron display-4 d-flex justify-content-center">React Todo</div>
          <div className="container d-flex justify-content-center flex-column w-25">
          {this.state.todos.map(todo=>{
            return <Todolist delete={this.deleteTodo} index={todo.id} todo={todo.todo}/>
          })}
          <Form click={this.addnewTodo}/>

          </div>
          
      </div>
     // <Todolist index={this.state.todos[0].id} todo={this.state.todos[0].todo}/>
    );
  }
}

export default App;
