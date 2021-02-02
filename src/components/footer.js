import './footer.css';
import jLogo from '../components/j-logo.png';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const Footer = () => {

    return (

        <div className="footerBody">
            <div className="footerContent">
                <div className="footTitle">
                    this is the footer
                {/* <Accordion>
                    <Card className="accordBody">
                        <Card.Header>
                        <Accordion.Toggle className="toggleTitle" as={Button} variant="" eventKey="0">
                            Contact
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body className="toggleBody">
                            hgfdhgfdhgfdhgfdhgfdhgfdhgfdhgfdhf
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion> */}
                </div>
                <div className="social">
                    <div>
                        <a href="https://github.com/JasonWilger/j-react"><img src="https://img.icons8.com/carbon-copy/100/000000/github.png" alt="github"/></a>
                    </div>
                    <div>
                    <a href="https://jasonwilger.herokuapp.com/"><img className="jLogo" src={jLogo} alt={jLogo}/></a>
                    </div>
                    <div>
                    <a href="https://www.linkedin.com/in/jason-wilger/"><img src="https://img.icons8.com/carbon-copy/100/000000/linkedin.png" alt="linkedin"/></a>
                    </div>
                </div>
            </div>
        </div>

    );
  
}

export default Footer;