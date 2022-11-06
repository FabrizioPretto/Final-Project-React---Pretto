import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const OrdenarButton = () => {
    return (
        <>
            <DropdownButton align="start" title="ORDENAR" id="dropdown-menu-align-end" style={{ marginTop: '20px', marginRight: '1180px' }}>
                <Dropdown.Item eventKey="1">Por Menor Precio</Dropdown.Item>
                <Dropdown.Item eventKey="2">Por Mayor Precio</Dropdown.Item>
                <Dropdown.Item eventKey="3">Por Orden Alfabético</Dropdown.Item>
            </DropdownButton>
        </>
    );
}

export default OrdenarButton;

