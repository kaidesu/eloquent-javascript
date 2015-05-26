var size = 8;
var squared = size * size;
var white = ' ';
var black = '#';
var pattern = white;
var row = '';

for (spaces = 1; spaces <= squared; spaces++) {
	if (pattern.substr(pattern.length - 1) == white) {
		pattern = pattern + black;
	} else {
		pattern = pattern + white;
	}
}

for (position = 1; position <= squared; position++) {
	row = row + (pattern.substr(position, 1));

	if (row.length % size == 0) {
		console.log(row);
		row = '';
	}
}
