import apiEndpoints from "../../confg/urls";
import { apiPost, setItem } from "../../utils/utils";
import { authData } from "../reducer/authReducer";
import { store } from "../store";

const {dispatch} = store

export const setUserData = (data: object) => {
    setItem('userData', data).then(() => {
        dispatch(authData(data))
    }).catch((error) => {
        console.log(error, 'errorerrorerrorerror');
    })
}

export const login = (data: object, header: object) => {
  return apiPost(apiEndpoints.LOGIN, data, header);
};
