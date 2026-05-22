import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import UserDashboard from "./pages/userDashboard";
import JobListing from "./pages/jobListing";
import JobDetails from "./pages/jobDetails";
import RootLayout from "./components/rootLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/jobs" element={<JobListing />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

