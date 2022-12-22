import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function SlideShow() {
    return (
        <Carousel variant='dark' style={{ marginLeft: 'auto', marginRight: 'auto', width: '1300px', height: '250px', marginTop: '20px' }}>
            {/* First Slide */}
            <Carousel.Item style={{ height: '250px' }}>
                <Link to={`/category/Beata`}>
                    <img
                        style={{ width: '300px', height: '150px' }}
                        src="https://cdn.shopify.com/s/files/1/0287/0322/7979/files/beata_1c3e9fe4-4ffc-4211-8845-c3aacc22cad1_400x.jpg?v=1629207719"
                        alt="Beata"
                    />
                </Link>
                <Link to={`/category/Strange Brewing`}>
                    <img
                        style={{ width: '300px', height: '150px', marginLeft: '20px' }}
                        src="https://cdn.shopify.com/s/files/1/0287/0322/7979/files/Strange_421b8470-02d5-40e6-8742-ca924a1cb904_400x.jpg?v=1628517667"
                        alt="Strange Brewing"
                    />
                </Link>
                <Carousel.Caption>
                    <h3>Accedé a nuestras mejores marcas</h3>
                </Carousel.Caption>
            </Carousel.Item>
            {/* Second Slide */}
            <Carousel.Item style={{ height: '250px' }}>
                <Link to={`/category/Baba`}>
                    <img
                        style={{ width: '300px', height: '150px', marginLeft: '20px' }}
                        src="https://cdn.shopify.com/s/files/1/0287/0322/7979/files/baba_08a08510-a2f1-4d75-a570-7f9d9fc6eb7a_400x.jpg?v=1628517796"
                        alt="Baba"
                    />
                </Link>
                <Link to={`/category/Bierhaus`}>
                    <img
                        style={{ width: '300px', height: '150px', marginLeft: '20px' }}
                        src="https://cdn.shopify.com/s/files/1/0287/0322/7979/files/Bierhaus_53d6a2a5-9909-4ff9-8a6b-ce479e5459f3_400x.jpg?v=1628517821"
                        alt="Bierhaus"
                    />
                </Link>
                <Carousel.Caption>
                    <h3>Accedé a nuestras mejores marcas</h3>
                </Carousel.Caption>
            </Carousel.Item>
            {/* Third Slide */}
            <Carousel.Item style={{ height: '250px' }}>
                <Link to={`/category/Peñón del Águila`}>
                    <img
                        style={{ width: '300px', height: '150px', marginLeft: '20px' }}
                        src="https://cdn.shopify.com/s/files/1/0287/0322/7979/files/penon_3137c5a7-2c3b-442f-9774-dd5c331165b2_400x.jpg?v=1628517855"
                        alt="Peñón del Águila"
                    />
                </Link>
                <Link to={`/category/Astor`}>
                    <img
                        style={{ width: '300px', height: '150px', marginLeft: '20px' }}
                        src="https://cdn.shopify.com/s/files/1/0287/0322/7979/files/Astor_06f8a4d7-2cba-481e-9ae5-bdd2de9c978c_400x.jpg?v=1628517888"
                        alt="Astor"
                    />
                </Link>
                <Carousel.Caption>
                    <h3>Accedé a nuestras mejores marcas</h3>
                </Carousel.Caption>
            </Carousel.Item>
            {/* Fourth Slide */}
            <Carousel.Item style={{ height: '250px' }}>
                <Link to={`/category/Kraken`}>
                    <img
                        style={{ width: '300px', height: '150px', marginLeft: '20px' }}
                        src="https://cdn.shopify.com/s/files/1/0287/0322/7979/products/kraken_900x.jpg?v=1613143285"
                        alt="Kraken"
                    />
                </Link>
                <Link to={`/category/Mur`}>
                    <img
                        style={{ width: '300px', height: '150px', marginLeft: '20px' }}
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