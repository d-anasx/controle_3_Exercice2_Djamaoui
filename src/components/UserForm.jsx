import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { addUser, editUser } from '../redux/userSlice';
import { useState } from 'react';

function UserForm() {
  const { id } = useParams();
  const user = useSelector(state => state.users.find(user => user.id === Number(id)));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: user?.name || '',
    username: user?.username || '',
    email: user?.email || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      dispatch(editUser({ id: Number(id), ...formData }));
    } else {
      dispatch(addUser(formData));
    }

    navigate('/'); 
  };

  return (
    <div className="container mx-auto py-8">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6">
        <h2 className="text-2xl mb-4">{id ? 'Edit User' : 'Add User'}</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            type="text"
            placeholder="John Doe"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            type="text"
            placeholder="johndoe"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            type="email"
            placeholder="john@example.com"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {id ? 'Save' : 'Add'}
        </button>
      </form>
    </div>
  );
}

export default UserForm;

