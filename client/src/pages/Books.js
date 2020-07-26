import React, { useState, useEffect } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import SaveBtn from "../components/SaveBtn";
import ViewBtn from "../components/ViewBtn";
import GOOGLEAPI from "../utils/GOOGLEAPI";

function Books() {
  // Setting our component's initial state
  // const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  const [googleBooks, setGoogleBooks] = useState([])

  // Load all books and store them with setBooks
  // useEffect(() => {
  //   loadBooks()
  // }, [])

  useEffect(() => {
    loadGoogleBooks()
  }, [])

  // Loads all books and sets them to books
  // function loadBooks() {
  //   API.getBooks()
  //     .then(res =>
  //       setBooks(res.data)
  //     )
  //     .catch(err => console.log(err));
  // };

  function loadGoogleBooks() {
    GOOGLEAPI.search()
      .then(res =>
        setGoogleBooks(res.data.items)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  // function deleteBook(id) {
  //   API.deleteBook(id)
  //     .then(res => loadBooks())
  //     .catch(err => console.log(err));
  // }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   if (formObject.title && formObject.author) {
  //     API.saveBook({
  //       title: formObject.title,
  //       author: formObject.author,
  //       synopsis: formObject.synopsis
  //     })
  //       .then(res => loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };


  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   GOOGLEAPI.search(formObject.title)
  //     .then(res => this.setGoogleBooks({ result: res.data.items }))
  //     .catch(err => console.log(err));
  // };



  // searchGoogleBooks = query => {
  //   GOOGLEAPI.search(query)
  //     .then(res => this.setGoogleBooks({ result: res.data.items }))
  //     .catch(err => console.log(err));
  // };


  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title) {
      GOOGLEAPI.search({
        title: formObject.title,
      })
        .then(res => this.setGoogleBooks({ result: res.data.items }))
        .catch(err => console.log(err));
    }
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.searchGoogleBooks(this.state.search);
  // };


  return (
    <Container fluid>
      <Row>
        <Col size="md-12 sm-12">
          <Jumbotron>
            <h1>(React) Google Books Search</h1>
            <p>Search for and save books of interest</p>
          </Jumbotron>
          <form>
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Title (required)"
            />
            <FormBtn
              disabled={!(formObject.title)}
              onClick={handleFormSubmit}
            >
              Search for Book
              </FormBtn>
          </form>
        </Col>
        <Col size="md-12 sm-12">
          <div>
            {googleBooks.length ? (
              <List>
                {googleBooks.map(book => (
                  <ListItem key={book.id}>
                    <Link to={"/books/" + book.id}>
                      <strong>
                        {book.volumeInfo.title} by {book.volumeInfo.authors}
                      </strong>
                    </Link>
                    {/* <DeleteBtn onClick={() => deleteBook(book._id)} /> */}
                    <ViewBtn />
                    <SaveBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </div>

        </Col>
      </Row>
    </Container>
  );
}


export default Books;
