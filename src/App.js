import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './pages/Login';
import CountriesPage from './pages/Countries';
import UserProfilePage from './pages/UserProfile'


function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/" element={<CountriesPage/>} />
            <Route path="/profile" element={<UserProfilePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;
