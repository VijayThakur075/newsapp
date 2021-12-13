export const SET_NEWS = "SET_NEWS";
export const SET_TITLE = "SET_TITLE";
export const SET_DATA = "SET_DATA";
export const BOOKMARK_ITEM = "BOOKMARK_ITEM";
export const UNBOOKMARK_ITEM = "UNBOOKMARK_ITEM"

export const setNews = (payload) => ({type: SET_NEWS, payload});
export const setTitle = (payload) => ({type: SET_TITLE, payload});
export const setData = (payload) => ({type: SET_DATA, payload});
export const bookmarkItem = (payload) => ({type: BOOKMARK_ITEM, payload});
export const unBookmarkItem= (item) => ({type: UNBOOKMARK_ITEM,  payload: item});