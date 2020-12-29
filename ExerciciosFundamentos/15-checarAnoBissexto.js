function checarAnoBissexto(ano) {
	anoBissexto = false;
	anoBissexto = (ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0;

	if (anoBissexto == true) return true;
	else return false;
}

console.log(checarAnoBissexto(2015));
console.log(checarAnoBissexto(2020));
console.log(checarAnoBissexto(2100));
