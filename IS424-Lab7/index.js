document.addEventListener("DOMContentLoaded",function(){
    document.querySelector(".submitBtn").addEventListener("click",function(){
        document.querySelector(".greet-el").style.color = document.querySelector(".inputField").value
        document.querySelector(".inputField").value = ""
    })

})
    
