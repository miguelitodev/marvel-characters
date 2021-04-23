import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import preserverKeysReducer from "./PreserverKeys/PreserverKeys.reducer";
import verifierKeys from "./VerifierKeys/VerifierKeys.reducer";
import requester from "./Requester/Requester.reducer";

const rootReducer = combineReducers({
    preserverKeys: preserverKeysReducer,
    verifierKeys: verifierKeys,
    requester: requester,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
