const express = require('express');
const server = express();
const expresssession = require('express-session')
const bodyParser = require('body-parser')
const PORT = 3000;

//ตั้งค่า session
server.use(expresssession({
    secret: 'ryojun',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));


// ตั้งค่าการparseตัวแปรเมื่อมีการส่งข้อมูลเข้ามา
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());


server.post("/", (req, res) => res.json(req.body));
server.get('*', (req, res) => {
    res.end(`<h1>Server is started.</h1>`);
});

server.listen(PORT, () => console.log(`Server is started. Port ${PORT}.`));
