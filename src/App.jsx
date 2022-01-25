import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import { FeeedbackStats } from "./components/FeeedbackStats";
import { FeedbackList } from "./components/FeedbackList";

import { Feedbackforms } from "./components/Feedbackforms";
import { AboutPage } from "../src/pages/AboutPage";
import { AboutIconLink } from "./components/shared/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";
export function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Feedbackforms />
                  <FeeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}
export default App;
