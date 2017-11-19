const express = require('express');

require('./models/User');

const app = express();


app.get('/', (req,res) => {
  res.send({'hi': 'There'})
})



const PORT = process.env.PORT || 5000;
app.listen(PORT);
