const express = require('express');
const { Agent, Review } = require('./model');

const app = express();
app.use(express.json());

app.get('/agents', async (req, res, next) => {
  const agents = await Agent.findAll();
  return res.json(agents);
});

app.post('/agents', async (req, res) => {
  const agents = await Agent.create(req.body.agentDatas);
  return res.json(agents);
});

app.get('/agents/:id', async (req, res) => {
  const agent = await Agent.findByPk(req.params.id);

  if (!agent) {
    return res.status(404).end();
  }
  return res.json(agent);
});

app.post('/reviews', async (req, res) => {
  const review = await Review.create(req.body.reviewData)

  return res.json(review)
});

app.get('/agents/:id/reviews', async (req, res) => {
  const agent = await Agent.findByPk(req.params.id);
  console.log(req.params)

  if (!agent) {
    return res.status(404).end();
  }
  const reviews = await agent.getReviews();

  return res.json(reviews)
});

app.put('/agents/:id', async (req, res) => {
  const [rowsUpdated] = await Agent.update(req.body.agentDatas, {
    where: {
      id: req.params.id
    }
  });

  if (rowsUpdated === 0) {
    return res.status(404).end();
  } else {
    return res.json({ rowsUpdated }).status(200);
  }
});

app.delete('/agents/:id', async (req, res) => {
  const rowsDeleted = await Agent.destroy({
    where: {
      id: req.params.id
    }
  });

  if (rowsDeleted === 0) {
    return res.status(404).end();
  } else {
    return res.status(204).end();
  }
});

module.exports = app;
