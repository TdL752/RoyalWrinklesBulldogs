const express = require('express');
const app = express();
const path = require('path');
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/learn', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'learn.html'));
});

app.get('/contact', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/available', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'available.html'));
});

app.listen(port, () => {
	console.log('listening on port 3000');
});
