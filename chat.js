//this function takes the name and the message and pairs them into a post
var message = function(ID, post) {
	this.ID = ID;
	this.post = post;
}

//This puts the post into the list element of the HTML
message.prototype.list = function() {
	var li = document.createElement('li');
	li.innerHTML = '<strong>' + this.ID + '</strong>' + ': ' + this.post;
	return li;
}

// two DOM variable and an array for function use
var messages = document.getElementById('message-list');
var button = document.getElementById('post-button');
var messageList = [];


//This function handles all events related to posting the message
function postMessage(event) {
	event.preventDefault();
	messageList = [];

	if (!event.target.ID.value) {
		event.target.ID.value = Math.floor(Math.random() * 900000000) + 99999999;
	}

	var newMessage = new message(event.target.ID.value, event.target.post.value);

	messageList.push(newMessage);
	messageList.forEach(function(message) {
		messages.appendChild(message.list());
	});

	event.target.post.value = '';

	console.log('hello');
	console.log(messageList);
}

//This is he event handler for the button within the form
chat.addEventListener('submit', postMessage);