
import React from 'react';
import { Link } from 'react-router';
import Axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import {Grid} from 'react-bootstrap';
import {Grid,Row,Col,Carousel} from 'react-bootstrap';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import LinearProgress from 'material-ui/LinearProgress';

import BootstrapData from './BootstrapData';
import UBITx from './UBITx';
import Validator from './Validator';
import Miliu from './Miliu'
// import Paper from 'material-ui/Paper';



const style=
{
  row1col1:{
    height:"100px",
    width:"33%",
    backgroundColor:"#D4F6BB"
  
  },
  row1col2:{
    height:"100px",
    width:"33%",
    backgroundColor:"#F3F0D3"
   
  },
  row1col3:{
    height:"100px",
    width:"33%",
    backgroundColor:"#D8ECF7"
    
  },
  row2col1:{
    height:"150px",
    width:"33%",
    backgroundColor:"#D4F6BB",
    overflowY: "auto",
    overflowX: "hidden"
  },
  row2col2:{
    height:"150px",
    width:"33%",
    backgroundColor:"#F3F0D3",
    overflowY: "auto",overflowX: "hidden"
  },
  row2col3:{
    height:"150px",
    width:"33%",
    backgroundColor:"#D8ECF7",
    overflowY: "auto",overflowX: "hidden"
    
  },
  row3col1:{
    height:"250px",
    width:"33%",
    backgroundColor:"#D4F6BB"
  
  },
  row3col2:{
    height:"250px",
    width:"33%",
    backgroundColor:"#F3F0D3"
   
  },
  row3col3:{
    height:"250px",
    width:"33%",
    backgroundColor:"#D8ECF7"
    
  }
}


export default class Home extends React.Component {

  state={
    submitData:[],
    validatorData:[],
    miliuData:[],
    animating:false,
    txData:[],
    secondsElapsed: 0,
    seconds:16
    
  }


  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
      socket: React.PropTypes.object.isRequired,
      socket1: React.PropTypes.object.isRequired,
      socket2: React.PropTypes.object.isRequired
    }
  }


componentDidMount=()=>{

          this.context.socket.on('kycdatarequest',(msg)=>{
            console.log('---------------Socket Conected for kycdatarequest-----------------');

            // console.log(msg);
            var arr=msg.split(',');
            
            
            var obj={
              tx:arr[0].substring(0,8)+'...',
              block:this.state.seconds, 
              msg:arr[1]+ ' '+ arr[2]+' '+arr[3]
            }

            this.setState(prevState => ({
              seconds: prevState.seconds + 1
            }));
        
            let newData=[obj].concat(this.state.submitData);
            this.setState({submitData:newData});
            setTimeout(()=>{
              this.setState({validatorData:newData})
            },1500)
            setTimeout(()=>{
              this.setState({miliuData:newData}) 
            },3000)
            // console.log(msg);


          //  this.setState({txView:true});
          });
         
          var obj1;
          this.context.socket1.on('kycrequestapproval',(msg)=>{
            console.log('---------------Socket Conected for kycrequestapproval------------------');
            // console.log(msg);

            // alert('kycrequestapproval');
            var arr=msg.split(',');
             obj1={
              tx:arr[0].substring(0,8)+'...',
              block:this.state.seconds, 
              msg:arr[1]
            }
        
            let newData=[obj1].concat(this.state.validatorData);
            let newData1=[obj1].concat(this.state.submitData);
            let newData2=[obj1].concat(this.state.miliuData);
            this.setState({validatorData:newData});
            setTimeout(()=>{
              this.setState({submitData:newData1,miliuData:newData2});
            },1000)

            this.setState(prevState => ({
              seconds: prevState.seconds + 1
            }));
          });

          
          this.context.socket2.on('getKYC',(msg)=>{
            console.log('---------------------getKYC---------------');
            // console.log(msg);
            // alert('Get kyc data on 2');
            // var obj2={
            //   tx:"sdjh253761...",
            //   block:"Block 19",
            //   msg:"KYC Data"
            // }
        
            var arr=msg.split(',');
            var obj2={
              tx:arr[0].substring(0,8)+'...',
              block:this.state.seconds, 
              msg:arr[1]
            }

            let newData3=[obj2].concat(this.state.submitData);
            let newData4=[obj2].concat(this.state.miliuData);

            this.setState(prevState => ({
              seconds: prevState.seconds + 1
            }));

            setTimeout(()=>{
              this.setState({miliuData:newData4});
            },3000)   

            setTimeout(()=>{
              this.setState({submitData:newData3});
            },4000)
        
          
            // console.log(msg);

          });

            
         
  this.BootstrapData();
}



