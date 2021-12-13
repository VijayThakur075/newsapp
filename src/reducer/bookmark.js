import { BOOKMARK_ITEM } from "../action";

const intialState = {

    bookmarkitem: [],
}

const getlocalStorage =  (bookmarkitem=[] )=>{
    const item = JSON.stringify(bookmarkitem);
    localStorage.setItem('bookmarks', item)
}

const bookmarkDescription = (state = intialState, action) => {
    switch (action.type) {
        case BOOKMARK_ITEM:
            const bookmarkitem = [...state.bookmarkitem, action.payload]
            getlocalStorage(bookmarkitem)
            return {
                ...state,
                bookmarkitem: [action.payload], ...state.bookmarkitem,

            };
           
        default:
            return state;

    }
}

export default bookmarkDescription;