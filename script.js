const container = document.querySelector('.cal-buttons')


// const calButtons = 

function getButtons(){
    let count = 0
    for (let i = 0;i < 15;i++){
        count++
        const newButton = document.createElement("div")
        newButton.className = "buttons"
        newButton.textContent = count
        if(count === 14){
            newButton.style.width = "100px"
        }
        else{

            newButton.style.width = "50px"
        }
        newButton.style.height = "50px"
        newButton.style.border = "1px solid black"
        // newButton.style.margin = "0.5px"
        container.appendChild(newButton)
    }
}

getButtons()




