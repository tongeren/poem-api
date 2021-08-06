const express = require('express');
const sequelize = require('./util/database');

const Poem = require('./models/poem');
const Sentence = require('./models/sentence');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const apiRoutes = require('./routes/api');

app.use(apiRoutes);

Sentence.belongsTo(Poem, { constraints: true, onDelete: 'CASCADE' });
Poem.hasMany(Sentence);

sequelize
    .sync()
    .then(result => {
        console.log(result);
    })
    .then(() => {
        app.listen(PORT);
    })
    .catch(err => {
        console.log(err);
    });

