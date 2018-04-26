
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

var obj = { userData:[
   [ 'Samantha',

      'Geller',

      '968590655',

      '6656087470',

      'blockchain.miliu@wipro.com',

      '03/02/2016',

      'Pacific-Gas-&-Electric' ],

    [ 'Samantha',

      'Geller',

      '968590655',

      '6656087470',

      'blockchain.miliu@wipro.com',

      '01/05/2018',

      'Miliu' ],

    [ 'Samantha',

      'Geller',

      '968590655',

      '6656087470',

      'blockchain.miliu@wipro.com',

      '15/10/2014',

      'Georgia-Natural-gas' ],

    [ 'Samantha',

      'Geller',

      '968590655',

      '6656087470',

      'blockchain.miliu@wipro.com',

      '12/11/2009',

      'Verizon' ],

    [ 'Nicholas',

      'Adams',

      '968590700',

      '6343454567',

      'blockchain.miliu@wipro.com',

     '13/08/2010',

      'Pacific-Gas-&-Electric' ],

    [ 'Nicholas',

      'Adams',

      '968590700',

      '6343454567',

      'blockchain.miliu@wipro.com',

      '20/07/2015',

      'Georgia-Natural-gas' ],

    [ 'Nicholas',

      'Adams',

      '968590700',

      '6343454567',

      'blockchain.miliu@wipro.com',

      '14/04/2014',

      'Verizon' ],

    [ 'Nicholas',

      'Adams',

      '968590700',

      '6343454567',

      'blockchain.miliu@wipro.com',

      '01/09/2016',

      'Miliu' ],

    [ 'Olivia',

      'Smith',

      '568590655',

      '3656087470',

      'blockchain.miliu@wipro.com',

      '28/01/2010',

      'Pacific-Gas-&-Electric' ],

    [ 'Olivia',

      'Smith',

      '568590655',

      '3656087470',

      'blockchain.miliu@wipro.com',

      '30/06/2015',

      'Verizon' ],

    [ 'Olivia',

      'Smith',

      '568590655',

      '3656087470',

      'blockchain.miliu@wipro.com',

      '16/01/2018',

      'Miliu' ],

    [ 'Olivia',

      'Smith',

      '568590655',

      '3656087470',

      'blockchain.miliu@wipro.com',

      '05/07/2014',

      'Georgia-Natural-gas' ],

    [ 'Michael',

      'West',

      '942038483',

      '6213874473',

      'blockchain.miliu@wipro.com',

      '30/01/2002',

      'Georgia-Natural-gas' ],

    [ 'Michael',

      'West',

      '942038483',

      '6213874473',

      'blockchain.miliu@wipro.com',

      '29/01/2001',

      'Verizon' ],

    [ 'Michael',

      'West',

      '942038483',

      '6213874473',

      'blockchain.miliu@wipro.com',

      '27/01/2017',

      'Pacific-Gas-&-Electric' ],

    [ 'Michael',

      'West',

      '942038483',

      '6213874473',

      'blockchain.miliu@wipro.com',

      '28/01/2017',

      'Miliu' ] ],

 txData:

  [ '577fadf370b02fd2bbcccb140a554d7991cb9b2080798a8db49cf8f6055919a6',

    '24cfa9eb5870087a60bfa5e209b0a4db4091d2dec05a34b8690adc9495b7d8d5',

    '61a6271f282f909ffe67d5dbb394c97a3d76825c4f3065159ef5422fc98c72b9',

    'b01be706fabb900a3f3e7562707999bb04a4ade470868aee80566faac9bfd967',

    '194b49b626b90db190ed8f72a4fdab4a83b87caca24bddaa1358b1a6c6966ac5',

    '59997e06038da5b62e48b3cf768c6aee8bb078fbda56f9c6f2700ea33c86750a',

    'e981c0bc8ef9aefe5c9f4a361ff3a8b9506b8a7f1e68c4c2393623e402b853e2',

    '3027b64c12b0a74b9c94e18a0ac2a993cdae371584924e39adf12d220e619e46',

    'b6620810d376aaca88f06c156bb88ccca711145ce76ccdb32fc5365872cc8074',

    '391ef1d4cf01a86c9349404b02a4ab127236e5158bf44ac53715da27a7fdf84e',

    '90c62e047939a926f60491b837ba0f2b80dcba99ac6251eeaaea2ad4427014ee',

    '58068ca3b1887df78976f44be8789a57595ce25947bcdfdde8d7ad524f1bbac3',

    '722c24fc23744d2e0e058e8fc51c0ceeb543ec4ae484c66e70615a361898620b',

    'f73c7520b9bdb17e480ec6cf5d5b423142c0bf9a0266aed74c8c5038d320ecac',

    '6c31be0ee2def8a97213f75b9b4fb248879aa63d16b454dbfb59c8f79818b0f0',

    '5ee2399b3bccc63bc1dca57ea6044b84d810dd7bce3b1dcf9f8440682f82a818' ] }


