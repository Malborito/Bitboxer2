import { types } from "../types/types";

export const authReducer = (state = {}, action) => {

        switch (action.type) {
            case types.login:
                return {
                    mail: action.payload.mail,
                    pass : action.payload.pass
                }
                
            case types.logout:
                return { }

            default:
                return state;
        }
};