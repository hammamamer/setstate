import React, { Component } from 'react';


class App extends Component {
   state={number:'',factorial:''}
   
 
  render() { return (
   <div>
    <button onClick={()=>this.setState({number:0,factorial:0*0})}>0</button>
    <button onClick={()=>this.setState({number:1,factorial:1*1})}>1</button>
    <button onClick={()=>this.setState({number:2,factorial:2*2})}>2</button>
    <button onClick={()=>this.setState({number:3,factorial:3*3})}>3</button>
    <button onClick={()=>this.setState({number:4,factorial:4*4})}>4</button>
    <button onClick={()=>this.setState({number:5,factorial:5*5})}>5</button>
    <button onClick={()=>this.setState({number:6,factorial:6*6})}>6</button>
    <button onClick={()=>this.setState({number:7,factorial:7*7})}>7</button>
    <button onClick={()=>this.setState({number:8,factorial:8*8})}>8</button>
    <button onClick={()=>this.setState({number:9,factorial:9*9})}>9</button>
    <h1>The factorial of {this.state.number} is {this.state.factorial}</h1>


    
</div>
   ); }
}
export default App;


