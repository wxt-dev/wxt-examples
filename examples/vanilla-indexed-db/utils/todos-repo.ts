import { defineProxyService } from '@webext-core/proxy-service';
import { IDBPDatabase } from 'idb';

export interface Todo {
  id: string;
  title: string;
  done?: boolean;
}

export interface TodosRepo {
  createOrUpdate(todo: Todo): Promise<void>;
  delete(todo: Todo): Promise<void>;
  getOne(id: Todo['id']): Promise<Todo>;
  getAll(): Promise<Todo[]>;
}

function createTodosRepo(db: Promise<IDBPDatabase>): TodosRepo {
  return {
    async createOrUpdate(todo) {
      await (await db).put('todos', todo);
    },
    async delete(todo) {
      await (await db).delete('todos', todo.id);
    },
    async getOne(id) {
      return await (await db).get('todos', id);
    },
    async getAll() {
      return await (await db).getAll('todos');
    },
  };
}

export const [registerTodosRepo, getTodosRepo] = defineProxyService(
  'todos-repo',
  createTodosRepo,
);
