import uuid from 'uuid/v1';

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: uuid(), task: action.task, isCompleted: false }];
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
    case 'EDIT':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, task: action.newTask } : todo
      );
    default:
      return state;
  }
}

export default todoReducer;