import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from 'react-bootstrap/Card'
import { Container } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { bookmarkItem } from '../action'

export default function NewDescription() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.newsApi.data)
    const bookmark = useSelector(state => state.bookmarkDescription.bookmarkitem)
    const bookmarkdata = (data) => {
        dispatch(bookmarkItem(data))
    }

    return (
        <div>

            {data.map((item) => (
                <div>
                    <ul>
                        {item.articles.map((data) => (
                            <>
                                <Container>
                                    <Card className="bg-dark text-white">
                                        <Card.Title>{data.title}</Card.Title>
                                        <a href={data.url} target="_blank" rel="noopener npreferrer" />
                                        <Card.Img src={data.urlToImage} alt="Card image" style={{ width: "90" }} /><br />
                                        {data.title}
                                        <Button>{data.title}</Button>
                                        <Button onClick={() => bookmarkdata(data.title)}>bookmark</Button>
                                    </Card>
                                </ Container>
                            </>
                        ))}
                    </ul>

                </div>
            ))}

        </div>
    )
}



