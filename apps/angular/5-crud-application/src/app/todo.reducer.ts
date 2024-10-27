import { createReducer, on } from '@ngrx/store';
import { deleteTodo, loadTodosSuccess, updateTodo } from './todo.actions';
import { ITodo } from './todo.service';

export const todosReducer = createReducer<ITodo[]>(
  [],
  on(loadTodosSuccess, (_, action) => action.todos),
  on(updateTodo, (todos, action) => {
    return todos.map((t: ITodo) => {
      if (t.id == action.todo.id) {
        return action.todo;
      } else {
        return t;
      }
    });
  }),
  on(deleteTodo, (todos, action) => {
    return todos.filter((t) => t.id != action.todoId);
  }),
);
