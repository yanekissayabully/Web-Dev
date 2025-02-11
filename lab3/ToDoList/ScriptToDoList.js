const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list');

function addTask() {
    if (inputBox.value === '') {
        alert("Please enter an input");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let img = document.createElement("img");
        img.src = "delete-icon.svg";
        img.style.width = "20px";
        img.style.height = "20px";
        img.addEventListener("mouseover", () => {
            img.src="delete-icon-hover.svg";
        });
        img.addEventListener("mouseout", () => {
            img.src="delete-icon.svg";
        });
        li.appendChild(img);
    }
    inputBox.value = '';
}

listContainer.addEventListener('click', function (e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    }
}, false);
