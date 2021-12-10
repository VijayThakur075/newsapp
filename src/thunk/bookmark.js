import { bookmarkItem, unBookmarkItem } from "../action";

export const requestBookmark = () => (dispatch) =>{
        dispatch(bookmarkItem())
} 