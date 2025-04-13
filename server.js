const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('MONGODB_URI', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.log(err));

app.use('/api/users', require('./routes/users'));

app.listen(port, () => {
  console.log(`Servidor en el puerto ${port}`);
});
