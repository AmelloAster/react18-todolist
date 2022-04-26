import { type VFC, memo, useState } from 'react';

interface Props {
    handleAddTodoItem: (value: string) => void;
}
export const TodoInputFC: VFC<Props> = (props) => {
    const { handleAddTodoItem } = props;
    const [value, setValue] = useState('');

    const handleAdd = () => {
        handleAddTodoItem(value);
        setValue('');
    };

    return (
        <div className="flex mt-4">
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Add Todo"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal-500"
                onClick={handleAdd}>
                Add
            </button>
        </div>
    );
};

export default memo(TodoInputFC);
