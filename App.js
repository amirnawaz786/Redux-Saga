import React from "react";
import {View,Text} from "react-native";
import {Provider} from "react-redux";
import {combineReducers, createStore,applyMiddleware} from "redux";
import createSagaMiddleWare from "redux-saga";
import mySaga from "./src/Redux/Sagas";
import RootStack from "./src/RootStack";
import myFirstReducer from "./src/Redux/Reducers";

const sagaMiddleWare = createSagaMiddleWare();
const rootReducer = combineReducers({myFirstReducer});
const store = createStore(rootReducer,applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(mySaga)


function App() {
        return(
            <Provider store={store}>
                <RootStack/>
            </Provider>
        );

}
export default App;
