import React, { useState } from "react";
import "./App.css";
import AadharForm from "./component/AdharForm";

function App() {
  const [newAdharData, setNewAdharData] = useState();
  return (
    <div>
      <AadharForm onSubmit={(data) => setNewAdharData({ ...data })} />
      {JSON.stringify(newAdharData)}
    </div>
  );
}

export default App;
