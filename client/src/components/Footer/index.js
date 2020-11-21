import React from 'react';
import {Row} from 'react-bootstrap';
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div class="container">
                <Row>


                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-secondary" >
                        <p>(770)777-7777</p>
              
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 foot" >
                    <h6><strong>Made with <i class="far fa-heart"></i></strong></h6>
              
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-secondary" >
                    <p>contactus@lessonworks.com</p>
              
                    </div>
                
                  
                </Row>

       

               

            </div>


        </footer>



    );
}
export default Footer;