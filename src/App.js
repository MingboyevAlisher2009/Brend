import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';
import Search from './components/search/Search';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/search",
      element: <Search />
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
