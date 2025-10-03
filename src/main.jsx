import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './componenets/Home/Home.jsx'
import Post from './componenets/Post/Post.jsx'
import Browse from './componenets/Browse/Browse.jsx'
import Dashboard from './componenets/Dashboard/Dashboard.jsx'
import Layout from '../Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {Provider} from 'react-redux'
import { store } from './APP/store.js'


const router = createBrowserRouter((
  createRoutesFromElements(
    <Route  path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path='post' element={<Post />} />
      <Route path='browse' element={<Browse />} />
      <Route path='dashboard' element={<Dashboard />} />
    </Route>
  )
))
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    
  </StrictMode>,
)
