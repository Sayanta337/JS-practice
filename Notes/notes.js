console.log("The developer of this site is Sayanta (you can call me Leo)");
//input section
let uInput = document.querySelector("#user_input");
let addBtn = document.querySelector("#input_submit");
let inArray = [];
// output section
let outputHolder = document.querySelector(".outputs");

display();

function addValue(){
  if (uInput.value){
    //saving the value in array
    inArray.push(uInput.value);
    //saving the value of array in localstorage
    localStorage.setItem("inValue", JSON.stringify(inArray));
    //temp output
    console.log(localStorage.getItem("inValue"));
    //update input section
    uInput.value = '';
    uInput.placeholder = "Task added 👍";
    //get the array value form localstorage > display them.
    makingHtml();
  }
  else {uInput.placeholder = "Please type something first..."};
};

function makingHtml(){
  let newHtml = '';

  for (let i = 0; i < inArray.length; i++){

    newHtml += `<div class="test">
          <span class="para_notes">${inArray[i]}</span>
          <button class="delete_btn" onclick="deleteValue(${i})">🗑️</button>
        </div>`;
  };

  outputHolder.innerHTML = newHtml;
};

function display(){
  let x = localStorage.getItem("inValue");
  if (x && JSON.parse(x).length > 0){
    inArray = JSON.parse(x);
    makingHtml();
  }
  else{
    outputHolder.innerHTML = `<div class="test">
          <span class="para_notes">Welcome, add tasks to get started.</span>
        </div>`;
  };
};

function deleteValue(index){
  inArray.splice(index, 1);
  localStorage.setItem("inValue", JSON.stringify(inArray));
  display();
};