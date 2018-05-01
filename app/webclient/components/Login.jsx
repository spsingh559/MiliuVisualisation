// import React from 'react';
// import { Link } from 'react-router';
// import Axios from 'axios';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';
// import Paper from 'material-ui/Paper';
// import {Grid} from 'react-bootstrap';

// import AppBar from 'material-ui/AppBar';
// import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/MenuItem';
// import FontIcon from 'material-ui/FontIcon';
// import FlatButton from 'material-ui/FlatButton';
// // import {Link} from 'react-router';
// // import RaisedButton from 'material-ui/RaisedButton';
// import Avatar from 'material-ui/Avatar';
// import FileFolder from 'material-ui/svg-icons/file/folder';
// import List from 'material-ui/List/List';
// import ListItem from 'material-ui/List/ListItem';

// import {Image} from 'react-bootstrap';

// const userInfo=[
//     {
//     username: "Jit",
//     password: "123456",
//     roleType: 'A' 
//   },
//   {
//     username: "Operator",
//     password: "123456",
//     roleType: 'B'
//   }
// ]

// const style = {
//   labelStyle: {
//       width: 'auto',
//       height: '22px',
//       family: 'Helvetica',
//       size: '18px',
//       weight: 'bold',
//       style: 'normal',
//       stretch: 'normal',
//       height: 'normal',
//       spacing: 'normal',
//       align: 'left',
//       color: '#ffffff',
//       textTransform: 'lowercase'
//      },
//      labelStyle1: {
//       width: 'auto',
//       height: '22px',
//       family: 'Helvetica',
//       size: '18px',
//       marginLeft:"-100px",
//       weight: 'bold',
//       style: 'normal',
//       stretch: 'normal',
//       height: 'normal',
//       spacing: 'normal',
//       align: 'left',
//       color: '#ffffff',
//       textTransform: 'lowercase'
//      },
//   buttonBorder:{
//     width: '167px',
//     height: '48px',
//     radius: '6px',
//     margin: '8px',
//     border: 'solid 1px #ffffff',
//     color:'#FFFFFF'
//   }
// } ;

// export default class Login extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       username:'',
//       password:'',
//       userContactSignUp:'',
//       userEmailSignUp:'',
//       userPwdSignUp:'',
//       signUpStatus:false
//     }
//     this.handleUsername=this.handleUsername.bind(this);
//     this.handlePassword=this.handlePassword.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleUsername(e){
//     this.setState({ username: e.target.value });
//   }
//   handlePassword(e){
//     this.setState({ password: e.target.value });
//   }

//   handleUserEmailignUp=(e)=>{
//     this.setState({userEmailSignUp:e.target.value});
//   }

//   handlePasswordSignUp=(e)=>{
//     this.setState({userPwdSignUp:e.target.value});
//   }
//   handleUserConatctSignUp=(e)=>{
//     this.setState({userContactSignUp:e.target.value});
//   }
//   static get contextTypes() {
//     return {
//       router: React.PropTypes.object.isRequired
//     }
//   }
//   handleClick(e) {
//     this.context.router.push('/');
//     // let data={userName:this.state.Id,userPassword:this.state.password};
//     // Axios({
//     //   method:'post',
//     //   url:'/api/v1/user/',
//     //   data:data
//     // })
//     // .then((data1) => {
//     //   console.log('Login details connected to server for post');
//     //   console.log(data1.data.message);
//     //   if(data1.data.message=='success'){
//     //     this.context.router.push('/dashboard');
//     //     alert('Successfully logged in!!!');
//     //   }else{
//     //     alert('Please enter valid Credentials!!!');
//     //   }
// // console.log(data1);
// // })
// //     .catch((error) => {
// //       console.log(error);
// //       console.log(error+"error in Login data for post");
// //     });
//   }

//   signUp=()=>{
//     this.setState({signUpStatus:true});
//   }

//   handleSignUpClick=()=>{
//     let signUpObj={
//       _id:Date.now(),
//       userEmailSignUp:this.state.userEmailSignUp,
//       userPwdSignUp:this.state.userPwdSignUp,
//       userContactSignUp:this.state.userContactSignUp
//     }
//     // Axios({
//     //   method:'post',
//     //   url:'/api/v1/user/signUp',
//     //   data:signUpObj
//     // })
//     // .then((data1) => {
//     //   console.log('Login details connected to server for post');
//     //   console.log(data1.data.message);
//     //   alert('Signup Successfully');
//     //   this.setState({signUpStatus:false});
//     // })
//     // .catch((error) => {
//     //   console.log(error);
//     //   console.log(error+"error in Login data for post");
//     // });

//   }

//   loginClick=()=>{
//     this.context.router.push('/');
//     // userInfo.forEach((data)=>{
//     //   if(data.username==this.state.username && data.password==this.state.password){
//     //     alert('Successfully Login');
//     //     sessionStorage.setItem('userLoginDetails',JSON.stringify(data));
//     //     if(data.roleType=="A"){
//     //     this.context.router.push('/');
//     //     }else if(data.roleType=="B"){
//     //       this.context.router.push('/parcelHome');
//     //     }
//     //   }
//     // })
//     // // sessionStorage.setItem('userLoginDetails',JSON.stringify(userLoginDetails));
//     //  let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
//     // console.log(retrievedUserDetails);
//   }

