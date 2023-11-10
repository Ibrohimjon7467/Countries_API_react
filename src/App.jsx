import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//layout
import RootLayout from './layout/RootLayout';

//pages
import Home from './pages/Home';
import SingleCountry from './components/SingleCountry';

function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: "singleCountry/:country",
          element: <SingleCountry/>
        },
      ],
    }
  ])

  return <RouterProvider router={routes}/>
}

export default App