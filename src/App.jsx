import Header from "./components/Header";

import { FeedbackList } from "./components/FeedbackList";
import { useState } from "react";
import { FeedbackData } from "./data/FeedbackData";
export function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />
      <div>
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}
export default App;
