import {call,put,takeLatest,takeEvery} from "redux-saga/effects";
import {GET_USER_FETCH,GET_USER_SUCCESS} from "./Actions";


function userFetch(action){
    let url = "https://jsonplaceholder.typicode.com/todos/"+action.payload.id;
    return fetch(url).then((response)=>response.json());
}

function *dataa(action){
    const users = yield call(userFetch,action);
    // console.log("users ====>>>>",users)
    yield put({type:GET_USER_SUCCESS,users})
}

function *mySaga() {
    yield takeEvery(GET_USER_FETCH, dataa);
}

export default mySaga;
