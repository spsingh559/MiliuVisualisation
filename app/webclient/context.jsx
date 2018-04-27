import React from 'react';
// import restUrl from './restUrl';


export default class ContextComponent extends React.Component {
  getChildContext() {
    return {
      socket:io('http://13.125.219.101:4000'),
      socket1:io('http://13.125.219.101:5000'),
      socket2:io('http://13.125.219.101:6000')
 

    }
  }

  render(){
    return (this.props.children);
  }
} 

ContextComponent.childContextTypes = {
  socket: React.PropTypes.object.isRequired,
  socket1: React.PropTypes.object.isRequired,
  socket2: React.PropTypes.object.isRequired

};
