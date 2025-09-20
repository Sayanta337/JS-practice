console.log("The developer of this site is Sayanta (you can call me Leo)");
//input section
let uInput = document.querySelector("#user_input");
let addBtn = document.querySelector("#input_submit");
let inArray = [];
// output section
let uOutput = document.querySelector(".para_notes");
let trashBtn = document.querySelector(".delete_btn");

function addValue(){
  if (uInput.value){
    inArray.push(uInput.value);
    console.log(inArray);
  }
  else {uInput.placeholder = "Please type something first..."};
};