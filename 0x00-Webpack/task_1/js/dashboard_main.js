import $ from 'jquery';
import _ from 'lodash';

let count = 0;

function updateCounter() {
	count++;
	$('#count').text(`${count} clicks on the button`);
}

const debouncedUpdateCounter = _.debounce(updateCounter, 300);

$('body')
	.append('<p>Holberton Dashboard</p>')
	.append('<p>Dashboard data for the students</p>')
	.append('<button>Click here to get started</button>')
	.append("<p id='count'></p>")
	.append('<p>Copyright - Holberton School</p>');

$('button').on('click', debouncedUpdateCounter);
