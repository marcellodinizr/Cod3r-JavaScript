function funcaoDaSorte(choiceNumber) {
	const min = 1;
	const max = 10;
	const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

	return choiceNumber === randomNumber
		? `Parabens! o numero sorteado foi o ${randomNumber}`
		: `Que pena, o numero sorteado foi o ${randomNumber}`;
}

console.log(funcaoDaSorte(10));
console.log(funcaoDaSorte(5));
console.log(funcaoDaSorte(3));
