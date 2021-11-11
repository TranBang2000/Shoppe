
var all=document.querySelector(".modal")
var openForm1=document.querySelector(".js__modal-register")
var form1=document.querySelector(".js__form1")
var prive=document.querySelector(".js__modal-prive-form1")
var btnLogin=document.querySelector(".js__auth-form1")
var form2=document.querySelector(".js__auth-form2")
var form2Preve=document.querySelector(".js__modal-prive-form2")
var bluer=document.querySelector(".js__modal-bluer")
var next=document.querySelector(".js__modal-auth-form-btn")
var aler=document.querySelector(".js__alert")
var btnRegister=document.querySelector(".js__register")
openForm1.addEventListener("click", function() {
    all.classList.remove("js__modal-close")
})
prive.addEventListener("click", function() {
    all.classList.toggle("js__modal-close")
})
btnLogin.addEventListener("click", function(){
    form1.classList.add("js__modal-close");
    form2.classList.remove("js__modal-close");
})
bluer.addEventListener("click", function() {
    all.classList.toggle("js__modal-close")
})
form2Preve.addEventListener("click", function() {
    form1.classList.remove("js__modal-close");
    form2.classList.add("js__modal-close");
})
next.addEventListener("click", function() {
    alert("Hello:)");
})
aler.addEventListener("click", function() {
    alert("Welcome My Websites")
})
btnRegister.addEventListener("click",()=>{
    all.classList.toggle("js__modal-close")
    form1.classList.add("js__modal-close")
    form2.classList.remove("js__modal-close");
})