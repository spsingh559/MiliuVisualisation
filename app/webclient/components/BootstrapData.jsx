import React from 'react';
import {Table} from 'react-bootstrap';
import BootstrapDataRow from './BootstrapDataRow';

export default class BootstrapData extends React.Component{

    render(){
        let newData=this.props.txData.map((data,i)=>{
            return(
            <BootstrapDataRow
            key={i}
            data={data}
            />
            )
        })

        return(
            <Table striped  condensed hover>
  <thead>
    <tr>
      <th>Tx</th>
      <th>Block</th>
      <th>User</th>
      <th>KYC Agency</th>
    </tr>
  </thead>
  <tbody>
      {newData}
      </tbody>
      </Table>
            
        )
    }
}