import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">Users</div>
        <div>
          <Link to="/" className="text-white mx-4 hover:underline">Home</Link>
          <Link to="/add" className="text-white mx-4 hover:underline">Add User</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

