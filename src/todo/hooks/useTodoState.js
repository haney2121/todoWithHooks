import uuid from 'uuid/v1';
import { useLocalStorageState } from './useLocalStorageState';

export default initialTodos => {
  const [todos, setTodos] = useLocalStorageState('todos', initialTodos);

  return {
    todos,
    addTodo: newTask => {
      setTodos([...todos, { id: uuid(), task: newTask, isCompleted: false }])
    },
    removeTodo: todoId => {
      const updatedTodos = todos.filter(todo => todoId !== todo.id)
      setTodos(updatedTodos);
    },
    toggleTodo: todoId => {
      const updatedTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
      setTodos(updatedTodos);
    },
    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      )
      setTodos(updatedTodos);
    }
  }
}