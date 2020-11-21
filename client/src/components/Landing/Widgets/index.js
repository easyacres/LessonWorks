import React from 'react';
import { Row, Col, Container, Figure } from 'react-bootstrap'
import "./Widgets.css";


function Widgets() {
    return (

        <Container id="widget-container">
            <Row>
                <Col xs={6} md={3}>
                    <Figure>
                        <Figure.Image id="widget-icons"
                            width={95}
                            height={95}
                            alt="171x180"
                            src="https://png.pngitem.com/pimgs/s/516-5162204_circle-hd-png-download.png" roundedCircle
                        />
                        <h6 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '28px', color: 'rgb(49, 49, 49)'}}>Easy to Use</h6>
                        <Figure.Caption style={{color: 'rgb(49, 49, 49)'}}>
                            We have made lesson planning easier for our users! Simply create an account and begin lesson planning.
                            </Figure.Caption>
                    </Figure>
                </Col>
                <Col xs={6} md={3}>
                    <Figure>
                        <Figure.Image id="widget-icons"
                            width={95}
                            height={95}
                            alt="171x180"
                            src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-7/177800/312-512.png" roundedCircle
                        />
                        <h6 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '28px', color: 'rgb(49, 49, 49)'}}>Connect</h6>
                        <Figure.Caption style={{color: 'rgb(49, 49, 49)'}}>
                            Connect with other users for endless ideas on your lessons.
                            </Figure.Caption>
                    </Figure>
                </Col>
                <Col xs={6} md={3}>
                    <Figure>
                        <Figure.Image id="widget-icons"
                            width={95}
                            height={95}
                            alt="171x180"
                            src="https://www.iconarchive.com/download/i86458/graphicloads/long-shadow-documents/document-filetype-pdf.ico" roundedCircle
                        />
                        <h6 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '28px', color: 'rgb(49, 49, 49)'}}>Edit any PDF</h6>
                        <Figure.Caption style={{color: 'rgb(49, 49, 49)'}}>
                            Open up your PDF lessons and you have the ability to edit, annotate, and save.
                            </Figure.Caption>
                    </Figure>
                </Col>
                <Col xs={6} md={3}>
                    <Figure>
                        <Figure.Image id="widget-icons"
                            width={95}
                            height={95}
                            alt="171x180"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Eo_circle_yellow_checkmark.svg/1024px-Eo_circle_yellow_checkmark.svg.png" roundedCircle
                        />
                        <h6 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '28px', color: 'rgb(49, 49, 49)'}}>Organize</h6>
                        <Figure.Caption style={{color: 'rgb(49, 49, 49)'}}>
                            Create your own archive space to organize all your lesson plans.
                            </Figure.Caption>
                    </Figure>
                </Col>
            </Row>
        </Container>
    
    );
}

export default Widgets;