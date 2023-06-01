import React from 'react';
import './App.css';
import ClassComp from './ClassComp';
import FuncComp from './FuncComp';

class App extends React.Component {
  constructor(){
    super();
      this.state={
        functionClick: false,
        classClick: false
   }
  }
  render(){
  return (
    <div className="App">
      <h1 className="box">Styling using Functional and Class Component</h1>
      <button type="button" onClick={()=>this.setState({functionClick:!this.state.functionClick})}>To See Styling in functional component</button>
      <button type="button" onClick={()=>this.setState({classClick:!this.state.classClick})}>To See Styling in class component</button>

      {this.state.functionClick && <FuncComp />}
      {this.state.classClick && <ClassComp />}
    </div>
  );
}
}


export default App;
