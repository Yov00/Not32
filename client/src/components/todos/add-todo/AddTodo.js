import React,{useEffect,useState} from 'react'
import {Form,Button} from 'react-bootstrap';
import axios from 'axios';
import Flash from '../../layouts/flash/Flash';

import "./add-todo.styles.css";

const AddTodo = () => {
    const [name,setName] = useState('');
    const [date,setDate] = useState('');
    const [flashMsg,setFlashMsg] = useState('');
    const [flashVariant,setFlashVariant] = useState('');
    const [showFlash,setShowFlash] = useState(false);

    const handleSubmit =async (e)=>{
        e.preventDefault();
        let todo = {
            name:name,
            date:date
        }

        try{
            const newTodo = await axios.post('http://localhost:3500/api/todos/create-todo',todo);
            if(newTodo.status===200){
                setName('');
                setDate('');
                setShowFlash(true);
                setFlashMsg('Successfully Created Task');
                setFlashVariant('success');
            }
            else{
                setShowFlash(true);
                setFlashMsg('Failed to Create Task');
                setFlashVariant('danger');
            }
            
        }catch(err){

            setShowFlash(true);
            setFlashMsg('Failed to Create Task');
            setFlashVariant('danger');
            console.log(err);
        }
    }
    return (
        <Form onSubmit={e => handleSubmit(e)} className="container add-todo-form my-15">
            <Form.Group >
            <Form.Label>Task to be done</Form.Label>
                <Form.Control
                    size="sm" 
                    type="text" 
                    placeholder="Large text" 
                    value={name} 
                    name="name"
                    onChange={ e=> setName(e.target.value)}
                 />

                <br />
                <Form.Label>Date To be done</Form.Label>
                <Form.Control
                    size="sm"
                    type="date"
                    value={date} 
                    name="date"
                    onChange={ e=> setDate(e.target.value)}
                   />
                <br />
                <Button size="sm" type="submit" className="btn btn-success add-todo-btn" >Add New</Button>
            </Form.Group>
            <Flash msg={flashMsg} variant={flashVariant} show={showFlash} />
        </Form>
    )
}

export default AddTodo
