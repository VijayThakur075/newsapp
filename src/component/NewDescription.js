import React from 'react'
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card'
import { Container } from 'react-bootstrap'

export default function NewDescription() {
    const data = useSelector(state => state.newsApi.data)

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
                                        <a href={data.url} target="_blank" rel="noopener npreferrer"/>


                                        <Card.Img src={data.urlToImage} alt="Card image" style={{ width: "90" }} /><br />
                                        {data.title}

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



<Card.ImgOverlay>

    <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
    </Card.Text>
    Last updated 3 mins ago
</Card.ImgOverlay>
