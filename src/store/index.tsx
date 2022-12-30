import { combineReducers } from "redux";
import { UserState } from "../types/user";
import userReducer from "./reducers/userReducer";

export interface AppState {
  user: UserState;
  /* categories: CategoryState;
  records: RecordState; */
}

const rootReducer = combineReducers<AppState>({
  user: userReducer,
 /*  categories: categoryReducer,
  records: recordReducer, */
});

export default rootReducer;