const express = require('express');

const app = express();
const port = 7865;
app.listen(port, console.log(`API available on localhost port ${port}`));
app.use(express.json())

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  console.log(`${req.params.id}`)
  res.end(`Payment methods for cart ${req.params.id}`);
})

app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  })
});
app.post('/login', (req, res) => res.end(`Welcome ${req.body.userName}`));

module.exports = [app, port];
