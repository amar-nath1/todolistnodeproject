const Sequelize=require('sequelize')
const sequelize=require('../util/database')

const Todo=sequelize.define('todo',{
        id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
        },
        todoname:Sequelize.STRING,
        tododesc:Sequelize.STRING,
        done:Sequelize.BOOLEAN
})


module.exports=Todo