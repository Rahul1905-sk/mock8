import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as AuthReducer } from "./authredux/reducer";
import { reducer as ForumReducer } from "./forumredux/reducer";
import thunk from "redux-thunk";
const allreducer = combineReducers({
  AuthReducer, ForumReducer
});

export const store = legacy_createStore(allreducer, applyMiddleware(thunk));
