import OrderButton from "./OrderButton";
import Subscribe from "./Subscribe";
import Nav from 'react-bootstrap/Nav';
import { Container, Row, Col } from "react-bootstrap";
import './SubHeader.css';

const SubHeader = () => {
    return (//fluid="md">   Row className="justify-content-md-center"
        <Container>
            <Row style={{ backgroundColor: 'orange' }}>
                <Col md style={{ textAlign: 'left' }}><OrderButton /></Col>
                <Col lg={7} style={{ textAlign: 'right', backgroundColor: 'red' }} ><Subscribe /></Col>
            </Row>
        </Container>
    );
}

export default SubHeader;

/*
<Col sm={0} style={{ textAlign: 'left' }}><OrderButton /></Col>
<Col sm={8} style={{ textAlign: 'right' }} ><Subscribe /></Col>
*/

/*
style={{
                display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-between'
            }}

<ul id="subHeaderList">
                <li id="orderButton"><OrderButton /></li>
                <li id="suscribe"><Subscribe /></li>
            </ul>

*/


/*
style={{
            display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 'auto',
            marginRight: 'auto', alignItems: 'baseline', marginTop: '20px', width: '1300px', height: '50px'
        }}>
*/

/*
marginLeft: 'auto',
                marginRight: 'auto', 
*/

/*
display: flex;
flex - flow: row wrap;
justify - content: flex - end;
*/