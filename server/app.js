const express = require('express');
// import express from "express";
const app = express();
const path = require('path');
// import path from 'path';
//const fetch = require('node-fetch');
// import fetch from "node-fetch";
const cors = require('cors');
// import cors from "cors";
const PORT = process.env.PORT || 8080;

// app.use(express.static(path.join(__dirname, '../frontend', 'build')));

app.use(
    cors({ 
        origin: ['http://localhost', 'https://kanban.sunaarisu.com', 'http://kanban.sunaarisu.com'], 
        methods: ['GET', 'POST', 'PATCH'], 
        credentials: true
    })
);

app.get('/api/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.get('/api/posts', (req, res) => {
  // fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then((response) => response.json())
  //   .then((json) => res.json(json));

  return res.json(
    [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      }
    ]
  )
});

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'));
// });

app.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}`);
});