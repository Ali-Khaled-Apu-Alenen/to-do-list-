let button = document.querySelector(".addbutton");
let orderdiv = document.querySelector(".task-list");
let Olist = document.querySelector(".Olist");
let text=document.querySelector(".writetext");
let deletebutton = document.querySelector(".deleten");
let searchbutton = document.querySelector(".search");
button.addEventListener("click", function () {
  if (text.value === "") {
    alert("Please write something to add a task.");
  }
  else{
    let count=0;
    let li=document.createElement("li");
    li.className="list";
    li.innerHTML=text.value;
  Olist.appendChild(li);
  text.value="";}
});
deletebutton.addEventListener("click", function () {
  if (searchbutton.value === "") {
    alert("Please write something to delete a task.");
  }
  
  else{

}});

