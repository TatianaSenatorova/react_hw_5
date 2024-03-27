import { TOGGLE_THEME } from "./actions";

const initialState = {
  theme: "light",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

export default reducer;
