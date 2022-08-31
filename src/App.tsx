import './App.css';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes/routes.routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
   const element = useRoutes(routes);
   return (
      <div className="App">
         {element}
         <ToastContainer
            position="top-right"
            autoClose={5000}
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
