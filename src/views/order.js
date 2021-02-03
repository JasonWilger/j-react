import './order.css';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Order = () => {

    return (
        <div className="orderPage">
            <div className="orderTitle">
                Where can we send your order?
            </div>
            <div>
            <Form className="Form">
            <div className="contactTitle">Contact</div>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="phone" placeholder="(000) 000-0000" />
                    </Form.Group>
                </Form.Row>
                    <div className="shippingTitle">Shipping Address</div>
                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Button variant="danger" type="submit">
                    Next 
                </Button>
                </Form>
            </div>
        </div>

    );
  
}

export default Order;