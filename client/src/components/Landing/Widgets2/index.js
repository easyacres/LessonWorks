import React from 'react';
import { Row, Col, Container, Figure } from 'react-bootstrap'
import '../Widgets/Widgets.css'


function Widgets2() {
    return (

        <Container id="widget-container">
            <Row>
                <Col xs={6} md={3}>
                    <Figure>
                        <Figure.Image id="widget-icons"
                            width={95}
                            height={95}
                            alt="171x180"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Eo_circle_yellow_info.svg/1200px-Eo_circle_yellow_info.svg.png" roundedCircle
                        />
                        <h6 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '28px', color: 'rgb(49, 49, 49)'}}>About</h6>
                        <Figure.Caption>
                            Learn about LessonWorks, what makes this application unique, and how you can register.
                            </Figure.Caption>
                    </Figure>
                </Col>
                <Col xs={6} md={3}>
                    <Figure>
                        <Figure.Image id="widget-icons"
                            width={95}
                            height={95}
                            alt="171x180"
                            src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-1/254000/57-512.png" roundedCircle
                        />
                        <h6 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '28px', color: 'rgb(49, 49, 49)'}}>Admin</h6>
                        <Figure.Caption>
                            Learn what it means to be an admin and how it differs from a member.
                            </Figure.Caption>
                    </Figure>
                </Col>
                <Col xs={6} md={3}>
                    <Figure>
                        <Figure.Image id="widget-icons"
                            width={95}
                            height={95}
                            alt="171x180"
                            src="https://oregonmanclinics.com/wp-content/uploads/2020/04/google-reviews-icon.png" roundedCircle
                        />
                        <h6 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '28px', color: 'rgb(49, 49, 49)'}}>Leave a Review</h6>
                        <Figure.Caption>
                            Tell us what you think! We would love to know your feedback. Click the link to leave us a review!
                            </Figure.Caption>
                    </Figure>
                </Col>
                <Col xs={6} md={3}>
                    <Figure>
                        <Figure.Image id="widget-icons"
                            width={95}
                            height={95}
                            alt="171x180"
                            src="https://icon-library.com/images/icon-for-contact-us/icon-for-contact-us-7.jpg" roundedCircle
                        />
                        <h6 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '28px', color: 'rgb(49, 49, 49)'}}>Contact Us</h6>
                        <Figure.Caption>
                            <p>Contact Information</p>
                            <p>770-777-7777</p>
                            <p>contactus@lessonworks.com</p>
                            </Figure.Caption>
                    </Figure>
                </Col>
            </Row>
        </Container>
    
    );
}

export default Widgets2;