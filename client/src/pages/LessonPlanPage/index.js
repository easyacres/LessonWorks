import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./LessonPlanPage.css"

function LessonPlanPage() {
    
    return (
        <section id="lesson">
        <div id="lessonlayer">
            <Container id="lesson-container">
            <h2 id="lessonPageTitle"> Lesson Board</h2>
                <Row>
                    <Col sixe="md-6">
                        <p>CONTENT HERE</p>
                    </Col>

                    <Col size="md-6">
                    <p>CONTENT HERE</p>
                    </Col>
                </Row>
            </Container>
        </div>
    </section>  
    )
}

export default LessonPlanPage