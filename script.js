let form = document.querySelector("#task-form")
let input = document.querySelector("#task-input")
let tasks = document.querySelector(".task-list")

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const userdata = input.value
    if (!userdata) {
        alert("please enter any task ")
    }

    else {
        const task = document.createElement("div")
        task.classList.add("task")
        task.classList.add("my-2")

        const content = document.createElement("div")
        content.classList.add("content")

        const task_input = document.createElement("input");

        task_input.classList.add("text")
        task_input.value = userdata;
        task_input.setAttribute('readonly', 'readonly')
        task_input.type = "text"

        content.appendChild(task_input)
        task.appendChild(content)
        tasks.appendChild(task)

        const action = document.createElement("div")
        action.classList.add("action")


        const edit = document.createElement("button")
        edit.classList.add("edit")
       
        let editImg = document.createElement('img')
        editImg.src = "./images/edit (1).png"
        edit.appendChild(editImg)


        const delet = document.createElement("button")
        delet.classList.add("delete")
        let deleteImg = document.createElement('img')
        deleteImg.src = "./images/bin.png"
        delet.appendChild(deleteImg)



        action.appendChild(edit)
        action.appendChild(delet)
        tasks.appendChild(action)

        input.value = ""


        edit.addEventListener('click', () => {
            if ( edit.classList =="edit") {
                task_input.removeAttribute('readonly')
                editImg.src = "./images/save.png"
                task_input.focus()
                edit.classList.remove("edit")
            }
            else{
                task_input.setAttribute('readonly', 'readonly')
                editImg.src = "./images/edit (1).png"
                edit.classList.add("edit")
            }
        })

        delet.addEventListener('click', () => {
            tasks.removeChild(task)
            action.removeChild(edit)
            action.removeChild(delet)


        })

    }
})