import React, {Component} from "react";
import TextArea from '../components/textArea'
import TableComponent from '../components/tableComponent'
import data from '../data/data'
import {connect} from 'react-redux'
import btnAction from '../actions/loginButtonAction'
import { bindActionCreators } from "redux";
import isClickedReducer from '../reducers/isClickedReducer'
class LoginButton extends Component{
    
    render(){
        if(this.props.click.clickState === false){
            return(
                <div className="App">
      
                <div id='login-wrapper'>
                  <h1>LOGIN</h1>
                  <TextArea id='login-text' type='text' placeholder='Enter login ID'/>
                  <br />
                  <TextArea id='password-text' type='password' placeholder='Enter your password' />
                  <br />
                  
                  <button onClick={()=>{this.props.btnAction(isClickedReducer)}} type="submit">LOGIN</button>
                </div>
                
                </div>
                  
                  
              )
        }
       

        return(
          <div className="App">
            <h1>Hello</h1>
            <TableComponent  data = {data} col = {Object.keys(data[0]).length}></TableComponent>
          </div>
        )
    }
   
}
function mapStateToProps(state) {
    return{
        click : state.isClickedReducer
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        btnAction:btnAction
    },dispatch)
}

// export default LoginButton;
export default connect(mapStateToProps, matchDispatchToProps)(LoginButton)