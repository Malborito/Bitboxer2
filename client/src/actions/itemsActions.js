import { types } from "../types/types";

export const itemsActions = (items) => {
    return {
        type: types.listItems,
        payload: items
    }
}

export const editableItemAction = (item) => {
    return {
        type: types.editableItem,
        payload: item
    }
}
