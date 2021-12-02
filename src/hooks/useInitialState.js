import { useState } from "react";
import initialState from "../initialState";

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const setInitialState = (payload) => {
    debugger;
    setState({
      ...state,
      search: [...state.search, payload],
    });
  };

  return { setInitialState };
};

export default useInitialState;
