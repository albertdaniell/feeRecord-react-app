import React, { Component } from 'react';

import './App.css';

import Fee from './Fee';

class App extends Component {

  state={
    name:'Albert agoya',
    

    myfeedata:[

      {
        student:"Mary anna",id:1,fee:3000,gender:"Female",balance:''
      },
      {
        student:"Gudilla ",id:2,fee:4500,gender:"Female",balance:''
      },
      {
        student:"Marie joy",id:3,fee:3800,gender:"Female",balance:''
      },
      {
        student:"Constantine",id:4,fee:10000,gender:"Male",balance:''
      },
      {
        student:"Ruth Agoya",id:5,fee:1000,gender:"Female",balance:''
      },
      {
        student:"Anisa Kartel",id:6,fee:39000,gender:"Female",balance:''
      },
      {
        student:"Daniel Agoya",id:8,fee:9000,gender:"Male",balance:''
      }
    ]

  }
  render() {
    
    return (
      <div className="App">
       <div className="container">
         <h1 className="text-center">School management fee payment</h1>
         <hr/>

         <h3>Total fee to be paid is 40,000</h3>

         <Fee feedata={this.state.myfeedata}/>
       </div>
      </div>
    );
  }
}

export default App;
