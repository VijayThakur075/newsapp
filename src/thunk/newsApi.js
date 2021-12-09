import axios from "axios";
import { setNews, setData } from "../action";

export const requestNews = () => async (dispatch) => {
    try {
        await axios.get('https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=18a819cc570e4e3595d4acb16efe6288')
            .then((response) => {
                dispatch(setNews([response.data]))
              //  console.log(response.data)
            })
    } catch (err) {
        console.log(err);
    }

}


export const requestData = (title) => async (dispatch) => {
    try {
        await axios.get(`https://newsapi.org/v2/everything?q=${title}&apiKey=18a819cc570e4e3595d4acb16efe6288`)
            .then((response) => {
                dispatch(setData([response.data]))
                console.log(response.data)
                console.log("cccccc",title);
            })
    } catch (err) {
        console.log(err);
    }

}