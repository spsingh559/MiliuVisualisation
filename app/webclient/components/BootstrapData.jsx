import React from 'react';
import {Table} from 'react-bootstrap';
import BootstrapDataRow from './BootstrapDataRow';

export default class BootstrapData extends React.Component{

    render(){
        let newData=this.props.txData.map((data,i)=>{
            // setTimeout(()=>{
                return(
                    <BootstrapDataRow
                    key={i}
                    data={data}
                    />
                    )
            //   },1000)
           
        })

        return(
            <Table striped  condensed hover>
  <thead>
    <tr>
      <th>Transaction Hash</th>
      <th>Block</th>
      <th>Identity Owner</th>
      <th>Identity Provider</th>
    </tr>
  </thead>
  <tbody>
      {newData}
      </tbody>
      </Table>
            
        )
    }
}