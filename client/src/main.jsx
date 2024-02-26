import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Postulation from './pages/Postulation.jsx'
import ApplicantsPage from "./pages/ApplicantsPage.jsx"
import ProfessionsPage from './pages/ProfessionsPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/postulation",
    element: <Postulation></Postulation>
  },
  {
    path: "/applicants",
    element: <ApplicantsPage></ApplicantsPage>
  },
  {
    path: "/professions",
    element: <ProfessionsPage></ProfessionsPage>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
