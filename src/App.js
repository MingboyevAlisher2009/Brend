import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';
import Search from './components/search/Search';
import Login from './components/login/Login';
import Information from './components/complete information/Information';


function App() {

  const router = createBrowserRouter([
    { 
      path: "/",
      element: <Home />
    },
    {
      path: "/search",
      element: <Search />
    },
    {
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "information",
      element: <Information />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
