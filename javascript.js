const heading = document.getElementById('heading');

let button = document.getElementById('btn');
button.addEventListener('click',function(e){
    userInput = document.getElementById('username').value;
    heading.innerText='Hellow '+userInput;

});


const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
  box.addEventListener("click", function () {
    box.style.backgroundColor = this.id;
  });
});