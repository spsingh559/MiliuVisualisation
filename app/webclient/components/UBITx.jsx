import React from 'react';
import UBIDataRow from './UBIDataRow';
import {Table} from 'react-bootstrap';

export default class UBITx extends React.Component{

    render(){

        let newData=this.props.submitData.map((data,i)=>{
            return(
            <UBIDataRow
            key={i}
            data={data}
            />
            )
        })

        return(
            <Table striped  condensed hover style={{bottom:"0", position:"absolute"}}>
  <tbody>
      {newData}
      </tbody>
      </Table>
            
        )
    }
}