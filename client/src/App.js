import React from 'react'; 
import TodosContainer from './components/todos/todos_container/TodosContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/layouts/navigation/Nav';
import AddTodo from './components/todos/add-todo/AddTodo';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      	<Switch>
          <Route exact path="/" component={TodosContainer}/>
          <Route exact path="/add" component={AddTodo}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
