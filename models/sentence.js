const Sequilize = require('sequelize');
const sequilize = require('../util/database');
const Poem = require('./poem');

const Sentence = sequilize.define('sentence', {
    id: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    poem_id: {
        type: Sequilize.INTEGER,
        references: {
            model: Poem,
            key: 'id',
            // This declares when to check the foreign key constraint. PostgreSQL specific.
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    line: {
        type: Sequilize.TEXT
    },
    order: {
        type: Sequilize.SMALLINT
    }
});

module.exports = Sentence;

