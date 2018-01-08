document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('test_input').addEventListener("submit", function(e){
    e.preventDefault();
    console.log( checkUsername(e.target[0].value) );
  });
});
