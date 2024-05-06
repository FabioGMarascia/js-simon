// MILESTONE 1 - GENERARE 5 NUMERI CASUALI
let random_arr = [];
let user_arr = [];
let found_arr = [];
let random_list = document.querySelector(`.random-list`);
let timer_button = document.querySelector(`.timer-button`);
let result_button = document.querySelector(`.result-button`);
let result_list = document.querySelector(`.result-list`);
let score_box = document.querySelector(`#score`);
let counter = 0;
let score = 0;

// MILESTONE 2
// MILESTONE 3

timer_button.addEventListener(`click`, function () {
	if (counter > 0) {
		location.reload();
	} else {
		for (let i = 0; i < 5; i++) {
			let li = document.createElement(`li`);
			li.classList.add(`list-group-item`, `w-100`);
			let n_random = Math.floor(Math.random() * 100 + 1);
			random_arr.push(n_random);
			li.append(n_random);
			random_list.append(li);
		}
		setTimeout(function () {
			random_list.innerHTML = " ";
		}, 3 * 1000);
		setTimeout(function () {
			while (user_arr.length < 5) {
				let n_user = parseInt(prompt(`Inserisci un numero intero da 1 a 100`));
				user_arr.push(n_user);
				console.log(n_user, user_arr);
			}
		}, 3.1 * 1000);
		counter++;
	}
});

// MILESTONE 4

result_button.addEventListener(`click`, function () {
	for (let i = 0; i < random_arr.length; i++) {
		const element = random_arr[i];
		let li = document.createElement(`li`);
		li.classList.add(`list-group-item`, `w-100`);
		if (user_arr.includes(element) && !found_arr.includes(element)) {
			found_arr.push(element);
			li.append(element);
			result_list.append(li);
			score++;
		}
	}
	score_box.innerText = `Your score is ${score} / 5 !`;
});
