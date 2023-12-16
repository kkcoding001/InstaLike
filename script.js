var con = document.querySelector("#container")
var love = document.querySelector("i")

con.addEventListener("dblclick",function() {
    love.style.transform = 'translate(-50%,-50%) scale(1)'
    love.style.opacity = 0.8

    // setTimeout is inbuilt function 
    // inside it always write function first taen add time 1000(1 second)
    setTimeout(function() {
        love.style.opacity = 0
    },1000);

    setTimeout(function() {
        love.style.transform = 'translate(-50%,-50%) scale(0)'
    },2000);
})