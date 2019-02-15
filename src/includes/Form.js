import React, {Component} from 'react';


class Form extends Component{

    state={
        input:"",
    }


    handleChange=(e)=>{
        this.setState(
            {
                input:e.target.value,
            }
        );

    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.click(this.state.input);
        this.setState({
            input:""
        })
        }
    render(){
        return(
            <div className="container mt-4">
                <form className="form-group row" onSubmit={this.handleSubmit}>
                <input className="form-control-lg col-sm-8" value={this.state.input} onChange={this.handleChange}  id="inputTodo"  type="text"/><input  className="col-sm-4 form-control-lg"  type="submit" value="Add"/>
                </form>
            </div>
        )
    }
}

export default Form;