import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, deleteTodos } from "../features/crudSlice.js";

const styling = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "3",
  flexWrap: "wrap",
};

const ToDo = () => {
  console.log("re-render Todo");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const todos = useSelector((state) => state.todos.todos);
  const pending = useSelector((state) => state.todos.pending);

  return (
    <div style={styling}>
      <div></div>
      <div>
        {pending ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {todos.map((todo) => (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <li key={todo.id}>{todo.title}</li>
                <button onClick={() => dispatch(deleteTodos(todo.id))}>
                  ☠️ {todo.id}
                </button>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ToDo;
//{todos &&
//         todos.map((video) => {
//           return (
//             <div style={{ width: "11rem" }}>
//               {/* <button onClick={}></button> */}
//             </div>
//           );
//         })}
