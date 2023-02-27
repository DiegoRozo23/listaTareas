const newToDo = document.querySelector("#newToDos")

newToDo.addEventListener("keyup", (key) => {
    if (key.keyCode === 13) //if the key is enter 
    {
        let li = document.createElement("li")
        let h4 = document.createElement("h4")
        let span = document.createElement("span")
        h4.textContent = newToDo.value
        span.textContent = "te"
        h4.appendChild(span)
        li.appendChild(h4)
        li.style.opacity = 0
        if (window.innerWidth < 610 && newToDo.value.length > 28) alert("Try something shorter")
        else if(newToDo.value.length > 40) alert("Try something shorter")
        else{
            if(newToDo.value.length > 0) document.querySelector(".toDos").appendChild(li)
            else alert("You have to write something")
            newToDo.value = ""
            let opacity = 0; 
            fadeIn = setInterval(function () { 
                if (li.style.opacity < 1) {
                    opacity += 0.1
                    li.style.opacity = opacity
                }
                else clearInterval(fadeIn)
            },15)
        }
    }
})

for(let li of document.querySelectorAll(".toDos")){ 
    li.addEventListener("click", function(e){
        let principalElement = e.target.parentElement.parentElement
        if(e.target.tagName == "H4") e.target.classList.toggle("done")
        else if(e.target.tagName == "SPAN"){
            principalElement.style.opacity = 1; 
            setInterval(function () { 
                if (principalElement.style.opacity > 0) principalElement.style.opacity -= 0.1;  
                else principalElement.remove()
            },30)}        
})}
