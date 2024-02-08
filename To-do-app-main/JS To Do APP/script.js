const inputBox = document.querySelector("#inputBox");
const listContainer = document.querySelector("#list-container");

const addTaskButton = document.querySelector("#addTask").addEventListener('click', e => {
    e.preventDefault();

    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        const span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
});

listContainer.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();

    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}

const showList = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}

showList();