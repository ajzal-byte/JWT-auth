require('dotenv').config();

const express = require('express');
const app = express()

const jwt = require('jsonwebtoken');

app.use(express.json());

const posts = [
  {
    username: "Michael Scott",
    role: "Regional Manager"
  },
  {
    username: "Dwight Schrut",
    role: "Assistant to the Regional Manager"
  },
]

app.get('/posts', verifyToken, (req, res)=>{
  res.json(posts.filter(post=> post.username == req.user.name));
});

function verifyToken(req, res, next) {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  if(!token) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
    if(err) return res.sendStatus(403);
    req.user = user;
    next();
  })
}

app.listen(3000, ()=>{
  console.log('Server started on http://localhost:3000');
})
