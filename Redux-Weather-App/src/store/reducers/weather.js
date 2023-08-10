const initialState = {
  data: [],
  isLoading: false,
  error: false,
  value: "",
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_DATA":
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case "FETCH_DATA":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: false,
      };
    case "ERROR":
      return {
        ...state,
        data: [],
        isLoading: false,
        error: false,
      };
    case "CHANGE_VALUE":
      return {
        ...state,
        value: action.inputValue,
      };
    default:
      return state;
  }
};
