import * as firebase from "firebase";
import React from 'react' ; 
import{BrowserRouter as Router, Route} from 'react-router-dom';
import {render} from "react-dom";
import {Link} from 'react-router-dom';
// Initialize Firebase
 var config = {
     apiKey: "AIzaSyBcc3UXItmYRyQScs8q270UxtwenlL-MDY",
     authDomain: "login-with-data-base.firebaseapp.com",
     databaseURL: "https://login-with-data-base.firebaseio.com",
     projectId: "login-with-data-base",
     storageBucket: "login-with-data-base.appspot.com",
     messagingSenderId: "1001582318076"
   };
   firebase.initializeApp(config);

class App extends React.Component{  
    render() {
        return(
            <Router>
        <div>
            <Route exact path="/" component={Login}/>  
            <Route path="/signup" component={signUp}/>
            </div>
          </Router>
        );
    };
};

const Login =() => (
            <div>
                <h2>Login Here</h2>
                <div className="imgcontainer">
                    <img src="img_circle.png" alt="user pic" className="avatar" />
                </div>
                <div className="container">
                    <label><b>UserEmail</b></label>
                    <input type="text" placeholder="Enter email " name="email" id="useremail"  required/>
    
                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" id="userpsw" required/>
            
                    <button type="button">Login</button>
                </div>
    
                <div className="container">
        
                     <span className="psw ,cancelbtn ">Forgot <a href="">password?</a></span>
                     <span className="join">You are not a member? <Link to ="/signUp">Join Now </Link> </span>
        
                </div>
                 <button type="button" id="logout" className="hide">Logout</button>
            </div>
)
const signUp =() => (
            <div>
                <div class="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />

                    <label><b>Name</b></label>
                    <input type="text" placeholder="Enter Full Name" name="name" id="username" required />

                    <label><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="useremail" required />

                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" id="userpsw" required />

                    <label><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="userpsw-repeat" required />

                    <p>By creating an account you agree to our <a href="" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p>

                    <div class="clearfix">
                        <button onclick="signup()" class="signupbtn">Sign Up</button>
                    </div>
                </div>

                <div class="alert-danger" id="custom-error">
                    <strong>Error!</strong> Something went wrong.
                </div>
            </div>
)

render(<App/>, window.document.getElementById("app"));
// var nameref =  document.getElementById("username");
// var emailref =  document.getElementById("useremail");
// var pswref =  document.getElementById("userpsw");
// var psw_repeatref =  document.getElementById("userpsw-repeat");
// var customError = document.getElementById("custom-error");


// function signup() {
//     var user = {
//         name  : nameref.value,
//         email : emailref.value,
//         psw   : pswref.value,
//         psw_repeat   : psw_repeatref.value,
//     }

//    // console.log('user' , user);

//    var valid = customValidation(user);
//    if(valid) {
//        console.log("valid" , valid);
//        firebase.auth().createUserWithEmailAndPassword(user.email , user.psw)
//        .then(function(success){
//            console.log("success" , success);
//        })
//        .catch(function(error){
//            console.log("error" , error);
//            customError.style.display = "block";
//            setTimeout(()=>{
//                customError.style.display = "none";
//            }, 3500)
//        })
//     }
//     else{
//         console.log("unvalid" , valid);
//         customError.style.display = "block";
//         setTimeout(()=>{
//             customError.style.display = "none";
//         }, 3500)
//     } 



// }

// function customValidation(_user) {
//     var valid = true;
//     for (var key in _user ) {
//         if (_user[key] === "" || _user[key] === undefined) {
//             valid = false;
//         }
//     }

//     if(_user.psw !== _user.psw_repeat ){
//         valid = false;
//     }
//     return valid;

// }