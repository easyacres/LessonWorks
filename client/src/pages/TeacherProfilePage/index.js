import React, { useState, useEffect } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/Api";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import PDFViewer from '../../components/PDFViewer/index';
import PDFJSBackend from '../../backends/pdfjs';
import "./TeacherProfilePage.css"
import ProfileCard from "../../components/ProfileCard";
import { Form } from "react-bootstrap";

function TeacherProfilePage() {

    // Setting our component's initial state
    const [lessonsmain, setLessonsMain] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all books and store them with setBooks
    useEffect(() => {
        loadLessonsMain()
    }, [])

    // Loads all Lessons and sets them to Lessons
    function loadLessonsMain() {
        API.getLessonsMain()
            .then(res =>
                setLessonsMain(res.data)
            )
            .catch(err => console.log(err));
    };

    // Deletes a Lesson from the database with a given id, then reloads Lessons from the db
    function deleteLessonFromMain(id) {
        API.deleteLessonFromMain(id)
            .then(res => loadLessonsMain())
            .catch(err => console.log(err));
    }

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
        //                  method     
    };

    // When the form is submitted, use the API.saveLessontoMain method to save the book data
    // Then reload Lesson from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title && formObject.author) {
            API.saveLessontoMain({
                title: formObject.title,
                author: formObject.author,
                synopsis: formObject.synopsis
            })
                .then(res => loadLessonsMain())
                .catch(err => console.log(err));
        }
    };
    
    return (
        <Container id="teacher-container">
            <Row>
                <Col size="md-3">
                    <ProfileCard />
                    <PDFViewer />
                </Col>

                <Col size="md-4">
                    <h2 id="lessonTitle">Create Your own lesson </h2>
                    <br />
                    <Form>
                        <Input
                            onChange={handleInputChange}
                            name="title"
                            placeholder="Title (required)"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="author"
                            placeholder="Author (required)"
                        />
                        <TextArea
                            onChange={handleInputChange}
                            name="synopsis"
                            placeholder="Synopsis (Optional)"
                        />
                        <FormBtn
                            disabled={!(formObject.author && formObject.title)}
                            onClick={handleFormSubmit}
                        >
                            Submit Lesson
                        </FormBtn>
                    </Form>
                </Col>
                <Col size="md-4 sm-12">
            
              <h1>Lessons On My List</h1>
            
            {lessonsmain.length ? (
              <List>
                {lessonsmain.map(lessonsmain => (
                  <ListItem key={lessonsmain._id}>
                    <Link to={"/lessonmain/" + lessonsmain._id}>
                      <strong>
                        {lessonsmain.title} by {lessonsmain.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteLessonFromMain(lessonsmain._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
              //  Terniary Opeator for Rendering Result
            )}
          </Col>
            </Row>
        </Container>

    )
}

export default TeacherProfilePage