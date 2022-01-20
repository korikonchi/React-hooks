import Header from "./components/Header";

import { FeedbackList } from "./components/FeedbackList";
import { useState } from "react";
import { FeedbackData } from "./data/FeedbackData";
export function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  //
  const deleteFeedback = (e) => {
    console.log("APP", e);
    //
  };
  return (
    <>
      <Header />
      <div>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}
export default App;
