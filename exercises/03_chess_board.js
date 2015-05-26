var size = 8;
var white = "░";
var black = "█";

for (var i = 0; i < size; i++) {
	var line = "";

	for (var j = 0; j < size; j++) {
		var total = i + j;

		if (total % 2 == 0) {
			line += black;
		} else {
			line += white;
		}
	}

	console.log(line);
}
