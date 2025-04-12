const initialState = {
  isOn: false,
};

const lightReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TURN_ON":
      return { ...state, isOn: true };
    case "TURN_OFF":
      return { ...state, isOn: false };
    case "TOGGLE":
      return { ...state, isOn: !state.isOn };
    default:
      return state;
  }
};

export default lightReducer;
