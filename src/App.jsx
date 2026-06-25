import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import UserDashboard from "./pages/userDashboard";
import JobListing from "./pages/jobListing";
import JobDetails from "./pages/jobDetails";
import RootLayout from "./components/rootLayout";
import AuthLayout from "./components/authLayout";
import {
  Ajax,
  deleteFromLocalStorage,
  getFromLocalStorage,
  storeInLocalStorage,
} from "./helper";
import { useEffect, useMemo, useState } from "react";
import Bookmarked from "./pages/bookmarked";
import { AuthContext, BookmarksContext } from "./contexts";

function App() {
  const [jobs, setJobs] = useState([]);
  const [user, setUser] = useState(
    () => getFromLocalStorage("auth")?.user ?? null,
  );
  const [token, setToken] = useState(
    () => getFromLocalStorage("auth")?.token ?? null,
  );

  const [bookmarkIds, setBookmarkIds] = useState(
    () => getFromLocalStorage("bookmarks") ?? [],
  );

  const login = function (authData) {
    setUser(authData.user);
    setToken(authData.token);
    storeInLocalStorage("auth", authData);
  };
  const logout = function () {
    setUser(null);
    setToken(null);
    deleteFromLocalStorage("auth");
  };

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
      <AuthContext.Provider value={{ user, token, login, logout }}>
        <BookmarksContext.Provider value={bookmarksValue}>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<LandingPage jobs={jobs} />} />
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/saved" element={<Bookmarked jobs={jobs} />} />
              <Route path="/jobs" element={<JobListing Jobs={jobs} />} />
              <Route path="/jobs/:id" element={<JobDetails />} />
            </Route>
            <Route element={<AuthLayout />}>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Route>
          </Routes>
        </BookmarksContext.Provider>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
