import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import SearchComponent from './Components/SearchComponent';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/search' element={<SearchComponent />} />
      </Routes>
    </div>
  );
}

export default App;
