import React from 'react'
import Item from './Item'

const ItemList = ({ items }) => {

    return (
        <>
            <div className="container d-flex justify-content-center aling-items-center h-180" >
                <div className="row" >
                    {items.map(item =>
                    (
                        <div className="col-md-3" key={item.Id} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                            <Item item={item} autofocus />
                        </div>
                    )
                    )}
                </div>
            </div>
        </>
    )
}

export default ItemList;