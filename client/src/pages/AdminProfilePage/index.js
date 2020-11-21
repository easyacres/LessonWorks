// import React from "react"
// import "./AdminProfilePage.css" 
// import ProfileCard from "../../components/ProfileCard";
// import { Row, Col } from "react-bootstrap"

// function AdminProfilePage() {
//     return (
//         <section id="admin">
//             <div id="adminlayer">
//                 <Container id="admin-container">
//                     <Row>
//                         <Col size="md-4">
//                             <ProfileCard />
//                         </Col>

//                         <Col size="md-8">
//                         </Col>
//                     </Row>
//                 </Container>
//             </div>
//         </section>
//     )
// }

// export default AdminProfilePage

// ----------------------------------------------------

import React, { useState, useEffect } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/Api";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import PDFViewer from '../../components/PDFViewer/index';
import PDFJSBackend from '../../backends/pdfjs';
// import "./TeacherProfilePage.css"
import "./AdminProfilePage.css";
import ProfileCard from "../../components/ProfileCard";
import { Form } from "react-bootstrap";

function AdminProfilePage() {

    // Setting our component's initial state
    const [adminsmain, setAdminsMain] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all users and store them with setAdminMain

    useEffect(() => {
        loadAllAdminMain()
    }, [])

    // Loads all Users and sets them to Users
    function loadAllAdminMain() {
        API.getAdminsMain()
            .then(res =>
                setAdminsMain(res.data)
            )
            .catch(err => console.log(err));
    };

    // Deletes a User from the database with a given id, then reloads Users from the db
    function deleteUserFromMain(id) {
        API.deleteUserFromMain(id)
            .then(res => loadAllAdminMain())
            .catch(err => console.log(err));
    }

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
        //                  method     
    };

    // When the form is submitted, use the API.saveUsertoMain method to save the user data
    // Then reload users(adminsmain) from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.firstName && formObject.lastName && formObject.username && formObject.password && formObject.email) {
            API.saveUSertoAdminMain({
                firstName: formObject.firstName,
                lastName: formObject.lastName,
                username: formObject.username,
                password: formObject.password,
                email: formObject.email
            })
                .then(res => loadAllAdminMain())
                .catch(err => console.log(err));
        }
    };
    
    return (
        <Container id="teacher-container">
            <Row>
                <Col size="md-3">
                    <ProfileCard />
                </Col>

                <Col size="md-4">
                    <h2 id="lessonTitle">Create Your own lesson </h2>
                    <br />
                    <Form>
                        <Input
                            onChange={handleInputChange}
                            name="firstName"
                            placeholder="First Name (required)"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="lastName"
                            placeholder="Last Name (required)"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="userame"
                            placeholder="Assigned Username (required)"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="password"
                            placeholder="Password (required)"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="email"
                            placeholder="Email(required)"
                        />
                        <FormBtn
                            disabled={!(formObject.firstName && formObject.lastName )}
                            // && formObject.username && formObject.password && formObject.email
                            onClick={handleFormSubmit}
                        >
                            Submit User
                        </FormBtn>
                    </Form>
                </Col>
                <Col size="md-4 sm-12">
            
              <h1>Authorized Users</h1>
            
            {adminsmain.length ? (
              <List>
                {adminsmain.map(adminmain => (
                  <ListItem key={adminmain._id}>
                    <Link to={"/adminmain/" + adminmain._id}>
                      <strong>
                        {adminmain.title} by {adminmain.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteUserFromMain(adminmain._id)} />
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

export default AdminProfilePage