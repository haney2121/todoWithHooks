import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import uuid from 'uuid/v1';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import { TodosContext } from './context/TodosContext';

const TodoList = () => {
  const todos = useContext(TodosContext);
  if (todos.length) {
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <div key={todo.id} >
              <TodoItem {...todo} />
              {i < todos.length - 1 && <Divider key={uuid()} />}
            </div>
          ))}
        </List>
      </Paper>
    )
  }
  return null;
}

export default TodoList;