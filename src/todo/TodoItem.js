import React, { useContext, memo } from 'react';
import TodoEdit from './TodoEdit';
import useToggle from './hooks/useToggle';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from '@material-ui/icons/Cancel';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import { DispatchContext } from './context/TodosContext';

const TodoItem = props => {
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggleIsEditing] = useToggle(false);
  const { id, task, isCompleted } = props
  const deleteTodo = () => {
    dispatch({ type: 'REMOVE', id: id });
  }
  const togglingTodo = () => {
    dispatch({ type: 'TOGGLE', id: id });
  }
  console.log(`TODO RE-RENDER: ${task}`)
  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ?
        <>
          <TodoEdit {...props} toggleIsEditing={toggleIsEditing} />
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={toggleIsEditing}>
              <CancelIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </> :
        <>
          <Checkbox tabIndex={-1} checked={isCompleted} onClick={togglingTodo} />
          <ListItemText style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={deleteTodo}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggleIsEditing}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      }
    </ListItem>
  )
}

export default memo(TodoItem);