import { Provider, useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import store from "./redux/store";

const Light = () => {
  const isOn = useSelector((state) => state.isOn);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Chiroq boshqaruvi</h2>

      <div className="mb-4 p-4 border border-gray-300 rounded">
        <p className="text-xl font-bold mb-2">
          Chiroq holati: {isOn ? "YONIQ ✨" : "O'CHIQ 💤"}
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => dispatch({ type: "TURN_ON" })}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Yoqish
        </button>

        <button
          onClick={() => dispatch({ type: "TURN_OFF" })}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          O'chirish
        </button>

        <button
          onClick={() => dispatch({ type: "TOGGLE" })}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Teskari qilish
        </button>
      </div>

      <div className="mt-4">
        <Link to="/newPage" className="text-blue-500 underline">
          Yangi sahifaga o'tish
        </Link>
      </div>
    </div>
  );
};

const NewPage = () => {
  const isOn = useSelector((state) => state.isOn);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Yangi sahifa</h2>

      <div className="mb-4 p-4 border border-gray-300 rounded">
        <p className="text-xl font-bold">
          Chiroq holati: {isOn ? "YONIQ ✨" : "O'CHIQ 💤"}
        </p>
      </div>

      <div className="mt-4">
        <Link to="/" className="text-blue-500 underline">
          Bosh sahifaga qaytish
        </Link>
      </div>
    </div>
  );
};

const LightApp = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Light />} />
          <Route path="/newPage" element={<NewPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default LightApp;
