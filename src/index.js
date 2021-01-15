import React from 'react'
import ReactDom from 'react-dom'

/*** 
 *  The name of the function needs to start 
 *  with a capital letter to be a component 
***/
function Greeting(){
  return <h4>This is my first component</h4>;
}

ReactDom.render(<Greeting/>,document.getElementById('root'));
