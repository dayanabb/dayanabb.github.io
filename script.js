let plate = document.querySelector(".plate")

plate.addEventListener("click",e=>{
plate.classList.add("full")
setTimeout(()=>{

plate.classList.remove("full")

},3000)

})
