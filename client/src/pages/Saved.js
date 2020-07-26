import React from "react";
// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import GOOGLEAPI from "../utils/GOOGLEAPI";

function Saved(props) {
    //   const [book, setBook] = useState({})
    //   const [googleBooks, setGoogleBooks] = useState({})

    // When this component mounts, grab the book with the _id of props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc
    // const { id } = useParams()
    // useEffect(() => {
    //   API.getBook(id)
    //     .then(res => setBook(res.data))
    //     .catch(err => console.log(err));
    // }, [])


    //   const { id } = useParams()
    //   useEffect(() => {
    //     GOOGLEAPI.search(id)
    //       .then(res => setGoogleBooks(res.data))
    //       .catch(err => console.log(err));
    //   }, [])


    return (
        <Container fluid>
            <Row>
                <Col size="md-12 sm-12">
                    <Jumbotron>
                        <h1>Your Saved Google Books</h1>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col size="md-10 md-offset-1">
                    <h1>
                        Show list of saved books here.
          </h1>
                </Col>
            </Row>
            <Row>
                <Col size="md-2">
                    <Link to="/">← Back to Search</Link>
                </Col>
            </Row>
        </Container>
    );
}


export default Saved;
