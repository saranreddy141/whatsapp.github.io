var form1=document.getElementById('form1');
var form2=document.getElementById("form2");
var signIn=document.getElementById("signIn");
var signUp=document.getElementById('signUp');

signUp.addEventListener('click',(event)=>{
  signUp.classList.remove('d-none');
  signUp.classList.add('active');
  signIn.classList.add('d-none');
})
