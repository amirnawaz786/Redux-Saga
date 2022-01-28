
export const GET_USER_FETCH = "GET_USER_FETCH";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";

export const workGetUserFetch = (id)=>({
    type:GET_USER_FETCH,
    payload:{id},
});
// export {workGetUserFetch};
