import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import UserDashboard from "./pages/userDashboard";
import JobListing from "./pages/jobListing";
import JobDetails from "./pages/jobDetails";
import RootLayout from "./components/rootLayout";
import AuthLayout from "./components/authLayout";
import { Ajax, getFromLocalStorage, storeInLocalStorage } from "./helper";
import { useEffect, useMemo, useState } from "react";
import Bookmarked from "./pages/bookmarked";
import { BookmarksContext } from "./contexts";

function App() {
  const [jobs, setJobs] = useState([]);

  const [bookmarkIds, setBookmarkIds] = useState(
    () => getFromLocalStorage("bookmarks") ?? [],
  );

  useEffect(() => {
    storeInLocalStorage("bookmarks", bookmarkIds);
  }, [bookmarkIds]);

  const bookmarksValue = useMemo(
    () => ({ bookmarkIds, setBookmarkIds }),
    [bookmarkIds],
  );

  useEffect(() => {
    async function loadJobs() {
      const data = await Ajax("/api/jobs");
      setJobs(data);
    }
    loadJobs();
  }, []);
  return (
    <BrowserRouter>
      <BookmarksContext.Provider value={bookmarksValue}>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<LandingPage jobs={jobs} />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/saved" element={<Bookmarked jobs={jobs}/>} />
            <Route path="/jobs" element={<JobListing Jobs={jobs} />} />
            <Route path="/jobs/:id" element={<JobDetails />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
        </Routes>
      </BookmarksContext.Provider>
    </BrowserRouter>
  );
}

export default App;
