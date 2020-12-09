const app = require('express');
const router = app.Router();

const {
    getAllTodos,
    deleteTodo,
    createTodo,
    updateTodo
} = require('../controllers/TodosController');

router.get('/',getAllTodos);
router.delete('/:id',deleteTodo);
router.post('/create-todo',createTodo);
router.patch('/update-todo/:id',updateTodo); 

module.exports = router;