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

app.get('/agents/:id', async (req, res) => {
  console.log('Request body:', req.params.id);
  const agent = await Agent.findByPk(req.params.id);

  if (!agent) {
    return res.status(404).end();
  }
  return res.json(agent);
});

module.exports = app;
