const Todo = require('../models/Todo');


exports.getAllTodos = async (req,res,next)=>{
    let data = {
        data:[],
        msg:''
    }
    try{
        const allTodos = await Todo.findAll({
            order:[
                ['date','DESC']
            ]
        });
        data = {
            data:allTodos,
            msg:'success'
        }
        res.status(200).json(data);

    }catch(err){
        console.log(err);
        data = {
            msg:'server error'
        }       
        res.status(500).json(data)
    }
}

exports.createTodo = async (req,res,next)=>{
    const {name,date} = req.body;
    console.log(req.body)
    let data ={
        data:[],
        msg:''
    }
    if(name){
        try{
            const newTodo  = await  Todo.create({
                name:name,
                date:date,
            });
            data = {
                data:newTodo,
                msg:'success'
            }
            res.status(200).json(data);
        }catch(err){
            console.log(err);
        }
    }else{
        data = {
            data:[],
            msg: 'failed'
        }
        res.status(400).json(data);
    }
}

exports.deleteTodo = async (req,res,next)=>{
    const {id}  = req.params;
    let data = {
        data:[],
        msg:''
    }

    try{
        const deletedTodo = await Todo.destroy({
            where:{
                id:id
            }
    });
    data = {
        data: deletedTodo,
        msg:  'success'
    }
    res.status(200).json(data);

    }catch(err){
        console.log(err);
        data = {
            data: [],
            msg:'server error'
        }
        res.status(500).json(data);
    }
}

exports.updateTodo = async(req,res,next)=>{
    const {id} = req.params;
    
    try{
        let todo = await Todo.findAll({
            where:{id:id},
            limit:1
        });
        
    //   todo.save({
    //       completed:!todo.completed
    //   });
    todo[0].completed = !todo[0].completed;
    const updatedTodo =   await todo[0].save();
    console.log(updatedTodo)
    
    }catch(err){
        console.log(err);
        res.status(500).json('Server Error');
    }


    return res.json('Chaki malko sq');
}