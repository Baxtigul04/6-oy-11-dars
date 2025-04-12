import { useReducer } from "react";
import Child from "./Child";

const nameReducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(nameReducer, { name: "" });

  const handleNameChange = (e) => {
    dispatch({ type: "SET_NAME", payload: e.target.value });
  };

  const handleSave = () => {
    console.log("Ism saqlandi:", state.name);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Ism kiritish</h2>

      <div className="mb-4">
        <input
          type="text"
          value={state.name}
          onChange={handleNameChange}
          placeholder="Ismingizni kiriting"
          className="border p-2 mr-2 rounded"
        />

        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Saqlash
        </button>
      </div>

      <Child name={state.name} />

      <div className="mt-4">
        <a href="/profile" className="text-blue-500 underline">
          Profil sahifasiga o'tish
        </a>
      </div>
    </div>
  );
};

export default App;
