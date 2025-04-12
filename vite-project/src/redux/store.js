import { legacy_createStore as createStore } from "redux";
import lightReducer from "./lightReducer";

const store = createStore(lightReducer);

export default store;
