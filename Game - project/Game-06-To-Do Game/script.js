// //DOM elements
var todoList = []
var comdoList = [];
var remList = [];
var addButton = document.getElementById("add-button")
var todoInput = document.getElementById("todo-input")
var deleteAllButton = document.getElementById("delete-all")
var allTodos = document.getElementById("all-todos");
var deleteSButton = document.getElementById("delete-selected")
var all=document.getElementById("all")
var rem =document.getElementById("rem")
var com =document.getElementById("com")

function updateList() {
    comdoList = todoList.filter((data) => {
        // if (data.complete == true) {
        //     return data;
        // }
        return data.complete;
    });

    remList = todoList.filter((data) => {
        // if (data.complete == false) {
        //     return data;
        // }
        return !data.complete;
    });

    document.querySelector('#c-count').textContent = comdoList.length;
    document.querySelector('#r-count').textContent = todoList.length;
}

function appendTask(todoList) {
    allTodos.innerHTML = ""; //empty. ... - > task

    todoList.forEach((element) => {
        var x = `<li id=${element.id} class="todo-item">
            <p id="task"> ${element.complete ? `<strike>${element.content}</strike>` : element.content} </p>
            <div class="todo-actions">
                    <button class="complete btn btn-success">
                        <i class=" ci bx bx-check bx-sm"></i>
                        </button>

                    <button class="delete btn btn-error">
                        <i class="di bx bx-trash bx-sm"></i>
                    </button>
                </div>
            </li>`
        allTodos.innerHTML += x;

    })
}


// //event listners for add and delete
function addTask() {
    var task = todoInput.value;

    if (task == "") {
        alert('Content is compulsory and no Empty content is allowed');
        return;
    }

    //each task => trace....
    todoList.push({
        content: task,
        id: Date.now().toString(),
        complete: false
    });

    todoList.forEach((data) => {
        console.log(data);
        appendTask(todoList);
    });

    todoInput.value = "";

    document.querySelector('#r-count').textContent = todoList.length;
    updateList();
}

addButton.addEventListener('click', addTask);

todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();

    }
});


function deleteTask(event) {     //task ko remove karne ke liye
    console.log(event.target.parentElement);

    console.log(event.target.parentElement.parentElement);

    console.log(event.target.parentElement.parentElement.getAttribute('id'));

    var id = event.target.parentElement.parentElement.getAttribute('id');

    todoList = todoList.filter((data) => {
        return data.id != id;
    });
    updateList();
    appendTask(todoList);
}

function complete(event) {
    var id = event.target.parentElement.parentElement.getAttribute('id');

    todoList.forEach((data) => {
        if (data.id == id) {
            if (data.complete == false) {
                data.complete = true;
                event.target.parentElement.parentElement.querySelector('#task').classList.add('line');
            }

            else {
                if (data.complete == true) {
                    data.complete = false;
                    event.target.parentElement.parentElement.querySelector('#task').classList.add('line');
                }
            }
        }
    });
    updateList();
    appendTask(todoList);
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete') || event.target.classList.contains('di')) {
        console.log(event.target);
        deleteTask(event);
    }
    if (event.target.classList.contains('complete') || event.target.classList.contains('ci')) {
        console.log(event.target);
        complete(event);
    }
})

function deleteAll(){
    todoList=[];
    updateList();
    appendTask(todoList);
}
deleteAllButton.addEventListener('click',deleteAll)

function deleteS(){
    todoList=todoList.filter((data)=>{
        return !data.complete;
    });
    updateList();
    appendTask(todoList);
}


all.addEventListener("click", () => {
    appendTask(todoList);
});

rem.addEventListener("click", () => {
    const pending = remList.filter(t => !t.complete);
    appendTask(pending);
});

com.addEventListener("click", () => {
    const completed = comdoList.filter(t => t.complete);
    appendTask(completed);
});

deleteSButton.addEventListener('click',deleteS);












// // DOM Elements
// var todoList = [];
// var comdoList = [];
// var remList = [];
// var addButton = document.getElementById('add-button');
// var todoInput = document.getElementById('todo-input');
// var deleteAllButton = document.getElementById('delete-all');
// var allTodos = document.getElementById('all-todos');
// var deleteSButton = document.getElementById('delete-selected');




