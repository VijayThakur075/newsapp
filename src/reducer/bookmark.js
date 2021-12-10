import { BOOKMARK_ITEM, UNBOOKMARK_ITEM } from "../action";

const intialState = {
    bookmarkitem: [],
}

const bookmarkDescription = (state = intialState, action) => {
    switch (action.type) {
        case BOOKMARK_ITEM:
            return {
                ...state,
                bookmarkitem: action.payload,

            };
            case UNBOOKMARK_ITEM:
                return {
                    ...state,
                   bookmarkitem: action.payload, 
                };
        default:
            return state;

    }
}

export default bookmarkDescription;