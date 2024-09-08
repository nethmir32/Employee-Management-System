import ListEmployeeComponent from './components/ListEmployeeComponent';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap import
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeComponent from './components/EmployeeComponent';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* Home route */}
          <Route path='/' element={<ListEmployeeComponent />} />
          {/* Employees list route */}
          <Route path='/employees' element={<ListEmployeeComponent />} />
          {/* Add new employee route */}
          <Route path='/add-employee' element={<EmployeeComponent />} />
          {/* Edit existing employee route */}
          <Route path='/edit-employee/:id' element={<EmployeeComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
