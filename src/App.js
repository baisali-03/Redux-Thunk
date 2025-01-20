import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset,incrementByAmount } from "./features/counter/couterSlice";
import { useState } from "react";
function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  function handleReset() {
    dispatch(reset());
  }
  function handleIncrementByAmount() {
    dispatch(incrementByAmount(amount));
  }
  return (
    <div className="App">
      <button onClick={handleIncrement}>+</button>
      <p>Counter: {count}</p>
      <button onClick={handleDecrement}>-</button>
      <br />
      <button onClick={handleReset}>Reset</button>
      <br />
      <input
        type="Number"
        value={amount}
        placeholder="Enter Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <button onClick={handleIncrementByAmount}>Increment by Amount</button>
    </div>
  );
}

export default App;
