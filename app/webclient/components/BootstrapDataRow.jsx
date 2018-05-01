import React from 'react';

export default class BootstrapDataRow extends React.Component{

    render(){
// console.log('tx'+ this.props.data.tx);
        return(
            <tr className="w3-animate-left">
                <td >
                    {this.props.data.tx.substring(0,16)}
                    </td>
                    <td>
                    {this.props.i+8}
                    </td>
                    <td>
                    {this.props.data.name + this.props.data.lastName}
                    </td>
                    <td>
                    {this.props.data.agency}
                    </td>
                </tr>
        )
    }
}