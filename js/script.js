// MILESTONE 1 - GENERARE 5 NUMERI CASUALI
let n_array = [];

for (let i = 0; i < 5; i++) {
	let n_random = Math.floor(Math.random() * 5 + 1);
	n_array.push(n_random);
	console.log(n_random, n_array);
}
