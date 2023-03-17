(  () => {
    const btn = document.querySelector('[data-form-btn]');
    const createTask = (event) => {
        event.preventDefault();
        const input = document.querySelector('[data-form-input]');
        const value = input.value;
        input.value = '';
        const list = document.querySelector('[data-list]');
        const task = document.createElement('li');
        task.classList.add('card');
        const taskContent = document.createElement('div');
        const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        const rubbishBin = document.createElement('i');
        rubbishBin.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');

        if(value !=''){
        list.appendChild(task);
        task.appendChild(taskContent);
        //se agregaria el icono del tacho como hijo de task
        task.appendChild(rubbishBin);
        //ese task content tiene un check -->checkComplete y texto title
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask);
        titleTask.innerText = value; //la tarea que se agrega va dentro del span
        }else{
            alert("No ingresaste una tarea.")
        }
    };
    //Arrow funcions o funciones anonimas
    btn.addEventListener("click", createTask);

    const checkComplete = () => {
        const i = document.createElement('i');
        i.classList.add('far', 'fa-check-square', 'icon');
        i.addEventListener("click", completeTast);
        return i;
    };
    const completeTast = (event) => {
        //Sera necesario cambiar el icono de check
        const element = event.target;
        element.classList.toggle('fas');
        element.classList.toggle('completeIcon');
        element.classList.toggle('far');
    };
})();
//Immediaately invoked function expression IIFE