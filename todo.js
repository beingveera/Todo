document.getElementById('add').addEventListener('click',Add);
document.getElementById('clear').addEventListener('click',Clear);

function Add() {
	const Data = document.getElementById('data');
	// console.log(Data.value);
	const li = document.createElement("li");
	li.innerHTML=Data.value;
	const ul =document.getElementById('lists')
	ul.appendChild(li);
}


function Clear() {
	const ul = document.getElementById('lists');
	ul.removeChild(ul.firstChild)
}