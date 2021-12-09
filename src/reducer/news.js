import { SET_DATA, SET_NEWS, SET_TITLE } from "../action";

const intialState = {
    api: [],
    title: "",
    data: [],

}

const newsApi = (state = intialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                api: action.payload,

            };
            case SET_TITLE:
                return {
                    ...state,
                   title: action.payload, 
                };
                case SET_DATA:
                    return {
                        ...state,
                        data: action.payload,
                    };
        default:
            return state;

    }
}

export default newsApi;