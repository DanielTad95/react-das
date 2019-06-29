import React from 'react';
import './App.css';

class App extends React.Component{
  state = {
    coutry:"armenia"
  }
  constructor(props){
    super(props);
    console.log("constructor")
  }

  componentDidMount(){
    console.log("componentDidMount")
  }

  static getDerivedStateFromProps(){
    console.log("getDerivedStateFromProps");
    return null;
  }
  render() {
    console.log("render")
    return (
      <div>
        hello world
      </div>  
    )
  }
}

export default App;

 