const txData=[
  {
    tx:"29bdkjc1dhsj12",
    block:5,
    name:"Samanth",
    agency:"VERIZON"
  },
  {
    tx:"29bdkjc1dhsj12",
    block:4,
    name:"Samanth",
    agency:"Miliu"
  },
  {
    tx:"29bdkjc1dhsj12",
    block:3,
    name:"Nicholas",
    agency:"Pacific Gas"
  },
  {
    tx:"29bdkjc1dhsj12",
    block:2,
    name:"Emily",
    agency:"Miliu"
  },
  {
    tx:"29bdkjc1dhsj12",
    block:1,
    name:"Olivia",
    agency:"Georgia Gas"
  }

]

const style=
{
  row1col1:{
    height:"100px",
    width:"450px",
    backgroundColor:"#CCF052"
  
  },
  row1col2:{
    height:"100px",
    width:"450px",
    backgroundColor:"#B3B7AF"
   
  },
  row1col3:{
    height:"100px",
    width:"470px",
    backgroundColor:"#F0A152"
    
  },
  row2col1:{
    height:"150px",
    width:"450px",
    backgroundColor:"#CCF052"
  
  },
  row2col2:{
    height:"150px",
    width:"450px",
    backgroundColor:"#B3B7AF"
   
  },
  row2col3:{
    height:"150px",
    width:"470px",
    backgroundColor:"#F0A152"
    
  },
  row3col1:{
    height:"250px",
    width:"450px",
    backgroundColor:"#CCF052"
  
  },
  row3col2:{
    height:"250px",
    width:"450px",
    backgroundColor:"#B3B7AF"
   
  },
  row3col3:{
    height:"250px",
    width:"470px",
    backgroundColor:"#F0A152"
    
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
  }


  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
      socket: React.PropTypes.object.isRequired,
      socket1: React.PropTypes.object.isRequired
      // socket2: React.PropTypes.object.isRequired
    }
  }


