import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ITodo {
  id: number;
  body: string;
  userId: string;
  title: string;
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private url = 'https://jsonplaceholder.typicode.com/todos/';

  constructor(private http: HttpClient) {}

  getAllTodos() {
    return this.http.get(this.url);
  }

  updateToDo(todoObj: string, toDoId: number) {
    return this.http.put<ITodo>(`${this.url}${toDoId}`, todoObj, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }

  deleteToDo(todoId: number) {
    return this.http.delete(`${this.url}${todoId}`);
  }
}
