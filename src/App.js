import './App.css';
// import TextArea from './components/textArea'
// import TableComponent from './components/tableComponent'
// import data from './data/data'
import React, {Component} from "react";
// import isClickedReducer from './reducers/isClickedReducer';
import LoginButton from './containers/buttonContainer';

class App extends Component{
    render(){
      return(
        <LoginButton></LoginButton>
      )
    }
   
}


export default App;