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
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.img} alt={product.title} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>
                                    <>
                                    <b>Type:{product.type}</b>
                                    <>{product.desc}</>
                                    <>Price: ${product.price}</>
                                    </>
                                </Card.Text>
                            <Button variant="primary" onClick={() => {handleClick(product.id)}}>Add to cart</Button>
                        </Card.Body>
                    </Card>
                </div>
            
            )

        });

        return (
            <div className="homeBody">
                <div className="title">
                    This is the shopping page
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