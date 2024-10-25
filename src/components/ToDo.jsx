import { useState } from "react";
import { useDispatch } from "react-redux";
import { RiDeleteBinLine, RiEdit2Line, RiCheckLine, RiCloseLine } from "react-icons/ri";

const ToDo = ({ todo }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(todo.title);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        dispatch({ type: "UPDATE_TODO", payload: { id: todo.id, title: newTitle, completed: todo.completed } });
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setNewTitle(todo.title);
    };

    return (
        <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center">
                <input
                    id={`checkbox-${todo.id}`}
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"

                />
                {isEditing ? (
                    <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="ml-2 text-sm font-medium text-gray-900 bg-gray-100 p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                ) : (
                    <label
                        htmlFor={`checkbox-${todo.id}`}
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        {todo.title}
                    </label>
                )}
            </div>
            <div className="flex gap-2">
                {isEditing ? (
                    <>
                        <button
                            onClick={handleSave}
                            className="p-1 text-white bg-green-500 rounded-full hover:bg-green-600 transition-colors duration-200"
                        >
                            <RiCheckLine />
                        </button>
                        <button
                            onClick={handleCancel}
                            className="p-1 text-white bg-gray-500 rounded-full hover:bg-gray-600 transition-colors duration-200"
                        >
                            <RiCloseLine />
                        </button>
                    </>
                ) : (
                    <button
                        onClick={handleEdit}
                        className="p-1 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-200"
                    >
                        <RiEdit2Line />
                    </button>
                )}
                <button
                    onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
                    className="p-1 text-white bg-red-500 rounded-full hover:bg-red-600 transition-colors duration-200"
                >
                    <RiDeleteBinLine />
                </button>
            </div>
        </div>
    );
};
export default ToDo;


