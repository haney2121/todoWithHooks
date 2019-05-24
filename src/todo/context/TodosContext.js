import React, { createContext } from 'react';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';
import todoReducer from '../reducers/todoReducer';

export const TodosContext = createContext();
export const DispatchContext = createContext();

const initialTodos = [
  { id: 1, task: 'Testing 1', isCompleted: false },
  { id: 2, task: 'Testing 2', isCompleted: false },
  { id: 3, task: 'Testing 3', isCompleted: true }
]

export const TodosProvider = props => {
  const [todos, dispatch] = useLocalStorageReducer('todos', initialTodos, todoReducer)
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}

