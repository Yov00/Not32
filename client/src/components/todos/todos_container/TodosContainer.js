import React,{useState,useEffect} from 'react'
import TodosItem from '../todos_item/TodosItem';
import axios from 'axios';
import {Card,ListGroup} from 'react-bootstrap';

const TodosContainer = () => {
    const [allTodos,setAllTodos] = useState([]);

    useEffect(()=>{
        fetchAllTodos();
    },[]);

    const fetchAllTodos = async ()=>{
        try{
            const todos = await axios.get('http://localhost:3500/api/todos');
            setAllTodos(todos.data.data);

        }catch(err){
            console.log(err);
        }
    }
    const modifyTodo = async (todoId)=>{
        try{
            const updateTodo = await axios.put('http://localhost:3500/api/todos/'+todoId);
            
        }catch(err){
            console.log(err)
        }
    }

    const displayAllTodos = allTodos.length > 0 ? allTodos.map(todo=>(
        <TodosItem key={todo.id} id={todo.id} name={todo.name} date={todo.date} completed={todo.completed} modifyTodo={modifyTodo} />
    ))
    : "There are no todos...";
    return (
        <Card style={{ width: '40%', margin:'200px auto auto auto' }}>
        <Card.Header>Featured</Card.Header>
        <ListGroup variant="flush">
            {displayAllTodos}
        </ListGroup>
      </Card>
    )
}

export default TodosContainer
