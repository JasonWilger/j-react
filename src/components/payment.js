import React, { Component } from 'react'
import './recipe.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';


class Payment extends Component {

    componentWillUnmount() {
        if(this.refs.shipping.checked)
            this.props.subShipping()
    }

    handleChecked = (e) => {
        if(e.target.checked) {
            this.props.addShipping();
        } else {
            this.props.subShipping();
        }
    }

    render() {
        
        return(

            <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form.Row>

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

            <Form.Group id="formGridCheckbox">
            <label>
            <input type="checkbox" ref="shipping" onChange={this.handleChecked} />
            <span>Shipping(+6$)</span>
            <p className="collection-item"><b>New Total: ${this.props.total}</b></p>
            </label>
            </Form.Group>

            <Button variant="danger" type="submit">
                Pay
            </Button>
            </Form>

        )
    }

};

const mapStateToProps = (state) => {

    return {
        addedProducts: state.addedProducts,
        total: state.total
    }

}

const mapDispatchToProps = (dispatch) => {

    return {
        addShipping: () => {dispatch({type: 'ADD_SHIPPING'})},
        subShipping: () => {dispatch({type: 'SUB_SHIPPING'})}
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Payment);