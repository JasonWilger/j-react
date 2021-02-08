import './completed.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Completed = () => {

    return (
        <div className="completedPage">
            <div className="completedTitle">
                Your order is being processed!
            </div>

            <div className="completedSub">
                Now sit back and relax while we take care of the rest.
            </div>
            <Link to="/" style={{ textDecoration: 'none' }} className="backHome">
                <Button variant="danger">Home!</Button>
            </Link>
        </div>
    )

};


export default Completed;