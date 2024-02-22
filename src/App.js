import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';
<<<<<<< HEAD
import Search from './components/search/Search';
=======
import Login from './components/login/Login';
import Information from './components/complete information/Information';
>>>>>>> ee7ccd0f812dbd81748f9ecd837dcbe0b3f3cdde


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
<<<<<<< HEAD
      element: <Home />
    },
    {
      path: "/search",
      element: <Search />
    }
=======
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
>>>>>>> ee7ccd0f812dbd81748f9ecd837dcbe0b3f3cdde
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