BootstrapData=()=>{
  console.log('-----------prepring bootstrap data-------------------------------');
  // this.intervalTrack = setInterval(() => this.tick(), 1000);
  Axios({ 
    method:'GET',
    url:'http://10.201.92.216:4000/userDataAPI',
    headers: {  
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjQ1OTY0MzksInVzZXJuYW1lIjoiVWJpYmFua1VzZXIiLCJvcmdOYW1lIjoidWJpYmFuayIsImlhdCI6MTUyNDU2MDQzOX0.QWofd0eunqXri8k2HoSd0BOpmvWbtyi5QGXiv5xtgbo'
    }
    })
    .then((data) => {
    console.log('get all the data');
    // console.log(data);
    
    
    if(data.data.length==0){
     alert('data is not available, check Mongo DB');
    }else{
      var i=0;
      var interval;
    //  console.log(data.data[0]);
      interval = setInterval(() =>{
        if(i==4){
          clearInterval(interval);
        }else{
          let newData=[data.data[i]].concat(this.state.txData);
        this.setState({txData:newData});
        i++}
      }, 1000);
    

      // var intervalId = setInterval({
      //   this.setState({txData:data.data[0]});
      // }, 1000);

      //   this.setState({txData:data.data[0]});
      // console.log('-----------length is more than zero-----------------')
      // sessionStorage.setItem('userLoginDetails',JSON.stringify(data.data));
    }
      // let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));

    })
    .catch((error) => {
    console.log(error);
    console.log(error+"error in get Trade");
    });
     

// var arr=[];

// let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));

// console.log('-----------retrieveduser detail-----------', retrievedUserDetails);
// console.log('data');

//   // this.intervalTrack = setInterval(() => this.tick(), 1000);
// // console.log('arr length-------', retrievedUserDetails.userData[0].length);
//   for(var i=0; i<retrievedUserDetails.userData.length;i++){
//     if(retrievedUserDetails.userData[i][0]=='Olivia'){
//     var objs={
//       tx:retrievedUserDetails.txData[i].substring(0,16)+'...',
//       block:i,
//       name:retrievedUserDetails.userData[i][0]+" "+ retrievedUserDetails.userData[i][1],
//       agency:retrievedUserDetails.userData[i][6]
//       }
//       arr.push(objs)
//       console.log(objs);   
//     }
    
//   }
  
//   this.setState({txData:arr});

//     console.log('-----------end bootstrap data-------------------------------');

}

  
  render() {
    
    // else{

  
      return (
        <div style={{marginTop:"65px"}}>
       <Row>
         <Col xs={3} style={style.row1col1}>
         <center>
         <Chip
          style={{marginTop:"20px"}}
         labelStyle={{fontSize:"24px"}}
        >
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUkLik3lK-KpdrGP9RQ0nq0XGI6NSd3pUcAkexU_PHrMgIocj" />
          Ubibank
        </Chip>
        </center>
         </Col>

         <Col xs={3} style={style.row1col2}>
  <center>
         <Chip
          labelStyle={{fontSize:"24px"}}
          style={{marginTop:"20px"}}
         >
           <Avatar src="data:image/png;base64,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" />
           Validator
         </Chip>
</center>
         </Col>

         <Col xs={3} style={style.row1col3}>
<center>
         <Chip
          style={{marginTop:"20px"}}
          labelStyle={{fontSize:"24px"}}
         >
           <Avatar src="../images/icon.png" />
           miliu
         </Chip>
         </center>
         </Col>
         </Row>

         <Row>
           <Col xs={12} style={{backgroundColor:"#5C5C5A"}}>
           <center>
             <p style={{fontSize:"24px", color:"white"}} onClick={this.OTPFunction}>
             Identity Request
             </p>
             </center>

           </Col>
           </Row>
           

           <Row>
           <Col xs={3} style={style.row2col1}>
           <UBITx submitData={this.state.submitData} />
        
         </Col>

         <Col xs={3} style={style.row2col2}>
         
        <Validator validatorData={this.state.validatorData}/>
         </Col>

         <Col xs={3} style={style.row2col3}>
        <Miliu miliuData ={this.state.miliuData} />
         </Col>
             </Row>

            <Row>
           <Col xs={12} style={{backgroundColor:"#5C5C5A"}}>
           <center>
             <p style={{fontSize:"24px", color:"white"}} onClick={this.submitForm}>
             Digital Identities
             </p>
             </center>

           </Col>
           </Row>

               <Row>
               <Col xs={3} style={style.row3col1}>
              
          <BootstrapData txData={this.state.txData} />
        </Col>

        <Col xs={3} style={style.row3col2}>
        <BootstrapData txData={this.state.txData} />
        </Col>

        <Col xs={3} style={style.row3col3}>
        <BootstrapData txData={this.state.txData} />
        </Col>
                 </Row>
       
          </div>
      )
    
    }
  }



