import {GET_LOGIN_STATUS, LoginActionTypes} from "./LoginActionTypes";

export const getLoginStatus = (loginStatus:boolean):LoginActionTypes => ({
    type: GET_LOGIN_STATUS,
    loginStatus
});