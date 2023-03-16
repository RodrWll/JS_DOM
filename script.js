const btn = document.querySelector('[data-form-btn]');
const createTask = (event)=>{
    event.preventDefault();
    const input =document.querySelector('[data-form-input]');
    console.log(input.value);
}
//Arrow funcions o funciones anonimas
btn.addEventListener("click", createTask)