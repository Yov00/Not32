const Sequelize = require('sequelize');
const db = require('../config/database');

const Todo = db.define('todo',{
    name:{
        type:Sequelize.STRING
    },
    date:{
        type:Sequelize.DATE,
        defaultValue:Date.now()
    },
    completed:{
        type: Sequelize.BOOLEAN,
        defaultValue:false
    },
    createdAt:{
        type:Sequelize.DATE
    },
    updatedAt:{
        type:Sequelize.DATE
    },
    
});

module.exports = Todo;