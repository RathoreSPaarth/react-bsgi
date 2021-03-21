import React, {Component} from "react";
class TableComponent extends Component{
    render(){
        return(
            <div id='table-wrapper'>
                 <table>
               <tr>
                   {
                        Object.keys(this.props.data[0]).map((element)=>{
                            return(
                                <TableHeader content={element}></TableHeader>
                            )
                        
                       })
                   }
                  
               </tr>

               
                   {
                        this.props.data.map((element)=>{
                            return(
                                <tr>
                                    <TableBody td={element.name}></TableBody>
                                    <TableBody td={element.age}></TableBody>
                                    <TableBody td={element.color}></TableBody>
                                </tr>
                                
                            )
                        })
                       
                   }
                  
               

            </table>
            </div>
           
        )     
    }
   
   
}

const TableHeader = function(props){
    return(
        <th>{props.content}</th>
    )
}

const TableBody = function(props){
    return(

             <td>
          {props.td}
      </td>
    
     
    )
}

export default TableComponent;