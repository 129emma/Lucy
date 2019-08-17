export const GET_LOGIN_STATUS = "GET_LOGIN_STATUS";

export interface LoginStatusTypes {
    type: typeof GET_LOGIN_STATUS,
    loginStatus: boolean
}

export type LoginActionTypes = LoginStatusTypes