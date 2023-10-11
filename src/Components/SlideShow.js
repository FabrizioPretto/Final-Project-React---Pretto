import './SlideShow.css'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function SlideShow() {

    return (
        <Carousel id='Carousel' variant='dark' pause='hover' >
            {/* First Slide */}
            <Carousel.Item id='item1' >
                <Link to={`/category/Beata`}>
                    <img
                        id='Beata'
                        className='Left'
                        src="https://cdn.shopify.com/s/files/1/0287/0322/7979/files/beata_1c3e9fe4-4ffc-4211-8845-c3aacc22cad1_400x.jpg?v=1629207719"
                        alt="Beata"
                    />
                </Link>
                <Link to={`/category/Strange Brewing`}>
                    <img
                        id='Strange_Brewing'
                        className='Right'
                        src="https://cdn.shopify.com/s/files/1/0287/0322/7979/files/Strange_421b8470-02d5-40e6-8742-ca924a1cb904_400x.jpg?v=1628517667"
                        alt="Strange Brewing"
                    />
                </Link>
                <Carousel.Caption>
                    <h3>Accedé a nuestras mejores marcas</h3>
                </Carousel.Caption>
            </Carousel.Item>
            {/* Second Slide */}
            <Carousel.Item id='item2'>
                <Link to={`/category/Baba`}>
                    <img
                        className='Left'
                        src="https://cdn.shopify.com/s/files/1/0287/0322/7979/files/baba_08a08510-a2f1-4d75-a570-7f9d9fc6eb7a_400x.jpg?v=1628517796"
                        alt="Baba"
                    />
                </Link>
                <Link to={`/category/Bierhaus`}>
                    <img
                        className='Right'
                        src="https://cdn.shopify.com/s/files/1/0287/0322/7979/files/Bierhaus_53d6a2a5-9909-4ff9-8a6b-ce479e5459f3_400x.jpg?v=1628517821"
                        alt="Bierhaus"
                    />
                </Link>
                <Carousel.Caption>
                    <h3>Accedé a nuestras mejores marcas</h3>
                </Carousel.Caption>
            </Carousel.Item>
            {/* Third Slide */}
            <Carousel.Item id='item3'>
                <Link to={`/category/Peñón del Águila`}>
                    <img
                        className='Left'
                        src="https://cdn.shopify.com/s/files/1/0287/0322/7979/files/penon_3137c5a7-2c3b-442f-9774-dd5c331165b2_400x.jpg?v=1628517855"
                        alt="Peñón del Águila"
                    />
                </Link>
                <Link to={`/category/Astor`}>
                    <img
                        className='Right'
                        src="https://cdn.shopify.com/s/files/1/0287/0322/7979/files/Astor_06f8a4d7-2cba-481e-9ae5-bdd2de9c978c_400x.jpg?v=1628517888"
                        alt="Astor"
                    />
                </Link>
                <Carousel.Caption>
                    <h3>Accedé a nuestras mejores marcas</h3>
                </Carousel.Caption>
            </Carousel.Item>
            {/* Fourth Slide */}
            <Carousel.Item id='item4'>
                <Link to={`/category/Kraken`}>
                    <img
                        className='Left'
                        src="https://cdn.shopify.com/s/files/1/0287/0322/7979/products/kraken_900x.jpg?v=1613143285"
                        alt="Kraken"
                    />
                </Link>
                <Link to={`/category/Mur`}>
                    <img
                        className='Right'
                        src="https://cdn.shopify.com/s/files/1/0287/0322/7979/files/mur_f11958fb-09aa-420a-aa99-c11e62716ccd_400x.jpg?v=1628517697"
                        alt="Mur"
                    />
                </Link>
                <Carousel.Caption>
                    <h3>Accedé a nuestras mejores marcas</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default SlideShow;