const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get("/about", (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/available', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'available.html'));
});

app.get('/reviews', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'reviews.html'));
});

app.get('/contact', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/thank-you', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'thanks.html'));
});

app.post('/submit-form', (req, res) => {

        res.redirect('/thank-you');
});

app.listen(port, () => {
        console.log('listening on port 3000');
});
