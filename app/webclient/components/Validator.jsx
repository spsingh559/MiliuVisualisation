import React from 'react';
import ValidatorRow from './UBIDataRow';
import {Table} from 'react-bootstrap';

export default class UBITx extends React.Component{

    render(){

        let newData=this.props.validatorData.map((data,i)=>{
            return(
            <ValidatorRow
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