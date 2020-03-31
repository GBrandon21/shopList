var button = document.getElementById("Enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li= document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createList() {
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li).append(" ");
		input.value= "";

	var button = document.createElement("button");
		button.appendChild(document.createTextNode("Done!"));
		li.appendChild(button);
		button.onclick = crossoutParent ;
		
}

function addListAfter() {
	if (inputLength() > 0){
		createList();
	}
}

function addListKey(event){
	if (inputLength() > 0 && event.which === 13) {
		createList();
	}
}

function crossoutParent (event) {
	event.target.parentNode.classList.toggle("done");
	document.getElementById("button").style.right = "-10px"

}
	
button.addEventListener("click" , addListAfter);
input.addEventListener("keypress", addListKey);


