import { TodoList } from './TodoList.type';
import { TodoListItemStatus } from './TodoList.enum';

export const todoListItemBuilder = (content?: string): TodoList.Item => ({
    id: Date.now(),
    status: TodoListItemStatus.Active,
    content: content || '',
});
