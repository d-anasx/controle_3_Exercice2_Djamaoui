import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ViewUser from './components/ViewUser';
import UserForm from './components/UserForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view/:id" element={<ViewUser />} />
          <Route path="/edit/:id" element={<UserForm />} />
          <Route path="/add" element={<UserForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
