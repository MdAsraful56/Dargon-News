import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import Root from './components/Root/Root'
import Home from './components/Home/Home'
import HomeLayout from './components/HomeLayout/HomeLayout'
import Login from './components/Login/Login'
import Registration from './components/Registration/Registration'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <Root /> }>
        <Route index element={ <Home /> } /> 
        <Route path='/login' element={ <Login /> } />
        <Route path='/registration' element={ <Registration /> } />
        <Route path='/' element={  <HomeLayout /> } > 
          <Route path='category/:category_id}' element={ <h2>This is category</h2> } />
        </Route>

      </Route>
    )
  )

  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
