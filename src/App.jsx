import React, { Fragment, Suspense } from "react";
import SignInPage from "./pages/signIn/SignInPage";
import JobDetailPage from "./pages/jobDetail/JobDetailPage";
import CvInformationPage from "./pages/cvInformation/CvInformationPage";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import { Route, Routes } from "react-router-dom";
import Main from "./components/shared/Main";
import HomePage from "./pages/home/HomePage";
import JobSavePage from "./pages/jobSave/JobSavePage";
import CvUploadedPage from "./pages/cvUploaded/CvUploadedPage";
import JobPostPage from "./pages/jobPost/JobPostPage";
import LayoutEmployer from "./components/shared/LayoutEmployer";

function App() {
  return (
    <Fragment>
      <ScrollToTop />
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={<Main />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/account.stacky.vn" element={<SignInPage />} />
            <Route path="/company" element={<JobDetailPage />} />
            <Route path="/job-save" element={<JobSavePage />} />
            <Route path="/profile-cv" element={<CvInformationPage />} />
            <Route path="/uploaded-cv" element={<CvUploadedPage />} />
          </Route>
          <Route element={<LayoutEmployer />}>
            <Route path="/tools" element={<JobPostPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
