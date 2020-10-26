
import React, { Component } from 'react';
import './App.css';
import PaginationAssign from "./PaginationAssign/PaginationAssign"
class App extends Component {
  state = {
    students :[{rollno:"1",name:"A",emailid:"abc@gmail.com"},{rollno:"2",name:"B",emailid:"c@gmail.com"},{rollno:"3",name:"C",emailid:"ac@gmail.com"},{rollno:"4",name:"D",emailid:"bc@gmail.com"},
    {rollno:"5",name:"A1",emailid:"abc@gmail.com"},{rollno:"6",name:"B1",emailid:"a@gmail.com"},{rollno:"7",name:"C1",emailid:"a@gmail.com"},{rollno:"8",name:"D1",emailid:"a@gmail.com"},
    {rollno:"9",name:"A2",emailid:"abc@gmail.com"},{rollno:"10",name:"B2",emailid:"abc@gmail.com"},{rollno:"11",name:"C2",emailid:"abc@gmail.com"},{rollno:"12",name:"D2",emailid:"abc@gmail.com"},
    {rollno:"13",name:"A2",emailid:"abc@gmail.com"},{rollno:"14",name:"B3",emailid:"ab@gmail.com"},{rollno:"15",name:"C3",emailid:"ab@gmail.com"},{rollno:"16",name:"D3",emailid:"ab@gmail.com"}
    ]
  }
  
  render() {
    return (
      <div className="App">
        <PaginationAssign  students={this.state.students} />
      </div>
    );
  }
}

export default App;
