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
import AccessDenied from './pages/AccessDenied'


function App() {

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
            <Route path="/access/denied" element={<AccessDenied/>}/>
            <Route path="/" 
              element={
                <ProtectedRoute
                    redirectPath="/access/denied"
                    requestPath="/"
                >
                  <CountriesPage/>
                </ProtectedRoute>
              } 
            />
            <Route
                path="/profile"
                element={
                    <ProtectedRoute
                        redirectPath="/login"
                        requestPath="/profile"
                        >
                        <UserProfilePage/>
                    </ProtectedRoute>
                }
            />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;
