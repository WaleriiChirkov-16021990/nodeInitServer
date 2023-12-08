'use strict';
// import uuid from "uuid";
// const uuid = require('uuid');
// console.log('Hello, World!');
// console.log(uuid.v4());
//
//
// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов (404).
// — * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.
const http = require('http');

const serverLocal = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write('<h1>Главная страница</h1>');
        res.write('<a href="/about">Гиперссылка на страницу "О сайте"</a>');
        res.end();
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write('<h1>Страница "О сайте"</h1>');
        res.write('<a href="/">Гиперссылка на главную страницу</a><br>');
        res.write('<a href="/somelink">Гиперссылка на несуществующую страницу</a>');
        res.end();
    } else {
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
        res.write('<h1>404 Not Found</h1>');
        res.write('<a href="/">Гиперссылка на главную страницу</a>');
        res.end();
    }
});
serverLocal.listen(3000);
