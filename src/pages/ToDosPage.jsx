import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import ToDo from '../components/ToDo';
import AddToDo from '../components/AddToDo';

const ToDosPage = () => {
  const API_URL = 'https://jsonplaceholder.typicode.com/todos';

  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state);

  useEffect(() => {
    const fetchUsers = async () => {
      dispatch({ type: 'FETCH_START' });
      try {
        const response = await axios.get(API_URL);
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data.slice(0, 10) });
      } catch (err) {
        dispatch({ type: 'FETCH_ERROR', payload: err.message });
      } finally {
        dispatch({ type: 'FETCH_END' });
      }
    };

    fetchUsers();
  }, [dispatch]);

  if (loading === 'pending') {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-500 text-white">
        <p>Error: {error}</p>
      </div>
    );
  }
  return (
    <div className="container mx-auto p-4 w-[35rem]">
      <AddToDo />
      <div className="grid grid-cols-1 gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow">
        {todos.map((todo) => (
          <ToDo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default ToDosPage;
