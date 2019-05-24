import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';

import { DispatchContext } from './context/TodosContext';


const TodoEdit = props => {
  const dispatch = useContext(DispatchContext);
  const { task, id, toggleIsEditing } = props;
  const [value, valueChange, valueReset] = useInputState(task)

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'EDIT', id: id, newTask: value });
    valueReset();
    toggleIsEditing();
  }

  return (
    <form onSubmit={handleSubmit} style={{ margin: '0 0 0 1rem', width: '80%' }}>
      <TextField value={value} onChange={valueChange} autoFocus />
    </form>
  )
}

export default TodoEdit;