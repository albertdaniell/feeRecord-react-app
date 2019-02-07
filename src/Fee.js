import React, { Component } from 'react';

import './App.css';

class Fee extends Component {

    
  render() {

    const {feedata} = this.props;
    const totalfee=40000;

    const feedataList = feedata.map( fee =>{
return(



    <tr>
        <td>{fee.id}</td>
        <td>{fee.gender}</td>
        <td>{fee.student}</td>
        <td>{fee.fee}</td>
    </tr>

);
    })
    return (
      <div className="FeeApp">
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Sid</th>
      <th scope="col">Gender</th>
      <th scope="col">Student name</th>
      <th scope="col">Fee</th>
    
    </tr>
  </thead>
  <tbody>
  {feedataList}
  </tbody>

  </table>
      
      </div>
    );
  }
}

export default Fee;
