import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers, deleteUser } from '../redux/userSlice';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEye, FaPencilAlt, FaTrash } from 'react-icons/fa';

function Home() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  useEffect(() => {
    if (users.length === 0) {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => dispatch(setUsers(response.data)))
        .catch(error => console.log(error));
    }
  }, [dispatch, users.length]);

  return (
    <div className="container mx-auto p-4">
      <table className="table-auto w-full shadow-lg rounded-lg bg-gray-800">
        <thead className="bg-gray-900">
          <tr>
            <th className="px-4 py-2 text-white">#</th>
            <th className="px-4 py-2 text-white">Name</th>
            <th className="px-4 py-2 text-white">Username</th>
            <th className="px-4 py-2 text-white">Email</th>
            <th className="px-4 py-2 text-white">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="border-b border-gray-700 hover:bg-gray-700">
              <td className="px-4 py-2 text-white">{user.id}</td>
              <td className="px-4 py-2 text-white">{user.name}</td>
              <td className="px-4 py-2 text-white">{user.username}</td>
              <td className="px-4 py-2 text-white">{user.email}</td>
              <td className="px-4 py-2">
                <Link to={`/view/${user.id}`} className="flex items-center text-blue-500 hover:text-blue-700 transition duration-300 mr-2">
                  <FaEye className="mr-1 text-white" />
                  View
                </Link>
                <Link to={`/edit/${user.id}`} className="flex items-center text-yellow-500 hover:text-yellow-700 transition duration-300 mr-2">
                  <FaPencilAlt className="mr-1 text-white" />
                  Edit
                </Link>
                <button className="flex items-center text-red-500 hover:text-red-700 transition duration-300" onClick={() => dispatch(deleteUser(user.id))}>
                  <FaTrash className="mr-1 text-white" />
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;

