import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import UserDashboard from "./pages/userDashboard";
import JobListing from "./pages/jobListing";
import JobDetails from "./pages/jobDetails";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/jobs" element={<JobListing />} />
          <Route path="/jobs/:details" element={<JobDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
