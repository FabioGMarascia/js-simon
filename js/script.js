// MILESTONE 1 - GENERARE 5 NUMERI CASUALI
let n_array = [];
let ul = document.querySelector(`ul`);

for (let i = 0; i < 5; i++) {
	let li = document.createElement(`li`);
	let n_random = Math.floor(Math.random() * 100 + 1);
	n_array.push(n_random);
	li.append(n_random);
	ul.append(li);
}

// MILESTONE 2

setTimeout(function () {
	ul.classList.add(`d-none`);
}, 3 * 1000);
