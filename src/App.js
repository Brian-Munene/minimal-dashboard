import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './pages/Login';
import CountriesPage from './pages/Countries';
import UserProfilePage from './pages/UserProfile'
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  const user = JSON.parse(localStorage.getItem('user'))
  
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
        <ToastContainer position="top-center"
                        autoClose={3000}
                        pauseOnFocusLoss={false}
        />
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/" 
              element={
                <ProtectedRoute 
                  isAllowed={
                    !!user && user.permissions?.includes('view_countries')
                  }
                >
                  <CountriesPage/>
                </ProtectedRoute>
              } 
            />
            <Route path="/profile" element={<UserProfilePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;
