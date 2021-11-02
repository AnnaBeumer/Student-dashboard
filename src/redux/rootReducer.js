import { combineReducers } from "redux";

import counterReducer from "./Counter/counter.reducer";
import datafetchReducer from "./Init/init.reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  datafetcher: datafetchReducer,
});

export default rootReducer;
