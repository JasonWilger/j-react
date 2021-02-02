import React from 'react';
import '../views/home.css';
import {Card, Button} from 'react-bootstrap';
import { connect } from 'react-redux'
import { addToCart } from '../components/actions/cartActions'


const HomePage = (props) => { 

    const handleClick = (id) => {
        props.addToCart(id); 
        console.log(id);
    }
        let productList = props.products.map(product => {

            return (
            
                <div className="productCards" key={product.id}>
                    <Card className="card" style={{ width: '18rem' }}>
                        <Card.Img className="image" variant="top" src={product.img} alt={product.title} />
                            <Card.Body className="cardBody">
                                <Card.Title className="title">{product.title}</Card.Title>
                                    <Card.Text className="text">
                                    <>
                                    <p><b>Type: {product.type}</b></p>
                                    <p>{product.desc}</p>
                                    <p>Price: ${product.price}</p>
                                    </>
                                </Card.Text>
                            <Button variant="" onClick={() => {handleClick(product.id)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="red" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                            </svg>
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            
            )

        });

        return (
            <div className="homeBody">
                <div className="homeTitle">
                    Our Selection
                </div>
                <div className="cardSection">
                    {productList}
                </div>
            </div>
        );

    };


const mapStateToProps = (state) => {

    return {
      products: state.products
    }
};

const mapDispatchToProps = (dispatch) => {

    return {

        addToCart:(id) => {dispatch(addToCart(id))}

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
