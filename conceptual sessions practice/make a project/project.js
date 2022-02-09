function htmlId(id){
    return document.getElementById(id);
}
let count = 0;
let inputValue = htmlId("inputTableValue");
let addBtn = htmlId("add-btn");
addBtn.addEventListener("click",adding)
function adding(){   
    // console.log(Number(inputValue.value))
    // console.log(inputValue.value)
    count++
    if(inputValue.value == ""){
        // console.log(inputValue.value == Number(inputValue.value))
        alert("please enter a value")
    }
    else if(inputValue.value == Number(inputValue.value)){
        // console.log(inputValue.value == Number(inputValue.value))
        alert("please enter disc,number not allowed")
        inputValue.value = '';
    }
    else{
        const tableData = htmlId('table-data');
        const tableRow = document.createElement("tr");
        tableRow.innerHTML = `<th scope="row">${count}</th>
        <td>${inputValue.value}</td>
        <td><button class="btn btn-danger delete-btn">Delete</button>
        <button class="btn btn-success done-btn">Done</button></td>`;
        tableData.appendChild(tableRow);
        inputValue.value ="";
        const deleteBtn = document.getElementsByClassName("delete-btn");
        const DoneBtn = document.getElementsByClassName("done-btn");
        for(const done of DoneBtn){
            done.addEventListener('click',allDone)
            function allDone(e){
                // console.log(e.target.classList[0] == "btn")
                    done.parentNode.style.display = "none"
                    let ok = document.createElement('td');
                    ok.innerHTML = 'OK';
                    tableRow.appendChild(ok);
                    e.target.parentNode.parentNode.style.textDecoration = "line-through";
                // console.log(e.target)
            }
        }
        // delete
        for(const button of deleteBtn){
            button.addEventListener("click",dataDelete)
            function dataDelete(e) {
                e.target.parentNode.parentNode.style.display = "none";
            }
        }
    }
}




// how to add editcontent button
// extra code if you want to add this code your project;thank you see you late code editor;

// const paragraph = document. getElementById("edit");
// const edit_button = document. getElementById("edit-button");
// const end_button = document. getElementById("end-editing");
// edit_button. addEventListener("click", function() {
// paragraph. contentEditable = true;
// paragraph. style. backgroundColor = "#dddbdb";
// } );