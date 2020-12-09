import React,{useState} from 'react'
import {ListGroup,Form} from 'react-bootstrap';
import axios from 'axios';

import './todos_item_styles.css';

const TodosItem = ({id,name,date,completed,modifyTodo}) => {
    const [taskCompleted,setTaskCompleted] = useState(false);

    const handleChange = async (e)=>{
      setTaskCompleted(!taskCompleted);
      try{
            const newTodo = await axios.patch('http://localhost:3500/api/todos/update-todo/'+id);
            document.location.reload(true);
            
      }catch(err){
          console.log(err)
      }
    }

    return (
        <ListGroup.Item>
            <Form  className="d-flex  todos-item " style={{textDecoration:completed ? 'line-through' : 'none'}}>
            <div>
                <Form.Check defaultChecked={completed}  onChange={()=>handleChange()}></Form.Check>
            </div>
            <div style={{flex:'5'}}>
                {name}
            </div>
            <div style={{float:'right'}}>
                {date}
            </div>
            </Form>
        </ListGroup.Item>

    )
}

export default TodosItem
