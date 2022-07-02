import axios  from "axios"
import * as actionTypes from "../constants/userConstants";

export const registerUser = (user) => async (dispatch) => {
dispatch({type: actionTypes.USER_REGISTER_REQUEST})
try {
    const { data } = await axios.post('/api/register', user)
    dispatch({
        type: actionTypes.USER_REGISTER_SUCCESS,
        payload: data,
    })
} catch (error) {
    dispatch({
        type: actionTypes.USER_REGISTER_FAIL, 
        payload:error})
}
};

export const loginUser = (user) => async (dispatch) => {
    dispatch({ type: "USER_LOGIN_REQUEST" });
    try {
      const { data } = await axios.post("/api/login", user);
    //   console.log(response);
      dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
      localStorage.setItem("currentUser", JSON.stringify(data));
      window.location.href = "/";

      // window.location.href is global object
      // we can also use use history hook
      // '/' means redirecting to the root

    } catch (error) {
      dispatch({ type: "USER_LOGIN_FAIL", payload: error });
    }
  };
  
//   export const logoutUser = () => (dispatch) => {
//     localStorage.removeItem("currentUser");
//     window.location.href = "/login";
//   };
  