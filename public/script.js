var socket = io("ws://localhost:3000");

var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');

socket.on('chat message', (msg) => {
    const node = document.createElement('li');
    const textnode = document.createTextNode(msg);
    node.appendChild(textnode);
    messages.appendChild(node);
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
});