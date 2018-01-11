document.addEventListener("DOMContentLoaded", function() {   // wait until i reload the page and everything is executed
  document.getElementById('test_input').addEventListener("submit", function(e){  // select the elem in the  document                                                                                         document 
    e.preventDefault();     // we handle the action, preventing a default action from js, default action should not be taken as it normally would be.
    console.log(e);
    // console.log(this) // this here refers to the form
    // console.log(this.elements[0].value)  
    // console.log( checkUsername(e.target[0].value) );
    // console.log( checkEmail(e.target[1].value) );
    // console.log( checkPassword(e.target[2].value) );
    if (checkUsername(e.target[0].value) 
  });
});
// the variable checkUsername is declared in the tests.js