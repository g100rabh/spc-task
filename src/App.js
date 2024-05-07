import "./App.css";
import AadharForm from "./component/AdharForm";

function App() {
  function uidCreate() {
    let uid = "";
    const date = Date.now();
    const digits = "0123456789";
    const str = date.toString();
    for (let i = str.length - 1; i > 9; i--) {
      console.log(str[i]);
      uid += digits[str[i]];
    }
    return uid + str;
  }

  return (
    <div>
      Hi
      <button onClick={uidCreate}>Click</button>
    </div>
  );
}

export default App;
