import Header from "./components/Header";
import { FeeedbackStats } from "./components/FeeedbackStats";
import { FeedbackList } from "./components/FeedbackList";
import { useState } from "react";
import { FeedbackData } from "./data/FeedbackData";
import { Feedbackforms } from "./components/Feedbackforms";
export function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  //
  const deleteFeedback = (e) => {
    setFeedback(feedback.filter((data) => data.id !== e));
  };

  return (
    <>
      <Header />
      <div className="container">
        <Feedbackforms />
        <FeeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}
export default App;
