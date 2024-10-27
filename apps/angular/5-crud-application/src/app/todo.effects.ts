import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { loadTodosSuccess } from './todo.actions';
import { ITodo, TodoService } from './todo.service';

@Injectable()
export class TodoEffectsService {
  constructor(
    private actions$: Actions,
    private todosService: TodoService,
  ) {}

  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType('Load Todos'),
      exhaustMap(() =>
        this.todosService.getAllTodos().pipe(
          map((todos) => loadTodosSuccess({ todos: todos as ITodo[] })),
          catchError(() => of({ type: 'Load Todos Error' })),
        ),
      ),
    );
  });
}
