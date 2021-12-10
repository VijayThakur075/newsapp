import { combineReducers } from "redux";
import newsApi from "./news";
import bookmarkDescription from "./bookmark";

const reducer = combineReducers({
   newsApi,
   bookmarkDescription,
})
export default reducer;