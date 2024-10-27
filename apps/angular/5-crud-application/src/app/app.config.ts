import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { TodoEffectsService } from './todo.effects';
import { todosReducer } from './todo.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideStore(),
    provideState({ name: 'todos', reducer: todosReducer }),
    provideEffects(TodoEffectsService),
  ],
};
