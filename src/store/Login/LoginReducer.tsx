import {LoginTypes} from "../../Types/Types";
import {LoginActionTypes} from "./LoginActionTypes";

export const defaultLoginStatus:LoginTypes = {
    loginStatus: false
};

export function loginReducer(
    state = defaultLoginStatus,
    action:LoginActionTypes
) {
    switch (action.type) {
        case "GET_LOGIN_STATUS":
            return {
                ...state,
                state: !action.loginStatus
            };
        default:
            return state
    }
}