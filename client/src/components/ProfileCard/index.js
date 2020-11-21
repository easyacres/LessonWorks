import React from "react";
import { Card } from "react-bootstrap";
import "./ProfileCard.css"

function ProfileCard() {
    var shadow = {
        boxShadow: "1px 3px 1px #f5f5f5"
    }
    return (
        <div className="profile-card-div">
            <Card id="profileCard" className="shadow" style={shadow}>
                <Card.Img variant="top" src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' />
                <Card.Body>
                    <Card.Title>John Smith</Card.Title>
                    <Card.Text>
                        johnsmith@email.com
                                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>

    )
}

export default ProfileCard