componentDidMount=()=>{
 this.context.socket.on('start',(msg)=>{
            alert('start');
            console.log('---------------Socket Conected- 4000-----------------');

          //  this.setState({txView:true});
          });

          this.context.socket.on('getapi',(msg)=>{
            alert('getapi');
            console.log('---------------Socket Conected- 4000-----------------');

          //  this.setState({txView:true});
          });
          
          this.context.socket1.on('anotherapi',(msg)=>{
            alert('anotherapi');
            console.log('---------------Socket Conected 5000 ------------------');

          //  this.setState({txView:true});
          });
          // this.context.socket2.on('start',(msg)=>{
          //   // alert('start');
          //   console.log('---------------Socket Conected 5500------------------');

          // //  this.setState({txView:true});
          // });

          this.context.socket.on('kycdatarequest',(msg)=>{
            console.log('---------------Socket Conected for 4000- kyc req-----------------');

            alert('kycdatarequest');
            console.log(msg);
            var arr=msg.split(',');
            
            // var obj={
            //   tx:arr[0].substring(0,16)+'...',
            //   block:"Block 17", 
            //   msg:arr[2]+ ' '+ arr[3]+' '+arr[1]
            // }
        
            // let newData=[obj].concat(this.state.submitData);
            // this.setState({submitData:newData});
            // setTimeout(()=>{
            //   this.setState({validatorData:newData})
            // },1500)
            // setTimeout(()=>{
            //   this.setState({miliuData:newData}) 
            // },3000)
            console.log(msg);


          //  this.setState({txView:true});
          });
          // this.context.socket1.on('kycdatarequest',(msg)=>{
          //   console.log('---------------Socket Conected for 5000- kyc request-----------------');

          //   alert('kycdatarequest');
          //   console.log(msg);
          //   var arr=msg.split(',');
            
          //   // var obj={
          //   //   tx:arr[0].substring(0,16)+'...',
          //   //   block:"Block 17", 
          //   //   msg:arr[2]+ ' '+ arr[3]+' '+arr[1]
          //   // }
        
          //   // let newData=[obj].concat(this.state.submitData);
          //   // this.setState({submitData:newData});
          //   // setTimeout(()=>{
          //   //   this.setState({validatorData:newData})
          //   // },1500)
          //   // setTimeout(()=>{
          //   //   this.setState({miliuData:newData}) 
          //   // },3000)
          //   console.log(msg);


          // //  this.setState({txView:true});
          // });
          // this.context.socket2.on('kycdatarequest',(msg)=>{
          //   console.log('---------------Socket Conected for 5500 kyc request------------------');

          //   alert('kycdatarequest');
          //   console.log(msg);
          //   var arr=msg.split(',');
            
          //   // var obj={
          //   //   tx:arr[0].substring(0,16)+'...',
          //   //   block:"Block 17", 
          //   //   msg:arr[2]+ ' '+ arr[3]+' '+arr[1]
          //   // }
        
          //   // let newData=[obj].concat(this.state.submitData);
          //   // this.setState({submitData:newData});
          //   // setTimeout(()=>{
          //   //   this.setState({validatorData:newData})
          //   // },1500)
          //   // setTimeout(()=>{
          //   //   this.setState({miliuData:newData}) 
          //   // },3000)
          //   console.log(msg);


          // //  this.setState({txView:true});
          // });
          // this.context.socket1.on('kycrequestapproval',(msg)=>{
          //   console.log('---------------Socket Conected for 5000------------------');

          //   alert('kycrequestapproval');
          //   var arr=msg.split(',');
          //   var obj1={
          //     tx:arr[0].substring(0,16)+'...',
          //     block:"Block 18", 
          //     msg:arr[1]
          //   }
        
          //   let newData=[obj1].concat(this.state.validatorData);
          //   let newData1=[obj1].concat(this.state.submitData);
          //   let newData2=[obj1].concat(this.state.miliuData);
          //   this.setState({validatorData:newData});
          //   setTimeout(()=>{
          //     this.setState({submitData:newData1,miliuData:newData2});
          //   },2500)
        
          //   // var obj2={
          //   //   tx:"TxID sdjh25376121",
          //   //   block:"Block 8",
          //   //   msg:"KYC Data"
          //   // }
        
          //   // let newData3=[obj2].concat([obj1].concat(this.state.submitData));
          //   // let newData4=[obj2].concat([obj1].concat(this.state.miliuData));
        
          //   // setTimeout(()=>{
          //   //   this.setState({miliuData:newData4});
             
          //   // },4500)
        
          //   // setTimeout(()=>{
          //   //   this.setState({submitData:newData3});
          //   // },6000)
        
          
          // //  this.setState({txView:true});
          // });

          // this.context.socket2.on('getKYC',(msg)=>{
          //   alert('Get kyc data');
          //   console.log(msg);

            

          // //  this.setState({txView:true});
          // });
  
  this.BootstrapData();
  
 
  // this.closeActivityIndicator();
}



BootstrapData=()=>{
  console.log('-----------prepring bootstrap data-------------------------------');
var arr=[];

let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));

console.log('-----------retrieveduser detail-----------', retrievedUserDetails);
console.log('data');

  // this.intervalTrack = setInterval(() => this.tick(), 1000);
