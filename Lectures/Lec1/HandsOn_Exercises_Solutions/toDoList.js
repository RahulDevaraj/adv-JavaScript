document.getElementById("addForm").addEventListener("submit", handle)

function handle(e) {
    e.preventDefault()
    //create a new list item and add it to the list from the input in the form
    var item = document.getElementById("task").value
    var text = document.createTextNode(item)
    var newItem = document.createElement("li")

    newItem.className = "list-group-item";
    var button  = document.createElement("button")
    button.className = "btn btn-danger btn-sm float-right delete"
    button.appendChild(document.createTextNode("X"))

    newItem.appendChild(text)
    newItem.appendChild(button)
    document.getElementById("tasks").appendChild(newItem)
    
}

//pressing button will delete the corresponding list item
document.getElementById("tasks").addEventListener("click", removeItem)
function removeItem(e) {
    if(e.target.classList.contains("delete")) {
        if(confirm("Are you sure?")) {
            var li = e.target.parentElement
            document.getElementById("tasks").removeChild(li)
        }
    }
}
