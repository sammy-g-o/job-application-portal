import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import UserDashboard from "./pages/userDashboard";
import JobListing from "./pages/jobListing";
import JobDetails from "./pages/jobDetails";
import RootLayout from "./components/rootLayout";
import AuthLayout from "./components/authLayout";
import { Ajax } from "./helper";
import { useEffect, useState } from "react";

function App() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    async function loadJobs() {
      const data = await Ajax("/api/jobs");
      setJobs(data);
    }
    loadJobs();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<LandingPage jobs={jobs} />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/jobs" element={<JobListing Jobs={jobs} />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