console.log('arr length-------', retrievedUserDetails.userData[0].length);
  for(var i=0; i<retrievedUserDetails.userData.length;i++){
    if(retrievedUserDetails.userData[i][0]=='Olivia'){
    var objs={
      tx:retrievedUserDetails.txData[i].substring(0,16)+'...',
      block:i,
      name:retrievedUserDetails.userData[i][0]+" "+ retrievedUserDetails.userData[i][1],
      agency:retrievedUserDetails.userData[i][6]
      }
      arr.push(objs)
      console.log(objs);   
    }
    
  }
  this.setState({txData:arr});
//   console.log(arr);
//   var count=0;
//   if(count==4){
//     this.clearInterval(this.intervalTrack );
// console.log('end');
//   }else{
//   this.intervalTrack = setInterval(() =>{ 
    
//     let newData=this.state.txData.concat([arr[count]]);
//     this.setState({txData:newData});
//     count++;
//   },1000);
// }


  // setTimeout(()=>{
  //   this.setState({validatorData:newData})
  // },1500)
  

  // this.setState({txData:arr});
  // arr.forEach((data)=>{

  // })


 
   

    
  
  
  // Axios({ 
  //   method:'GET',
  //   url:'http://13.125.219.101:4000/userDataAPI',
  //   headers: {  
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjQ1OTY0MzksInVzZXJuYW1lIjoiVWJpYmFua1VzZXIiLCJvcmdOYW1lIjoidWJpYmFuayIsImlhdCI6MTUyNDU2MDQzOX0.QWofd0eunqXri8k2HoSd0BOpmvWbtyi5QGXiv5xtgbo'
  //   }
  //   })
  //   .then((data) => {
  //   console.log('get all the data');
  //   console.log(data);
    
    
  //   if(data.data.userData.length==0){
  //     let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
  //     this.setState({txData:retrievedUserDetails});
  //   }else{
  //     sessionStorage.setItem('userLoginDetails',JSON.stringify(data.data));
  //     // let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));

  //     data.data.userData.forEach((data,i)=>{

  //     })
  //     var obj={
  //       tx:"29bdkjc1dhsj12",
  //   block:3,
  //   name:"Nicholas",
  //   agency:"Pacific Gas"
  //     }
  //     this.setState({txData:retrievedUserDetails});
  //   }
           

  //   })
  //   .catch((error) => {
  //   console.log(error);
  //   console.log(error+"error in get Trade");
  //   });
    console.log('-----------end bootstrap data-------------------------------');

}

  // submitForm=()=>{
  //   var obj={
  //     tx:"TxID sdjh25376121",
  //     block:"Block 6",
  //     msg:"KYC Request for Olivia"
  //   }

  //   let newData=[obj].concat(this.state.submitData);
  //   this.setState({submitData:newData});
  //   setTimeout(()=>{
  //     this.setState({validatorData:newData})
  //   },1500)
  //   setTimeout(()=>{
  //     this.setState({miliuData:newData})
  //   },3000)

  // }

  OTPFunction=()=>{
    // var obj1={
    //   tx:"TxID sdjh25376121",
    //   block:"Block 7",
    //   msg:"Approval by Validator"
    // }

    // let newData=[obj1].concat(this.state.validatorData);
    // let newData1=[obj1].concat(this.state.submitData);
    // let newData2=[obj1].concat(this.state.miliuData);
    // this.setState({validatorData:newData});
    // setTimeout(()=>{
    //   this.setState({submitData:newData1,miliuData:newData2});
    // },2500)

    // var obj2={
    //   tx:"TxID sdjh25376121",
    //   block:"Block 8",
    //   msg:"KYC Data"
    // }

    // let newData3=[obj2].concat([obj1].concat(this.state.submitData));
    // let newData4=[obj2].concat([obj1].concat(this.state.miliuData));

    // setTimeout(()=>{
    //   this.setState({miliuData:newData4});
     
    // },4500)

    // setTimeout(()=>{
    //   this.setState({submitData:newData3});
    // },6000)


   

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
           <Avatar src="data:image/png;base64,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" />
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



