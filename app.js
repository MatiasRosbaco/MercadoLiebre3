const express = require('express');
const path = require('path');

const app = express();
app.listen(process.env.PORT || 3000);

const publicpath = path.resolve(__dirname, './Public');
app.use(express.static(publicpath));



app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/home.html'));
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

//coment