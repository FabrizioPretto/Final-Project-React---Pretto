import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const OrderButton = () => {

    const [order, setOrder] = useState("initial");

    return (//align="start"
        <>
            <DropdownButton title="ORDENAR" id="dropdown-menu-align-end">
                <Dropdown.Item href={`/orderBy/${order}`} onClick={() => { setOrder("minPrice") }}>Por Menor Precio</Dropdown.Item>
                <Dropdown.Item href={`/orderBy/${order}`} onClick={() => { setOrder("maxPrice") }}>Por Mayor Precio</Dropdown.Item>
                <Dropdown.Item href={`/orderBy/${order}`} onClick={() => { setOrder("alphabetic") }}>Por Orden Alfabético</Dropdown.Item>
            </DropdownButton>
        </>
    );
}

export default OrderButton;
