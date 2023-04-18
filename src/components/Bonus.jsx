import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBonus, bonusValue } from "../features/bonusSlice";

export default function Bonus() {
  console.log("re-render Bonus");
  const bonus = useSelector(bonusValue);
  const dispatch = useDispatch();
  return (
    <div style={{ border: "1px solid white", margin: "1rem" }}>
      <h2>Bonus Component</h2>
      <h3>Total point : {bonus}</h3>
      <button onClick={() => dispatch(addBonus())}>Click +</button>
    </div>
  );
}
