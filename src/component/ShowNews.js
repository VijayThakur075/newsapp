import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestData, requestNews } from "../thunk/newsApi";
import { useEffect } from "react";
import { setTitle } from "../action";
import { useHistory } from "react-router";

const ShowNews = (props) => {
    const history= useHistory();
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.newsApi.api);
    const title = useSelector((state) => state.newsApi.title);
    const description = useSelector((state) => state.newsApi.data);
    console.log("title",title );
    
    useEffect(() => {
        dispatch(requestNews())

    }, [])

    const handleChange=(e)=>{
        dispatch(setTitle(e.target.value))
       

    }

    const handleClick=(index) => {
       
        dispatch(requestData(title))
        history.push("/NewData/:id")
        console.log("vvv",description);
    }

    return (
        <div>
            <h1>India tv</h1>

            <form> 
                <input type="value" onChange={handleChange} placeholder="search news here...." /><br /><br />
                <button type="button" onClick={handleClick}>search news</button>
            </form>
            {selector.map((item)=>
           (
               <ul>{item.articles.map((data)=>(
                   <>
                   <li key={item.index}>
                   <button> <h3>Title</h3>{"  "}{data.title}</button>
                   <li><h3>Url</h3>{"  "}{data.url}</li>
                   </li>
                   </>
               ))}</ul>
            ))}
        </div>
    )

}

export default ShowNews;