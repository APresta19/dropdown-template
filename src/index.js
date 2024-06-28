import "./style.css";

const container = document.getElementById("container");
const selected = document.getElementById("selected");
const items = document.querySelectorAll(".item");

const myButton = document.querySelector(".dropbtn");
function toggleButton(buttonContainer) {
  buttonContainer.querySelector("#selected").classList.toggle("show");
}

myButton.addEventListener("click", () => toggleButton(container));
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", () => {
    myButton.textContent = items[i].textContent;
    toggleButton(container);
  });
}

//createDropdown();
function createDropdown() {
  const newContainer = container.cloneNode(true);
  const newSelected = newContainer.querySelector(".dropdown-content");
  const newButton = newContainer.querySelector(".dropbtn");

  newSelected.classList.remove("show");

  newButton.addEventListener("click", () => toggleButton(newContainer));

  const newItems = newContainer.querySelectorAll(".item");
  for (let i = 0; i < newItems.length; i++) {
    newItems[i].addEventListener("click", () => {
      newButton.textContent = newItems[i].textContent;
      toggleButton(newContainer);
    });
  }

  document.body.appendChild(newContainer);
}


const slider = document.querySelector("#slider");
const pictures = document.querySelector("#pictures");
const imgs = document.querySelectorAll('img');
const circles = document.querySelectorAll('.circle');
const left = document.querySelector("#left-arrow");
const right = document.querySelector("#right-arrow");
let currentImage = 0;

changeImageActivity(currentImage);
left.addEventListener("click", previous);
right.addEventListener("click", next);

function next()
{
    currentImage++;
    if(currentImage > imgs.length - 1)
    {
        currentImage = 0;
    }
    changeImageActivity(currentImage);
    console.log(currentImage);
}
function previous()
{
    console.log("prev");
    currentImage--;
    if(currentImage < 0)
    {
        currentImage = imgs.length - 1;
    }
    changeImageActivity(currentImage);
    console.log(currentImage);
}
function changeImageActivity(index)
{
    for(let i = 0; i < imgs.length; i++)
    {
        if(i == index)
        {
            imgs[i].style.visibility = "visible";
            circles[i].style.backgroundColor = "white";
        } else {
            imgs[i].style.visibility = "hidden";
            circles[i].style.backgroundColor = "";
        }
    }
}