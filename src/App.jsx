import Account from "./components/Account";
import Bonus from "./components/Bonus";
import { useSelector } from "react-redux";
import { amountValue } from "./features/accountSlice";
import { bonusValue } from "./features/bonusSlice";
import ToDo from "./components/ToDo";

function App() {
  console.log("re-render App");
  const bonus = useSelector(bonusValue);
  const amount = useSelector(amountValue);

  return (
    <div className="App" style={{ border: "1px solid white", margin: "1rem" }}>
      <div>
        <h2>App Component</h2>
        <h3>Account Amount : {amount}</h3>
        <h3>Bonus : {bonus}</h3>{" "}
      </div>
      <Account />
      <Bonus />
      <ToDo />
    </div>
  );
}

export default App;
