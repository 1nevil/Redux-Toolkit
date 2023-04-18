# Redux Toolkit

---

### Installation

---

#### For plain Redux Toolkit **template**

`npx create-react-app my-app --template redux`

#### Redux **installation** and **Bindings** with react

    `npm install @reduxjs/toolkit`
    `npm install react-redux` (because React not recognise redux state)

### Set up **store** in In app folder /store.js

---

    `import { configureStore } from '@reduxjs/toolkit
        export default configureStore({
          reducer: {},
        })`

### Set up **provider** In index.js if vite than main.jsx

---

    `import store from './app/store'
     import { Provider } from 'react-redux'

        <Provider store={store}>
            <App />
        </Provider>`

### In feature folder/[slices-feature] filename name

---

    `import { createSlice } from "@reduxjs/toolkit";

        const initialState = {
            //Object
            //Array
            //Number
            //Boolean
            //String
        };

        export const nameOfSlice = createSlice({
          name: "[name of slice]",
          initialState,
          reducers: {
           //Reducers functions
            incrementByAmount: (state, action) => {
              state.value += action.payload
            },
          },
        });

        export const { Income, Groceries, Entertainment, Bills } = Counter.actions;
        export const readIncome = (state) => state.counter.value
        export default counterSlice.reducer`

### **Configure** Slice In app/store.js

---

    `import { configureStore } from '@reduxjs/toolkit'
     import counterReducer from '../features/counter/counterSlice'

     export default configureStore({
       reducer: {
         counter: counterReducer,
       },
     })`

### useSelector - For **select global state** from store

### usedispatch - for **trigger an action**

---

    import React from 'react'

    ` import { useSelector, useDispatch } from 'react-redux'
      import { decrement, increment } from './counterSlice'
      import {readIncome} from "../feature/counterSlice";
      import styles from './Counter.module.css'

    export function Counter() {
      const count = useSelector(readIncome)
      const dispatch = useDispatch()

      return (
        <div>
          <div>
            <button
              aria-label="Increment value"
              onClick={() => dispatch(increment())} // for payload increment(100)
            >
              Increment
            </button>
            <span>{count}</span>
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
          </div>
        </div>
      )
    }`

### Take **action according to the another slice**

---

- We can use builder callback

`const variable_name = createAction([NAME_OF_THE_ACTION])`<br>
`const incrementByAmount = createAction("account/incrementByAmount");`

- Inside extra reducers
- action is account's state
- state meaning this page's points

          `extraReducers: (builder) => {
                builder.addCase(incrementByAmount, (state, action) => {
                  if (action.payload >= 100) state.points++;
            });
          }`

> **In this repo implimated if account balance increment by >100 than add 1 bonas point.**
