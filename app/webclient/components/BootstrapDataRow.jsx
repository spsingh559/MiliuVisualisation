import React from 'react';

export default class BootstrapDataRow extends React.Component{

    render(){
console.log('tx'+ this.props.data.tx);
        return(
            <tr>
                <td >
                    {this.props.data.tx}
                    </td>
                    <td>
                    {this.props.data.block}
                    </td>
                    <td>
                    {this.props.data.name}
                    </td>
                    <td>
                    {this.props.data.agency}
                    </td>
                </tr>
        )
    }
}