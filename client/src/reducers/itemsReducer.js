import { types } from "../types/types";

export const itemsReducer = (state = [], action) => {

    switch (action.type) {
        case types.listItems:
                return {
                    ...state, items : action.payload 
                }
        case types.editableItem:
            return {
                ...state, activeItem : action.payload 
            }
            default:
                return state;
    }
};