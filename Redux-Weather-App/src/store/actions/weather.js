//3ff5b5bc1eda7015667556a919d461b7
export const ActionTypes = {
  LOADING_DATA: "LOADING_DATA",
  FETCH_DATA: "FETCH_DATA",
  ERROR: "ERROR",
  CHANGE_VALUE: "CHANGE_VALUE",
};

export const changeValue = (value) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.CHANGE_VALUE,
      inputValue: value,
    });
  };
};

export const loadingData = () => {
  return {
    type: ActionTypes.LOADING_DATA,
  };
};

export const fetchData = (countryName) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.LOADING_DATA,
    });

    try {
      const response = await new Promise(async (resolve, reject) => {
        await fetch(
          `http://api.openweathermap.org/data/2.5/weather?appid=fe0fbe3c79ea276dc2211dce2a13f066&q=${
            countryName || "new york"
          }`
        )
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      });
      const data = await response.json();
      console.log(data);
      return dispatch({ type: ActionTypes.FETCH_DATA, payload: data });
    } catch (error) {
      dispatch({
        type: ActionTypes.ERROR,
      });
    }
  };
};
export const error = () => {
  return { type: ActionTypes.ERROR };
};
