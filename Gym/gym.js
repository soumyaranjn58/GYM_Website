
    
let mainBtn = document.getElementById("mainBtn");
mainBtn.addEventListener("click",function(){
    document.querySelector(".join").style.display="block";
})
 let join = document.getElementById("join");

 join.addEventListener("click",function(){
    let names = document.getElementById("names");
    let number = document.getElementById("number");

    if(names.value == ""&& number.value==""){ 
      alert("Please Enter Name and Number")
 }else{
    alert("Thanks for Joining");
    document.querySelector(".join").style.display="none";
 }
 })
 


