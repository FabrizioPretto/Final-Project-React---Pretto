
const Beers = [
    {
        "Id": 1,
        "Nombre": "VULCANO RED IPA",
        "Descripción": "Cerveza de cuerpo ligero con notas de caramelo, grano tostado, cítricos y lúpulos frutales. Pariente cercana de la SuperStar",
        "ABV": "6,5%",
        "Precio": 395,
        "Stock": 6,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/Bierhaus-RedIPA_e8809469-6b3f-44eb-a024-4c8b98840ec6_720x.jpg?v=1625258611",
        "Brewery": "Bierhaus"
    },
    {
        "Id": 2,
        "Nombre": "AMERICAN IPA",
        "Descripción": "Con lúpulos Idaho 7, Centennial y Simcoe. Con aromas frutales, donde su amargor se balancea con el soporte de maltas. Sabor intenso en boca resinoso, tropical y cítrico, dejando un final fresco",
        "ABV": "6,5%",
        "Precio": 720,
        "Stock": 4,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/Astor-AIpa_997d7ae1-7472-426e-a8f3-ebb5d28d02e5_720x.jpg?v=1613067713",
        "Brewery": "Astor"
    },
    {
        "Id": 3,
        "Nombre": "MYSTIC NEIPA",
        "Descripción": "Una sopa de lúpulo, de color dorado pálido y de turbidez alta. En aroma se perciben notas a ananá, durazno, maracuyá y naranja. En boca es pulposa y refrescante, por el agregado de avena y trigo. Lúpulos: Mosaic, Citra, Idaho 7 y Bravo",
        "ABV": "6%",
        "Precio": 550,
        "Stock": 6,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/Baba-Neipa-LATA_ef6c0891-380a-474e-aef4-af9a62a896ba_720x.jpg?v=1613079208",
        "Brewery": "Baba"
    },
    {
        "Id": 4,
        "Nombre": "RED IPA",
        "Descripción": "Cerveza de color oscuro rubí y espuma cremosa. Su aroma frutal, proveniente de los lúpulos americanos agregados en dry-hop y de los ésteres producidos durante la fermentación, se balancea con el dulce aroma de las maltas tostadas. En boca presenta un cuerpo robusto y un amargor intenso que lo equilibra.",
        "ABV": "6%",
        "Precio": 440,
        "Stock": 8,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/Baba-RedIpa-LATA_1dbb6f0b-1661-4ccc-8383-ef1b90d3ccc5_720x.jpg?v=1613079392",
        "Brewery": "Baba"
    },
    {
        "Id": 5,
        "Nombre": "TRIPPIN IPA",
        "Descripción": "Una IPA viajera, para tomar en cualquier momento y en cualquier lugar. Tiene un aroma intenso, con notas a mango, pomelo y ananá, que nos transportan a un mundo mejor. De cuerpo medio y amargor equilibrado, con doble dryhop de lúpulos ekuanot, sincoe, amarillo y mosaic",
        "ABV": "6%",
        "Precio": 480,
        "Stock": 6,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/Baba-TripIpa_3b66b411-92ea-4f35-8eb9-7190ade1f503_720x.jpg?v=1613079460",
        "Brewery": "Baba"
    },
    {
        "Id": 6,
        "Nombre": "AMERICAN IPA",
        "Descripción": "Cerveza rubia de intenso sabor y aroma a frutas cítricas y tropicales aportado por el agregado de lúpulos americanos. Su paso por boca, con cuerpo medio, delata sabor a naranja, mango, ananá y maracuyá, balanceados con un amargor medio alto y un final seco y refrescante que invita a seguir disfrutándola",
        "ABV": "6,2%",
        "Precio": 495,
        "Stock": 8,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/BeataA-Ipa_da0ab7ec-6393-4679-8c68-b0eb65a0ac1b_720x.jpg?v=1613079888",
        "Brewery": "Beata"
    },
    {
        "Id": 7,
        "Nombre": "SUPERSTAR IPA",
        "Descripción": "La Superstar es la especialidad de la casa. Una estrella de intenso amargor con fragancia a lúpulos cítricos y frutales, que te van a llevar a otro planeta. Si hay vida ahí afuera, seguro va a querer una de estas",
        "ABV": "5,7%",
        "Precio": 395,
        "Stock": 8,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/BierhausIpaSuperstar_42b5bfee-9d34-406b-98b5-2ce7de4c1603_720x.jpg?v=1613080433",
        "Brewery": "Bierhaus"
    },
    {
        "Id": 8,
        "Nombre": "AMERICAN IPA",
        "Descripción": "Cerveza color dorado intenso. En nariz es una explosión de aromas cítricos y de frutas tropicales típico de lúpulos americanos. En boca, sensación refrescante y final seco. De alta tomabilidad",
        "ABV": "6,5%",
        "Precio": 480,
        "Stock": 6,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/Kraken-AIPA_47ece0d5-348b-43e9-94a8-32eec16d3128_720x.jpg?v=1613143273",
        "Brewery": "Kraken"
    },
    {
        "Id": 9,
        "Nombre": "INSOLENTE SESSION IPA",
        "Descripción": "Manteniendo el blend de lúpulos que le aportan su característico perfil tropical, la fermentamos con levadura inglesa",
        "ABV": "4.9%",
        "Precio": 590,
        "Stock": 8,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/Mur-SessionIpa_fbc70f45-26b5-43a2-8053-70755e86f041_720x.jpg?v=1613144889",
        "Brewery": "Mur"
    },
    {
        "Id": 10,
        "Nombre": "IPA BETA",
        "Descripción": "Peñón nos propone una IPA que irá mutando lote a lote, en búsqueda de la IPA ideal. Parte de una AMERICAN IPA clásica (5,9% de alcohol, 50 IBUs, perfil limpio de maltas y protagonismo total del lúpulo)",
        "ABV": "5,9%",
        "Precio": 370,
        "Stock": 10,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/Penon-IPAbeta_1c9e7553-df56-43d3-bc5e-2f5c989d74b0_720x.jpg?v=1613145180",
        "Brewery": "Peñón del Águila"
    },
    {
        "Id": 11,
        "Nombre": "CITRA A CIEGAS",
        "Descripción": "NEIPA que rebalsa de notas a frutos de carozo, ananá y frutas tropicales maduras",
        "ABV": "6,5%",
        "Precio": 915,
        "Stock": 2,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/Strange-CitraCiegas_dc19c02e-b7e1-492a-86b6-e68693d4ec48_720x.jpg?v=1613147408",
        "Brewery": "Strange Brewing"
    },
    {
        "Id": 12,
        "Nombre": "MACEDONIA MINI NEIPA",
        "Descripción": "Una NEIPA de gran tomabilidad. Bienvenidos a esta macedonia de frutas, el postre que se repite",
        "ABV": "5%",
        "Precio": 655,
        "Stock": 6,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/Mur-Neipa_c5243fea-4691-4ecf-9e4a-1c6bd3989b65_720x.jpg?v=1614195937",
        "Brewery": "Mur"
    },

]

export function getBeers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Beers);
        }, 2000);
    });
}
