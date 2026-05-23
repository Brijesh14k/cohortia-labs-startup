import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import HomePage from "./pages/HomePage"
import ConsultationPage from "./pages/ConsultationPage"

import WebDevelopmentPage from "./pages/WebDevelopmentPage"
import UiUxPage from "./pages/UiUxPage"
import StartupGrowthPage from "./pages/StartupGrowthPage"

import AboutPage from "./pages/AboutPage"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/consultation"
          element={<ConsultationPage />}
        />

        <Route
          path="/services/web-development"
          element={<WebDevelopmentPage />}
        />

        <Route
          path="/services/ui-ux"
          element={<UiUxPage />}
        />

        <Route
          path="/services/startup-growth"
          element={<StartupGrowthPage />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App