//   navigationLandingPage=()=>{
//     this.context.router.push('/landingPage');
//   }
//   render() {
//     /*console.log("----Session ID Login----");
//     sessionStorage.setItem("userId", "A100");
//     sessionStorage.setItem("emailId", "jitendra.chauhan2@wipro.com");
//     let id =sessionStorage.getItem("userId");
//     let emailid =sessionStorage.getItem("emailId");
//     console.log(id);
//     console.log(emailid);*/
   
    
//       return (
//         <div>
       
//         <div className="background">
//         <center>
//         <div style={{height:'400px',width:'500px',marginTop:'100px',borderRadius: "6px",border: "solid 1px #d5d5d5"}}  >
//         {/* <pap style={{height:'300px',width:'500px',backgroundColor:'white',marginTop:'200px'}}> */}


//         <h2 style={{marginTop: '10px',color:"white"}}>
//         Project Buddies App
//         </h2><br/>
//         <TextField
      
//       hintText="User Name"
//       hintStyle={{color:"white"}}
//       inputStyle={{color:"white"}}
//       floatingLabelStyle={{color:"white"}}
//       floatingLabelText="Enter User Name"
//       onChange = {(event,newValue) => this.setState({username:newValue})}
//     /><br />
//     <TextField
//       hintText=" Password"
//       inputStyle={{color:"white"}}
//       hintStyle={{color:"white"}}
//       floatingLabelStyle={{color:"white"}}
//       onChange = {(event,newValue) => this.setState({password:newValue})}
//       floatingLabelText="Enter Password"
//     /><br />
//         <div style={{marginTop:"50px"}}>
//         <RaisedButton label="Login" primary={true}  onTouchTap={this.loginClick}/>
//         <RaisedButton label="Registration" secondary={true}  
//         style={{marginLeft:"100px"}}/>
//         </div>
//         </div>
//         </center>
//         </div>
//         </div>
//         )
//     }
//   }

import React from 'react';

import {
    blue300,
  } from 'material-ui/styles/colors';

  import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Axios from 'axios';
// import RaisedButton from 'material-ui/RaisedButton';
import {Image} from 'react-bootstrap';
import {Grid,Row,Col,Carousel} from 'react-bootstrap';

const style = {
    labelStyle: {
        width: 'auto',
        height: '22px',
        family: 'Helvetica',
        size: '18px',
        weight: 'bold',
        style: 'normal',
        stretch: 'normal',
        height: 'normal',
        spacing: 'normal',
        align: 'left',
        color: '#ffffff',
        textTransform: 'lowercase'
       },
       labelStyle1: {
        width: 'auto',
        height: '22px',
        family: 'Helvetica',
        size: '18px',
        marginLeft:"300px",
        weight: 'bold',
        style: 'normal',
        stretch: 'normal',
        height: 'normal',
        spacing: 'normal',
        align: 'left',
        color: 'blue',
        textTransform: 'lowercase'
       },
    buttonBorder:{
      width: '167px',
      height: '48px',
      radius: '6px',
      margin: '8px',
      border: 'solid 1px #ffffff',
      color:'#FFFFFF'
    }
  } ;

export default class LandingPage extends React.Component{

    static get contextTypes() {
        return {
          router: React.PropTypes.object.isRequired
        }
      }

      componentDidMount=()=>{
        // console.log('----------api----------');
    //     Axios({ 
    // method:'GET',
    // url:'http://10.201.92.216:4000/userDataAPI',
    // headers: {  
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjQ1OTY0MzksInVzZXJuYW1lIjoiVWJpYmFua1VzZXIiLCJvcmdOYW1lIjoidWJpYmFuayIsImlhdCI6MTUyNDU2MDQzOX0.QWofd0eunqXri8k2HoSd0BOpmvWbtyi5QGXiv5xtgbo'
    // }
    // })
    // .then((data) => {
    // console.log('get all the data');
    // console.log(data);
    
    
    // if(data.data.userData.length==0){
    //   // let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
    //   // this.setState({txData:retrievedUserDetails});
    //   console.log('---------no data found, using session data--------------------');
    // }else{
    //   console.log('-----------length is more than zero-----------------')
    //   sessionStorage.setItem('userLoginDetails',JSON.stringify(data.data));
    // }
    //   // let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));

    // })
    // .catch((error) => {
    // console.log(error);
    // console.log(error+"error in get Trade");
    // });
      }

    loginNaviagtion=()=>{
        this.context.router.push('/');
    }

    render(){

// let title=[<span>

//     <p className="pull-right" style={{marginRight:"500px"}}> Miliu Blockchain Visualisation</p>
// </span>
//     ]
        return(
            <div  className="background">
           
          {/* <center>
              
          <Carousel style={{width:"auto"}}>
  <Carousel.Item >
    <img  alt="900x500" src="../images/slide1.jpg" />
    
  </Carousel.Item>
  <Carousel.Item >
    <img  alt="900x500" src="../images/slide2.jpg" />
    
  </Carousel.Item>
  <Carousel.Item >
    <img  alt="900x500" src="../images/slide3.jpg" />
    
  </Carousel.Item>
  <Carousel.Item >
    <img  alt="900x500" src="../images/slide4.jpg" />
    
  </Carousel.Item>
</Carousel>
         </center>
         <br /> */}
<center> 
  <br /> 
  {/* <RaisedButton label="Primary" primary={true} style={style} /> */}
  <RaisedButton   primary={true} label="Look Under the Hood" onTouchTap={this.loginNaviagtion} />
  </center>
         </div>
        
         

        )
    }
}