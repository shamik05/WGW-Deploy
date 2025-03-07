const express = require("express");
const PORT = process.env.PORT || 8080
const fs = require('fs');

const data = JSON.parse(fs.readFileSync("./data.json"));
console.log(data.length);

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/bikes', (req, res) => {
    res.json(data);
})
app.get('/', (req, res) => {
    res.send('Root');
})
app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`);
});