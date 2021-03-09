import { types } from "../types/types";

export const login = (mail, pass) => {
    return {
        type: types.login,
        payload : {
            mail,
            pass
        }
    }
}