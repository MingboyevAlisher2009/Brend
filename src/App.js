import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
