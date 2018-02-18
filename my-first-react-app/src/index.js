import React from 'react' ; 
import {render} from "react-dom";
import {Router, Route} from "react-router";
class App extends React.Component {
    render() {
        <Router>
            <Route  />
        </Router>
    };
}
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