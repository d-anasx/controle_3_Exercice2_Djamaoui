import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function ViewUser() {
  const { id } = useParams();
  const user = useSelector(state => state.users.find(user => user.id === Number(id)));

  if (!user) return <div className="flex justify-center items-center h-screen text-white">User not found</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
        <p className="mb-2"><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
}

export default ViewUser;

