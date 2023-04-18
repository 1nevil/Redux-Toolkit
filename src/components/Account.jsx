import React, { useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  amountValue,
  decrement,
  increment,
  incrementByAmount,
  fetchUserById,
  penddingValue,
} from "../features/accountSlice";

const Account = memo(function Account() {
  console.log("re-render Account");

  const [value, setValue] = useState(0);

  const amount = useSelector(amountValue);
  const pendding = useSelector(penddingValue);

  const dispatch = useDispatch();

  if (pendding) {
    return <h5> Video data is Fetching.....</h5>;
  }

  return (
    <div style={{ border: "1px solid white", margin: "1rem" }}>
      <h2>Account Component</h2>
      <h3>Ammount : {amount}</h3>
      <div>
        <button onClick={() => dispatch(increment())}>INC</button>
        <button onClick={() => dispatch(decrement())}>DEC</button>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(parseInt(value)))}>
          ADD Amount {value}
        </button>
        {/* <button onClick={() => dispatch(fetchUserById())}>getVideos</button> */}
      </div>
    </div>
  );
});

export default Account;
