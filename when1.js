

document.getElementsByClassName('menuclick')[0].addEventListener('click', function(){
    console.log("메뉴")
    document.getElementsByClassName('list-group')[0].classList.toggle('show');  
 });

    document.getElementsByClassName('loginbtn')[0].addEventListener('click', function(){
        console.log("열기")
        document.getElementsByClassName("blackback")[0].classList.add("show-modal");
    })
    
    document.getElementsByClassName("close")[0].addEventListener("click", function(){
       document.getElementsByClassName("blackback")[0].classList.remove("show-modal");
        console.log("닫기")
    })



const Input = document.querySelectorAll(".input1")[0]

document.querySelector(".submit").addEventListener("click",function(){
   if(Input.value==""){
    alert("not")
   }

})

