import React from "react";
import { Table } from "react-bootstrap";
// import { lightgray } from "color-name";

function Contacts() {

  return (
    <>

      <h4 style={{ margin: "20px" }}>Peterson Fruit Main Contact Numbers :
        <h5>Phone Number: (425) 355-1050<br></br>Fax Number: (425) 348-5062</h5></h4>

      <Table striped bordered hover size="sm">
        <thead>
          <tr style={{ color: "lightgray" }}>
            <th>Name</th>
            <th>Extension</th>
            <th>Email Address</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Eric Schindler</td>
            <td>Ext. 116</td>
            <td>eschindler@petersonfruit.com</td>
            <td>Local Produce</td>
          </tr>
          <tr style={{ color: "lightgray" }}>
            <td>Corporal Mills</td>
            <td>Ext. 115</td>
            <td>corporal@petersonfruit.com</td>
            <td>Out of State Produce</td>
          </tr>
          <tr>
            <td>Rylen Nichols</td>
            <td>Ext. 112</td>
            <td>rylen@petersonfruit.com</td>
            <td>Organic Produce</td>
          </tr>
          <tr style={{ color: "lightgray" }}>
            <td>Julie Monteith</td>
            <td>Ext. 117</td>
            <td>julie@petersonfruit.com</td>
            <td>Accounting</td>
          </tr>
          <tr >
            <td>Brenda Johnson</td>
            <td>Ext. 110</td>
            <td>brenda@petersonfruit.com</td>
            <td>Accounting</td>
          </tr>

        </tbody>
      </Table>
      <p style={{ color: "lightgray" }}>
        Physical Address: (Get Directions) <br></br>
4720 Chennault Beach Rd.  <br></br>
Mukilteo, WA  98275<br></br>
        <br></br>
Mailing Address:<br></br>
P.O. Box 1130<br></br>
                Mukilteo, WA  98275</p>

      <div style={{ color: "lightgray", marginTop: "60px" }}>
        <h3>Contact Us</h3><p>
          Peterson Fruit provides the best quality in conventional and organic produce.  We offer same day delivery, competitive pricing, and we guarantee 100% customer satisfaction.  Our contact information is listed below.  We look forward to hearing from you. </p>
      </div>
    </>
  )
}
export default Contacts;