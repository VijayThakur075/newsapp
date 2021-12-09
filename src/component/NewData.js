import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function NewData() {
    const data = useSelector(state => state.newsApi.data)
 

    return (
        <div>
            {data.map((item) => (
                <div>
                    <ul>
                        {item.articles.map((data) => (
                            <>
                                <li><h3>Title</h3>{"  "}{data.title}</li>
                                <li><h3>Url</h3>{"  "}{data.url}</li>
                            </>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
