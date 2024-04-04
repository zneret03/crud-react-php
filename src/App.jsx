import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'; //npm i react-router-dom --save
import './App.css';
import CreateUser from './CreateUser';
import EditUser from './EditUser';
import ListUser from './ListUser';

function App() {
  return (
    <div className="container">
    <div className="App">
      <BrowserRouter>
        <Link to="user/create" className="btn btn-success">Add New User</Link>
 
        <Routes>
          <Route index element={<ListUser />} />
          <Route path="user/create" element={<CreateUser />} />
          <Route path="user/:id/edit" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}
 
export default App;
