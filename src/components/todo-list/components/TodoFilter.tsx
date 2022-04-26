import { type VFC, memo, useState, useCallback } from 'react';
import { TodoListFilterStatus } from '../TodoList.enum';

interface Props {
    handleChangeTodoListFilterStatus(status: TodoListFilterStatus): void;
}

const defaultClassName = 'flex-no-shrink py-2 px-4 border-2 rounded ';

const TodoFilterFC: VFC<Props> = (props) => {
    const { handleChangeTodoListFilterStatus } = props;
    const [filterStatus, setFilterStatus] = useState(TodoListFilterStatus.All);

    const handleChangeFIlterStatus = (status: TodoListFilterStatus) => {
        setFilterStatus(status);
        handleChangeTodoListFilterStatus(status);
    };

    const buttonClassName = useCallback(
        (status: TodoListFilterStatus) => {
            let className = defaultClassName;
            if (status === TodoListFilterStatus.All) {
                className += 'hover:text-white text-blue-500 border-blue-500 hover:bg-blue-500 ';
                if (filterStatus === status) {
                    className += 'bg-blue-500 text-white';
                }
            }
            if (status === TodoListFilterStatus.Active) {
                className += 'hover:text-white text-green-500 border-green-500 hover:bg-green-500 ';
                if (filterStatus === status) {
                    className += 'bg-green-500 text-white';
                }
            }
            if (status === TodoListFilterStatus.Completed) {
                className += 'hover:text-white text-gray-500 border-gray-500 hover:bg-gray-500 ';
                if (filterStatus === status) {
                    className += 'bg-gray-500 text-white';
                }
            }
            return className;
        },
        [filterStatus],
    );

    return (
        <div className="mt-12 flex justify-end gap-4 items-center">
            <span>Filter:</span>
            <button
                onClick={() => handleChangeFIlterStatus(TodoListFilterStatus.All)}
                className={buttonClassName(TodoListFilterStatus.All)}>
                All
            </button>
            <button
                onClick={() => handleChangeFIlterStatus(TodoListFilterStatus.Active)}
                className={buttonClassName(TodoListFilterStatus.Active)}>
                Active
            </button>
            <button
                onClick={() => handleChangeFIlterStatus(TodoListFilterStatus.Completed)}
                className={buttonClassName(TodoListFilterStatus.Completed)}>
                Complete
            </button>
        </div>
    );
};

export default memo(TodoFilterFC);
