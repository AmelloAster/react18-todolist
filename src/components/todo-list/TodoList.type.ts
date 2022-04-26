import { TodoListItemStatus } from './TodoList.enum';

export namespace TodoList {
    export interface Item {
        content: string;
        id: number;
        status: TodoListItemStatus;
    }
}
