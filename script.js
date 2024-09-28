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