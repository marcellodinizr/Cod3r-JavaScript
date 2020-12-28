function filtrarNumeros(array) {
	const result = [];
	for (let item of array) {
		if (typeof item === "number") {
			result.push(item);
		}
	}
	return result;
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]));
console.log(filtrarNumeros(["a", "c"]));

function filtrarNumeros2(array) {
	return array.filter((item) => typeof item === "number");
}

console.log(filtrarNumeros2(["Javascript", 1, "3", "Web", 20]));
console.log(filtrarNumeros2(["a", "c"]));
