import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Students from './components/Students';
import ContactUs from './components/ContactUs';
import Header from './components/Header';
import { StudentContextProvider } from './context';
import EditStudent from './components/EditStudent';
import StudentsLayout from './components/StudentLayout';
import { AddStudent } from './components/AddStudent';

function App() {
  return (
    <div className='App'>
      <Header />
      <StudentContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='students' element={<StudentsLayout />}>
            <Route index element={<Students />} />
            <Route path='edit/:id' element={<EditStudent />} />
            <Route path='add' element={<AddStudent />} />
          </Route>
          <Route path='contact-us' element={<ContactUs />} />
        </Routes>
      </StudentContextProvider>
    </div>
  );
}

export default App;
