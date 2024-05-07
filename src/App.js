import React, { useState } from "react";
import "./App.css";
import AadharCard from "./component/AdharCard";
import AadharForm from "./component/AdharForm";
import Modal from "./component/Modal";

function App() {
  const [newAdharData, setNewAdharData] = useState(null);
  return (
    <div>
      <AadharForm onSubmit={(data) => setNewAdharData({ ...data })} />
      {newAdharData && (
        <Modal onClickBackdrop={() => setNewAdharData(null)}>
          <AadharCard data={newAdharData} />
        </Modal>
      )}
    </div>
  );
}

export default App;
