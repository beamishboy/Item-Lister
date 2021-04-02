document.querySelector("#addForm").addEventListener("submit", formSubmit);

function formSubmit(e) {
    e.preventDefault();
    var addForm = e.target;
    addItem(addForm.item);
}   

function addItem(item) {
    //addText(item.value);
    textToAdd = item.value;
    if(textToAdd==="") {
        console.log("Blank input");
        return;
    }
    var myTextNode = document.createTextNode(textToAdd);

    var newLi = document.createElement("li");
    newLi.className="list-group-item";
    newLi.appendChild(myTextNode);

    document.querySelector("#items").appendChild(newLi);

    var newBut = document.createElement("button");
    newBut.className="btn btn-danger btn-sm float-right delete";
    newBut.innerText="X"
    newLi.appendChild(newBut);
}

items.addEventListener("click", deleteButtonClick);

function deleteButtonClick(e) {
    if(!e.target.classList.contains("delete")) return;

    if(confirm("Delete this item?")) {
        deleteItem(e.target.parentElement) ;
    }
}

function deleteItem(item) {
    item.parentElement.removeChild(item);
}

filter.addEventListener("input",filterInput);

function filterInput(e) {
    var enteredText = e.target.value
    var textToSearch = enteredText.toLowerCase();
    var myList=document.querySelector("#items");
    Array.from(myList.children).forEach(function(item) {
        var itemText = item.firstChild.textContent;
        if(itemText.toLowerCase().indexOf(textToSearch) != -1) {
            item.style.display = "block";
        }
        else item.style.display = "none";
    })
}