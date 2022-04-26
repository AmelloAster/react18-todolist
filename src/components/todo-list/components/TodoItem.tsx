import { type VFC, memo, useMemo } from 'react';

import type { TodoList } from '../TodoList.type';
import { TodoListItemStatus } from '../TodoList.enum';

interface Props {
    item: TodoList.Item;
    handleChangeTodoItemStatus: (id: number, status: TodoListItemStatus) => void;
    handleRemoveTodoItem: (id: number) => void;
}
export const TodoItemFC: VFC<Props> = (props) => {
    const { item, handleRemoveTodoItem, handleChangeTodoItemStatus } = props;

    const itemContentClass = useMemo(() => {
        const className = 'w-[80%] ';
        if (item.status === TodoListItemStatus.Completed) {
            return className + 'line-through text-green-500';
        }
        return className + 'text-grey-darkest';
    }, [item.status]);

    const ChangeStatusAction = useMemo(() => {
        if (item.status === TodoListItemStatus.Active) {
            return (
                <button
                    onClick={() =>
                        handleChangeTodoItemStatus(item.id, TodoListItemStatus.Completed)
                    }
                    className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500">
                    Active
                </button>
            );
        }
        if (item.status === TodoListItemStatus.Completed) {
            return (
                <button
                    onClick={() => handleChangeTodoItemStatus(item.id, TodoListItemStatus.Active)}
                    className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-500 border-gray-300 hover:bg-slate-400">
                    Complete
                </button>
            );
        }
    }, [item.status]);

    return (
        <div className="flex mb-4 items-center justify-between">
            <p className={itemContentClass}>{item.content}</p>
            <div className="flex justify-end">
                {ChangeStatusAction}
                <button
                    className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500"
                    onClick={() => handleRemoveTodoItem(item.id)}>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default memo(TodoItemFC);
