import React from 'react'
import propTypes from "prop-types"

const Bookmark = () => {
    const data = JSON.parse(localStorage.getItem("bookmarks"))
    console.log("vvv", data);
    return (
        <div>
            <h2>bookmark item</h2>
            {data.map((item, index) => (
                <ul>
                    <li key={index}><a href={item.url}>{item}</a></li>
                </ul>
            ))}
        </div>

    )
}

export default Bookmark;

