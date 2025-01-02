var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lis = ul.querySelectorAll("li");
var delBtns = ul.querySelectorAll("button");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var delBtn = document.createElement("button");
	li.appendChild(document.createTextNode(input.value + " "));
	li.addEventListener("click", function() {
		li.classList.toggle("done");
	});
	ul.appendChild(li);
	input.value = "";
	delBtn.appendChild(document.createTextNode("Delete"));
	li.appendChild(delBtn);
	delBtn.addEventListener("click", function() {
		ul.removeChild(li);
	});
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

lis.forEach(function(li) {
	li.addEventListener("click", function() {
		li.classList.toggle("done");
	});
});

delBtns.forEach(function(delBtn, index) {
	delBtn.addEventListener("click", function() {
		ul.removeChild(lis[index]);
	});
});