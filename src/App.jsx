import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/landingPage"
import SignUp from "./pages/signUp"
import SignIn from "./pages/signIn"
import UserDashboard from "./pages/userDashboard"
import JobListing from "./pages/jobListing"
import JobDetails from "./pages/jobDetails"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/jobs" element={<JobListing />} />
          <Route path="/jobs/: details" element={<JobDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
