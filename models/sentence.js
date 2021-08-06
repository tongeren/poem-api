const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const Poem = require('./poem');

const Sentence = sequelize.define('sentence', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    poem_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Poem,
            key: 'id',
            // This declares when to check the foreign key constraint. PostgreSQL specific.
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    line: {
        type: Sequelize.TEXT
    },
    order: {
        type: Sequelize.SMALLINT
    }
});

module.exports = Sentence;

