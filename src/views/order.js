import './order.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import StripeCheckout from 'react-stripe-checkout'
import { Button } from 'react-bootstrap';


const Order = () => {


    const handleToken = (token) => {
        console.log(token);
    }

    return (
        <div className="orderPage">
            <div className="orderTitle">
                Where can we send your order?
            </div>
            <div>
            <Form className="Form">
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
                </Form>
                    <div className="checkout">
                    <StripeCheckout 
                    stripekey="pk_test_51IGooFKfiTBrtm2SOr0zoL0VcyeuINPL7rVK
                                HVie86sgAjpTvRWTcn2bjhwxBavwwfP4V2AJ7UzyryyTrGF5XGz3009zbwquXz" 
                    token={handleToken}
                    />
                </div>
            </div>
        </div>

    );
  
}

export default Order;