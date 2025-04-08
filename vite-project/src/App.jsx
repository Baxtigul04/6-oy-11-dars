import { useReducer } from "react";
import Child from "./Child";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "OSHIRISH":
      return state + 1;
    case "KAMAYTIRISH":
      return state - 1;
    case "NOLGA":
      return 0;
    default:
      return state;
  }
};

const App = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button
        onClick={() => dispatch({ type: "OSHIRISH" })}
        style={{ margin: "5px", padding: "5px 10px" }}
      >
        Oshirish (+)
      </button>

      <button
        onClick={() => dispatch({ type: "KAMAYTIRISH" })}
        style={{ margin: "5px", padding: "5px 10px" }}
      >
        Kamaytirish (-)
      </button>

      <button
        onClick={() => dispatch({ type: "NOLGA" })}
        style={{ margin: "5px", padding: "5px 10px" }}
      >
        Nolga qaytarish
      </button>

      <Child count={count} />
    </div>
  );
};

export default App;
