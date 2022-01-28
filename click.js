window.addEventListener("load", function () {
    let timer1 = 10;
    

    let start=document.getElementById("start")
    start.addEventListener("click", function(){
        start.classList.toggle("hide")
        click.classList.remove("hide")
   

    let a = setInterval(function () {
        timer1 = timer1 - 1
        let timer = document.getElementById("timer")
        timer.innerHTML = timer1

        if (timer1 == 0) {
            clearInterval(a)
           
            let modal = document.getElementById("modal")
            modal.classList.toggle("hide")
            let content=document.getElementById("content")
            let p=document.getElementById("red")
            p.innerHTML=++display.value+"clicks(s)"
            content.innerHTML=classList("close")
            
        }

    }, 1000)
})

    let close=document.getElementById("close")
    
   close.addEventListener("click", function(){
       modal.classList.toggle("hide")
   })

    let click = document.getElementById("click")
    click.classList.toggle("hide")
   
    click.addEventListener("click", function () {
        let display = document.getElementById("display")
        display.value =++display.value;

    })




    let restart = document.getElementById("restart")
    restart.addEventListener("click", function () {
        
        let display=document.getElementById("display")
        display.value = "";
     
       

    })
    restart.classList.toggle("body");
    
    


});