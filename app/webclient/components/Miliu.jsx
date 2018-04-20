import React from 'react';
import UBIDataRow from './UBIDataRow';
import {Table} from 'react-bootstrap';
import MiliuDataRow from './MiliuDataRow';

export default class Miliu extends React.Component{

    render(){

        let newData=this.props.miliuData.map((data,i)=>{
            return(
            <MiliuDataRow
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