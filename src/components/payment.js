import React, { Component } from 'react'
import './payment.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


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

            <div className="paymentPage">
                <div className="paymentTitle">
                    Please enter payment information.
                </div>
                <div>
                    <Form className="Form">
                    <div className="infoTitle">Payment Information</div>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>
                            Name
                        </Form.Label>
                        <Form.Control type="name" placeholder="Enter name" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCardNumber">
                        <Form.Label>
                            Card Number
                            </Form.Label>
                        <Form.Control type="cardNumber" placeholder="💳 (000) 000-000" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridExpire">
                        <Form.Label>
                            Expiry Date
                        </Form.Label>
                        <Form.Control type="Expire" placeholder="MM / YY" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridSecurityCode">
                        <Form.Label>
                        Security Code
                        </Form.Label>
                        <Form.Control type="SecurityCode" placeholder="***" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group id="formGridCheckbox">
                    <label>
                    <input type="checkbox" ref="shipping" onChange={this.handleChecked} />
                    <span> Shipping($6)</span>
                    <p className="collection-item"><b>Total: ${this.props.total}</b></p>
                    </label>
                    </Form.Group>

                    <Link to="/completed">
                    <Button variant="danger" type="submit">
                        Pay
                    </Button>
                    </Link>
                    </Form>
                </div>
            </div>

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