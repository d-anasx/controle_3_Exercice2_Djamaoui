import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"

const AddToDo = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [editing, setEditing] = useState(false);

    const handleAdd = () => {
        if(editing) {
          dispatch({ type: 'UPDATE_TODO', payload: { id: Date.now(), title } })
          setEditing(false) 
        } else { 
            dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), title: title, completed: false } })
        }
     
    }

  return (
    <div className="flex items-center gap-2 p-2 bg-white border border-gray-300 rounded-md shadow">
      <input
        type="text"
        placeholder="Add Todo"
        className="w-full px-4 py-2 border border-transparent rounded-md focus:outline-none focus:border-blue-500"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button
        onClick={() => handleAdd()}
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Add
      </button>
    </div>
  )
}

export default AddToDo
