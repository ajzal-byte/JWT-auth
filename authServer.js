require('dotenv').config();

const express = require('express');
const app = express()

const jwt = require('jsonwebtoken');

app.use(express.json());


app.post('/login', (req, res)=>{
  // Authenticate User

  const username = req.body.username;
  const user = {name: username};

  const acessToken = generateAcessToken(user);
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
  refreshTokens.push(refreshToken);
  res.json({acessToken, refreshToken});
});

let refreshTokens = [];

app.post('/token', (req, res)=>{
  const refreshToken = req.body.token;
  console.log(refreshToken);
  console.log(refreshTokens);
  console.log(refreshTokens.includes(refreshToken));
  if(!refreshToken) return res.sendStatus(401);
  if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user)=>{
    if(err) return res.sendStatus(403);
    const acessToken = generateAcessToken({name: user.name})
    res.json({acessToken});
  });
});

app.delete('/logout', (req, res)=>{
  refreshTokens = refreshTokens.filter(token=> token !== req.body.token);
  res.sendStatus(204);
})

function generateAcessToken(user){
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '25s'});
}
app.listen(4000, ()=>{
  console.log('Auth Server started on http://localhost:4000');
})
