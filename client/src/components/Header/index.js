import React from "react";
import { Card } from "react-bootstrap";

function Header() {
    return (
        <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/209439/pexels-photo-209439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940/" />
        <Card.Body>
          <Card.Text>
          Peterson Fruit is a wholesale produce company located in Mukilteo, WA. We have been in business over 60 years.  We are a family owned company with 20 employees.  Chick and Rosalie Schindler started the business in November 1957. Their son, Eric Schindler, has taken over the daily operations and all three of his sons have contributed to our success.
          Peterson Fruit specializes in Washington State Apples.  We also offer a variety of produce from all over the world.  We have dedicated employees who have years of experience in the produce industry and have a ton of knowledge to share.          
          </Card.Text>
        </Card.Body>
      </Card>
    )
}
export default Header;