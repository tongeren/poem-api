const Sequilize = require('sequelize');
const sequilize = require('../util/database');

const Poem = sequilize.define('poem', {
    id: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequilize.TEXT
    },
    location: {
        type: Sequilize.TEXT
    },
    date: {
        type: Sequilize.DATE
    }
});

module.exports = Poem;