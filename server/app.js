const express = require('express');
const { Agent } = require('./model');

const app = express();
app.use(express.json());

app.get('/agents', async (req, res, next) => {
  const agents = await Agent.findAll();
  return res.json(agents);
});

app.post('/agents', async (req, res) => {
  console.log('Request body:', req.body);
  const agents = await Agent.create(req.body.agentData);
  return res.json(agents);
});

module.exports = app;
