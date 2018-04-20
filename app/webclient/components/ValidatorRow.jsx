import React from 'react';

export default class ValidatorRow extends React.Component{

    render(){

        return(
            <tr>
                <td>
                    {this.props.data.tx}
                    </td>
                    <td>
                    {this.props.data.block}
                    </td>
                    <td>
                    {this.props.data.msg}
                    </td>
                </tr>
        )
    }
}