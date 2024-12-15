import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from '../../Auth/SignUp';
import LMS from '../../LMS/LMS';
import Login from '../../Auth/Login';
import { AuthProvider } from '../../Private/authContext';
import PrivateRoute from '../../Private/PrivateRoute';

export default function AppRouter() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path='/LMS/*' element={<PrivateRoute><LMS /></PrivateRoute>} />
                    {/* <PrivateRoute path="/LMS" element={<LMS />} /> */}
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}
