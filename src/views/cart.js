import React from 'react';
import '../views/cart.css';
import {Card, Button} from 'react-bootstrap';
import { connect } from 'react-redux'
import { removeProduct,addQuantity,subtractQuantity } from '../components/actions/cartActions'


const CartPage = (props) => {

        console.log(props);

    const handleRemove = (id) => {

        props.removeProduct(id);

    }
    const handleAddQuantity = (id) => {

        props.addQuantity(id);

    }   
    const handleSubtractQuantity = (id) => {

        props.subtractQuantity(id);

    }

        let addedProducts = props.products.length ? (

            props.products.map(product => {

                return(

                    <div className="productCards" key={product.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={product.img} alt={product.title} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>
                                        <>
                                        <b>{product.type}</b>
                                        <p>{product.desc}</p>
                                        <p>Price: ${product.price}</p>
                                        <p>Quantity: {product.quantity}</p>
                                        </>
                                    </Card.Text>
                                    <div className="manageCart">
                                    <Button variant="primary" size="lg" active onClick={() => {handleAddQuantity(product.id)}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                        </svg>
                                    </Button>
                                    <Button variant="primary" size="lg" active onClick={() => {handleSubtractQuantity(product.id)}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                        </svg>
                                    </Button>
                                    </div>
                                    <Button variant="primary" size="lg" active onClick={() => {handleRemove(product.id)}}>
                                        Remove
                                    </Button>
                            </Card.Body>
                        </Card>
                    </div>
                )

            })
        ):
        (
            <div className="emptyCart">
                <h1> You need to add some items to your cart!</h1>
                    <img className="emptyImg"
                    src="https://image.freepik.com/free-photo/full-length-portrait-happy-man-running_171337-2332.
                    https://image.freepik.com/free-photo/full-length-portrait-cheerful-man-jumping_171337-2331.jpg" 
                    alt="empty-cart" 
                    />
            </div>
        )
        return (
            <div className="cartBody">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="cartSection">
                        {addedProducts}
                    </ul>
                </div>      
            </div>

        )
    }


const mapStateToProps = (state) => {
    console.log(state);
    return {
        products: state.addedProducts
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        removeProduct: (id) => {dispatch(removeProduct(id))},
        addQuantity: (id) => {dispatch(addQuantity(id))},
        subtractQuantity: (id) => {dispatch(subtractQuantity(id))}
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
