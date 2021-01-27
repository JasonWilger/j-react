import '../views/productPage.css';
import {Card, Button} from 'react-bootstrap';

const ProductPage = () => {
    return (
        <div className="productpage">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Product #1</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductPage;