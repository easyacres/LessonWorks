import React, { useState, useEffect } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/Api";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import ProfileCard from "../../components/ProfileCard";
import { Form } from "react-bootstrap";
import "./TeacherProfilePage.css"

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
        <div id="teacher-container" class="container">
            <Row>
                <Col md={4}>
                    <ProfileCard />

                </Col>

                <Col xs={12} md={4}>
                    <h1 id="lessonTitle">Create Lesson </h1>
                    <br />
                    <Form style={{marginRight: '40px'}}>
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
                <Col xs={12} md={4}>
            
              <h1 id="lessonTitle">My Lessons</h1>
            
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
               <div>
              <h6 style={{ color: 'grey', marginTop: '20px' }} >No Results to Display</h6>
              </div> 
              //  Terniary Opeator for Rendering Result
            )}
          </Col>
            </Row>
        </div>

    )
}

export default TeacherProfilePage