let sortItems = document.querySelector("#sort_button")
let addItem = document.querySelector("#add_button")
let Input = document.querySelector("#input_item")
let output_list = document.querySelector("#list_of_items")
let to_DoList = []


// Add item to local storage
addItem.addEventListener("click", ()=> {
    if(Input.value) {
        to_DoList.push(Input.value)
        Input.value = ""
    }
    else {
        Input.style = "outline: 1px solid red; border: none;"
    }
    
    
// local storage
    localStorage.setItem("To-Do List", JSON.stringify(to_DoList))
});

// Add item to list below
addItem.addEventListener("click", ()=> {    
    output_list.innerHTML = ""
    to_DoList.forEach( (item) => {
        output_list.innerHTML += `
            <div id="item_added"><input id="checkbox" type="checkbox"> ${item} <button id="clear_button">&times</button></div>
        `
    })
});

let checkbox = document.querySelector("#checkbox")
checkbox.addEventListener("click", ()=> {
    
})