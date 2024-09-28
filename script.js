// JavaScript Document
const luck = ["Good things are coming your way", "Better luck next time", "Not so lucky", "Maybe next time", "Outlook good", "Beginner's luck", "Your in luck", "Unfortunate"];

for (name of luck) {
	if (name === "Not so lucky") {
		console.log("Luck isn't on your side");
		break;
	}
}

let loading = 0;
while(loading < 100){
	loading++;
}
const text = document.querrySelector(".title");
const changecolor = document.querrySelector(".changecolor");

text.style.color = "Blue";
text.style.backgroundColor = "Yellow";

text.classList.add("change");

changeColor.addEventListener("click", function(){
	text.classList.toggle("change");
})

const userList = document.querrySelectorAll(".luck-list li");

for(Luck of luck-list){
	user.addEventListener("lick", function(){
		this.style.color = "red";
	});
}