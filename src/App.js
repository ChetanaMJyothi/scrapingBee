import './App.css';
import Search from './components/Search.js';
import {
  createBrowserRouter,
 
  RouterProvider,
} from "react-router-dom";
import One from './components/One';
import Two from './components/Two'
import Three from './components/Three'
import Four from './components/Four'
import Five from './components/Five'
import { useSelector } from 'react-redux'
function App() {
  const arrayRes = useSelector((state) => state.resultarray.arrayVar)
  const arrayOfUrl = useSelector((state) => state.resultarray.arryUrl)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Search />,


      children:[
        {
          path: "one",
          element: <One disData={arrayRes[0]} urlData={arrayOfUrl[0]} />
        },
        {
          path: "two",
          element: <Two disData={arrayRes[1]} urlData={arrayOfUrl[1]}/>
        },
        {
          path: "three",
          element: <Three disData={arrayRes[2]} urlData={arrayOfUrl[2]}/>
        },
        {
          path: "four",
          element: <Four disData={arrayRes[3]} urlData={arrayOfUrl[3]}/>
        },
        {
          path: "five",
          element: <Five disData={arrayRes[4]} urlData={arrayOfUrl[4]}/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
