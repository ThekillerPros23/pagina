let button_change = document.getElementById("buttons").addEventListener("click", change_dark);
let button_change2 = document.getElementById("buttons2").addEventListener("click", change_light)
function change_dark()
{
let data = document.getElementById("dark");
data.href = "../css/dark.css";
}
function change_light(){
	let data2 = document.getElementById("dark");
	data2.href="../css/style.css";
}