import './App.css';
import SideBar from './components/SideBar';
import DashboardHeader from './components/DashboardHeader';
import HomePage from './pages/Home';
import MoldsPage from './pages/Molds';
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <DashboardHeader />
      <SideBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Molds' element={<MoldsPage />} />
      </Routes>

    </div>
  );
}

export default App;
