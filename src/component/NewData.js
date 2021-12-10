import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router';
import {Button} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { Container } from 'react-bootstrap'

export default function NewData(props) {
    const dispatch = useDispatch();
    const data = useSelector(state => state.newsApi.data)
    const history = useHistory()

  const handleClick = (e) => {
      e.preventDefault()
       history.push("/NewDescription")
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
                                <li  >
                                <Card.Img src={data.urlToImage} alt="Card image" style={{ width: "90" }} /><br />
                                        {data.description}
                                        <Card.Title>{data.title}</Card.Title>{" "}
                                   <Button onClick={handleClick}><a href={data.url}>{data.title}</a></Button>
                                    </li>
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
