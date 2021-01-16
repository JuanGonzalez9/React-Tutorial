import React from 'react'
import ReactDom from 'react-dom'

/*** 
 *  The name of the function needs to start 
 *  with a capital letter to be a component 
***/
function Greeting(){
  return( 
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>Juan Gonzalez</h2>;
const Message = () => <h4>This is my message</h4>

ReactDom.render(<Greeting/>,document.getElementById('root'));
