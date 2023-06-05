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
            <div id="item_added"><input id="checkbox" type="checkbox"> ${item} 

            <button type="button" class="btn bg-transparent" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
            
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    ...
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Understood</button>
                  </div>
                </div>
              </div>
            </div>

            <button id="clear_button">&times</button></div>
        `
    })
});

// Sort button

sortItems.addEventListener("click", ()=> {
    output_list
    
})