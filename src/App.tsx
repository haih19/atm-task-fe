import './App.css';
import { Route, Routes, useRoutes } from 'react-router-dom';
import { routes } from './routes/routes.routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PrivateRoute } from './routes/private.routes';
import { HomePage } from './pages/home';
import { LoginPage } from './pages/auth/login';

function App() {
   // const element = useRoutes(routes);
   return (
      <div className="App">
         <Routes>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route
               path="/"
               element={
                  <PrivateRoute>
                     <HomePage />
                  </PrivateRoute>
               }></Route>
         </Routes>

         <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
         />
         <ToastContainer />
      </div>
   );
}

export default App;
