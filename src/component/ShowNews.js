import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestData, requestNews } from "../thunk/newsApi";
import { useEffect } from "react";
import { setTitle } from "../action";
import { useHistory } from "react-router";
import Card from 'react-bootstrap/Card'
import { Container, Form } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const ShowNews = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.newsApi.api);
    const title = useSelector((state) => state.newsApi.title);
    const description = useSelector((state) => state.newsApi.data);
    console.log("title", title);

    useEffect(() => {
        dispatch(requestNews())

    }, [])

    const handleChange = (e) => {
        dispatch(setTitle(e.target.value))


    }

    const handleClick = (index) => {

        dispatch(requestData(title))
        history.push("/NewData/:id")
        console.log("vvv", description);
    }

    return (
        <div>
            <h1>India tv</h1>
                <Container>
            <Form>
                <Row>
                <Col>
                <Form.Control type="value" onChange={handleChange} placeholder="search news here...." /><br /><br />
                </Col>
                </Row>
                <Button type="Button" varient="success" onClick={handleClick}>search news</Button>
            </Form>
            </Container>
            {selector.map((item) =>
            (
                <ul>{item.articles.map((data) => (
                    <>
                        <Container>
                            <Card className="bg-dark text-white">
                                <li key={item.index}>
                                    <Card.Title>
                                        <h3>Title</h3>{"  "}{data.title}
                                        <h3>Url</h3>{"  "}{data.url}
                                    </Card.Title>
                                </li>
                                <Card.Img src={data.urlToImage} alt="Card image" style={{ width: "90" }} /><br />
                                {/* {data.title} */}
                            </Card>
                        </ Container>
                    </>
                ))}</ul>
            ))}
        </div>
    )

}

export default ShowNews;