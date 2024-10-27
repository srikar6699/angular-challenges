import { createAction, props } from '@ngrx/store';
import { ITodo } from './todo.service';

// Load todos.
export const loadTodos = createAction('Load Todos');
export const loadTodosSuccess = createAction(
  'Load Todos Success',
  props<{ todos: ITodo[] }>(),
);
export const loadTodosError = createAction('Load Todos Error');

export const updateTodo = createAction('Update Todo', props<{ todo: ITodo }>());
export const deleteTodo = createAction(
  'Delete Todo',
  props<{ todoId: number }>(),
);
