import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { randText } from '@ngneat/falso';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteTodo, loadTodos, updateTodo } from './todo.actions';
import { ITodo, TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: 'app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  todos!: ITodo[];
  todos$: Observable<ITodo[]>;
  loading = false;

  constructor(
    private todoService: TodoService,
    private store: Store<{ todos: ITodo[] }>,
  ) {
    this.todos$ = store.select('todos');
  }

  ngOnInit(): void {
    // this.loading = true;
    this.store.dispatch(loadTodos());
    // this.todoService.getAllTodos().subscribe((todos) => {
    //   this.todos = todos as ITodo[];
    //   this.loading = false;
    // });
  }

  update(todo: ITodo) {
    this.loading = true;
    this.todoService
      .updateToDo(
        JSON.stringify({
          todo: todo.id,
          title: randText(),
          body: todo.body,
          userId: todo.userId,
        }),
        todo.id,
      )
      .subscribe((todoUpdated: ITodo) => {
        // this.todos = this.todos.map((t) => {
        //   if(t.id == todoUpdated.id) {
        //     return todoUpdated;
        //   } else {
        //     return t;
        //   }
        // });
        this.store.dispatch(updateTodo({ todo: todoUpdated }));

        this.loading = false;
      });
  }

  delete(todoId: number) {
    // delete todo.
    this.loading = true;
    this.todoService.deleteToDo(todoId).subscribe(() => {
      // this.todos = this.todos.filter(t => t.id != todoId);
      this.store.dispatch(deleteTodo({ todoId }));
      this.loading = false;
    });
  }
}
