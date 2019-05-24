import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { TodosProvider } from './context/TodosContext';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

const TodoApp = () => {

  return (
    <Paper style={{ background: '#fafafa', height: '100vh', margin: 0, padding: 0 }} elevation={0}>
      <AppBar color='primary' position='static' style={{ height: '64px' }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify='center' style={{ margin: '1rem 0 0' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp;