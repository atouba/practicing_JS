// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   guess_game.js                                      :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: atouba <atouba@student.42.fr>              +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2022/12/25 18:50:21 by atouba            #+#    #+#             //
//   Updated: 2022/12/25 18:50:31 by atouba           ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

"use strict";

const prompt = require("prompt-sync")({sigint: true});

function	guess() {
	let		attempts = 0, input = -1;
	const	random_num = Math.floor(Math.random() * 102);
	
	console.log("You will have to guess the mysterious number, it's been told that this number is between 0 and 101 (inclusive), we'll see how many attempts you need to find that number");
	console.log("Enter number");
	while (input != random_num) {
		input = prompt();
		input = parseInt(input);
		attempts++;
		if (input < random_num)
			console.log("It's greater");
		if (input > random_num)
			console.log("It's smaller");
	}
	if (attempts <= 3)
		console.log("Congrats ");
	console.log(`It took you ${attempts} attempts to find the mysterious number`);
}

let	play = true;
let	is_play;

while (play) {
	guess();
	console.log("Do you want to play again?\nPlease answer with a 'y'es or 'n'o");
	is_play = prompt();
	if (is_play == 'n')		play = false;
}
