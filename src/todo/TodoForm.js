import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

import { DispatchContext } from './context/TodosContext';

const TodoForm = props => {
  const dispatch = useContext(DispatchContext);
  const [value, valueChange, resetValue] = useInputState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD', task: value });
    resetValue();
  }

  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form onSubmit={handleSubmit}>
        <TextField margin='normal' label='Add New Todo' fullWidth value={value} onChange={valueChange} />
      </form>
    </Paper>
  )
}

export default TodoForm;