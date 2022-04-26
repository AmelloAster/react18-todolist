import { type VFC, useState, useCallback } from 'react';

import type { TodoList } from './TodoList.type';
import { todoListItemBuilder } from './TodoList.build.type';
import { TodoListItemStatus, TodoListFilterStatus } from './TodoList.enum';
import TodoInputFC from './components/TodoInput';
import TodoItemFC from './components/TodoItem';
import TodoFilterFC from './components/TodoFilter';

const TodoListFC: VFC = () => {
    const [todoList, setTodoList] = useState<TodoList.Item[]>([]);
    const [allTodoList, setAllTodoList] = useState<TodoList.Item[]>([]);

    const handleAddTodoItem = (value: string) => {
        if (value) {
            const newItem = todoListItemBuilder();
            newItem.content = value;
            setTodoList((old) => [...old, newItem]);
            setAllTodoList((old) => [...old, newItem]);
        }
    };

    const handleRemoveTodoItem = (id: number) => {
        const fn = (old: TodoList.Item[]) => old.filter((item) => item.id !== id);
        setTodoList(fn);
        setAllTodoList(fn);
    };

    const handleChangeTodoItemStatus = (id: number, status: TodoListItemStatus) => {
        const fn = (old: TodoList.Item[]) => {
            const newList = old.map((item) => {
                if (item.id === id) {
                    item.status = status;
                }
                return item;
            });
            return newList;
        };
        setTodoList(fn);
        setAllTodoList(fn);
    };

    const handleChangeTodoListFilterStatus = useCallback(
        (status: TodoListFilterStatus) => {
            if (status === TodoListFilterStatus.All) {
                setTodoList(allTodoList);
            } else {
                let itemStatus = TodoListItemStatus.Active;
                switch (status) {
                    case TodoListFilterStatus.Active:
                        itemStatus = TodoListItemStatus.Active;
                        break;
                    case TodoListFilterStatus.Completed:
                        itemStatus = TodoListItemStatus.Completed;
                        break;
                }

                setTodoList(() => allTodoList.filter((item) => item.status === itemStatus));
            }
        },
        [allTodoList],
    );

    return (
        <div className="h-full w-full flex items-center justify-center bg-teal-500 font-sans">
            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 ">
                <div className="mb-4">
                    <h1 className="text-grey-darkest text-xl font-medium">Todo List</h1>
                    <TodoInputFC handleAddTodoItem={handleAddTodoItem} />
                </div>
                <div>
                    {todoList.map((i) => (
                        <TodoItemFC
                            key={i.id}
                            item={i}
                            handleChangeTodoItemStatus={handleChangeTodoItemStatus}
                            handleRemoveTodoItem={handleRemoveTodoItem}
                        />
                    ))}
                </div>
                <TodoFilterFC handleChangeTodoListFilterStatus={handleChangeTodoListFilterStatus} />
            </div>
        </div>
    );
};

export default TodoListFC;
