const input=document.getElementById('task-input');
const addBtn=document.getElementById('add-btn');
const taskList=document.getElementById("task-list");

window.onload=()=>{
    const tasks=JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(addTaskToDOM);
}

addBtn.addEventListener("click",()=>{
    const taskText=input.value.trim();
    if(taskText === "") return;
    addTaskToDOM(taskText);
    saveTask(taskText);
    input.value="";
})

function addTaskToDOM(taskText){
    const li=document.createElement("li");
    li.innerHTML=`<span>${taskText}</span>
    <button class="delete-btn">X</button>
    `;

    li.addEventListener("click",(e)=>{
        if(e.target.tagName !== "BUTTON"){
            li.classList.toggle("done");
        }
    })

    li.querySelector(".delete-btn").addEventListener("click",()=>{
        li.remove();
        removeTask(taskText);
    })
    taskList.appendChild(li);
}

function saveTask(taskText){
    const tasks=JSON.parse(localStorage.getItem("tasks")) || []
    tasks.push(taskText);
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function removeTask(taskText){
    let tasks=JSON.parse(localStorage.getItem("tasks"))|| [];
    tasks=tasks.filter((task)=>task!=taskText);
    localStorage.setItem("tasks",JSON.stringify(tasks));
}