// function updateList(){      // step4 => taki for filter box ke liye
//     comdoList = todoList.filter((data)=> {  // for completed
//         // if(data.complete == true){
//         //     return data;
//         // }
//                   // or
//         return data.complete;
//     });

//     remList = todoList.filter((data)=> {    // for pending
//         // if(data.complete == false){
//         //     return data;
//         // }
//                     // OR
//         return !data.complete;
//     });

//     document.querySelector('#c-count').textContent = comdoList.length;  // complted me show karne ke liye

//     document.querySelector('#r-count').textContent = todoList.length;
// }


// function appendTask(todoList){      // step=>5   show karne ke liye task 
//     allTodos.innerHTML = "";    // empty... => task

//     todoList.forEach((element)=>{
//         var x = `<li id=${element.id} class="todo-item">
//         <p id="task"> ${element.complete ? <strike>${element.content}</strike> : element.content} </p>
//         <div class="todo-actions">
//                  <button class="complete btn btn-success">
//                      <i class=" ci bx bx-check bx-sm"></i>
//                 </button>
        
//                  <button class="delete btn btn-error">
//                      <i class=" ci bx bx-trash bx-sm"></i>
//                  </button>
//         </div>
//     </li>`
//     allTodos.innerHTML +=x;
//     })
// }


// function addTask(){
//     var task = todoInput.value;  // 'value' => textcontent ki tarah  kaam karta agar "input element ka use hua hai to"

//     if(task == ""){       // agar user empty string naa upload kare isliye condition likh rahe hai
//         alert('Content is compulsory and no empty content is alowed');
//         return;
//     }

//     // each task -> trace......  (step 2)
//     todoList.push({
//         content : task,
//         id : Date.now().toString(),
//         complete : false
//     });

//     todoList.forEach((data)=>{
//         console.log(data);
//         appendTask(todoList);  //step->5.5 call karna
//     });

//     document.querySelector('#r-count').textContent = todoList.length;  // taki "total task" me add ho

//     updateList();  //step 4 call => 
// }


// addButton.addEventListener('click', addTask);  //step1



// todoInput.addEventListener('keypress', (event)=> {   // step3 taki agar task likh rahe hai use "Enter" ki madad se direct store ho jaye
//     if(event.key === 'Enter'){
//         addTask();
        
//     }
// });


// function deleteTask(event){     // step-6.5  taki waha se tasks remove karne ke liye
//     var id = event.target.parentElement.parentElement.getAttribute('id');

//     todoList = todoList.filter((data)=>{   // taki jo bhi list hai usme se filter kar paye by "id" jo object me use hua tha
//         return data.id != id;
//     });

//     updateList();  // taki delete karne ke array me update ho and reflect ho
//     appendTask(todoList);
// }

// function complete(event){      // step7 => for sahi button
//     var id = event.target.parentElement.parentElement.getAttribute('id');

//     todoList.forEach((data)=>{
//         if(data.id == id){
//             if(data.complete == false){     // kyuki suru me hi comple=false tha ab usko true kar denge 
//                 data.complete = true;
//                 event.target.parentElement.parentElement.querySelector('#task').classList.add('line');  // taki wo jo "paragraph" hai usme access kar ke delete kar sake
//             }
//             else{
//                 if(data.complete == true){    // for "undo" 
//                     data.complete = false;
//                     event.target.parentElement.parentElement.querySelector('#task').classList.remove('line');
//                 }
//             }
//         }
//     })
// }






// document.addEventListener('click', (event)=>{     // step-6  wo jo task hai uska delete / sahi button ke liye
    
//     if(event.target.classList.contains('delete')){  //for delete buttton
//         console.log(event.target);
//         deleteTask(event);    // step-6.5 taki us task do pura li delete kar sake
//     }

//     if(event.target.classList.contains('complete')){    // for sahi button
//         complete(event);  // step7
//     }
// })


// function deleteAll(){        // step 8 
//     todoList = [];   // taki sara data khali ho jaye
//     updateList();    // taki wo reflect bhi ho jaye
//     appendTask(todoList);
// }
// deleteAllButton.addEventListener('click', deleteAll)   // step 8 for delete all

// function deleteS(){     // step => 9  selected button
//     todoList = todoList.filter((data)=>{
//         return !data.complete;
//     });
//     updateList();
//     appendTask(todoList);
// }
// deleteSButton.addEventListener('click', deleteS);  // step=>9