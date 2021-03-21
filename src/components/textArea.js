import React, {Component} from "react";
class TextArea extends Component{
    constructor(props) {
        super(props);
        this.state = {
            login: 'null',
            password : "null"
          };
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick = function(){
        this.setState({
            login: document.getElementById('login-text').value,
            password:  document.getElementById('password-text').value
          });

          console.log(this.state)
      }
    render(){
        return(
            <input className ='textArea' id={this.props.id} placeholder={this.props.placeholder} type={this.props.type} onChange={this.handleClick}>
            </input>
           
        )     
    }
   
   
}

export default TextArea;