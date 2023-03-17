const deleteIcon = () => {
    const rubbishBin = document.createElement('i');
    rubbishBin.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    rubbishBin.addEventListener('click', deleteTask);
    return rubbishBin;
}

const deleteTask = (event)=>{
    const parent = event.target.parentElement;
    parent.remove();
}
export default deleteIcon;