
import { useParams } from "react-router-dom";

const Beers = [
    {
        "Id": 1,
        "Nombre": "VULCANO RED IPA",
        "Descripción": "Cerveza de cuerpo ligero con notas de caramelo, grano tostado, cítricos y lúpulos frutales. Pariente cercana de la SuperStar.",
        "Abv": "6,5%",
        "Precio": 395,
        "Stock": 6,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/Bierhaus-RedIPA_e8809469-6b3f-44eb-a024-4c8b98840ec6_720x.jpg?v=1625258611",
        "Brewery": "Bierhaus"
    },
    {
        "Id": 2,
        "Nombre": "AMERICAN IPA",
        "Descripción": "Con lúpulos Idaho 7, Centennial y Simcoe. Con aromas frutales, donde su amargor se balancea con el soporte de maltas. Sabor intenso en boca resinoso, tropical y cítrico, dejando un final fresco.",
        "Abv": "6,5%",
        "Precio": 720,
        "Stock": 4,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/Astor-AIpa_997d7ae1-7472-426e-a8f3-ebb5d28d02e5_720x.jpg?v=1613067713",
        "Brewery": "Astor"
    },
    {
        "Id": 3,
        "Nombre": "MYSTIC NEIPA",
        "Descripción": "Una sopa de lúpulo, de color dorado pálido y de turbidez alta. En aroma se perciben notas a ananá, durazno, maracuyá y naranja. En boca es pulposa y refrescante, por el agregado de avena y trigo. Lúpulos: Mosaic, Citra, Idaho 7 y Bravo.",
        "Abv": "6%",
        "Precio": 550,
        "Stock": 6,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/Baba-Neipa-LATA_ef6c0891-380a-474e-aef4-af9a62a896ba_720x.jpg?v=1613079208",
        "Brewery": "Baba"
    },
    {
        "Id": 4,
        "Nombre": "RED IPA",
        "Descripción": "Cerveza de color oscuro rubí y espuma cremosa. Su aroma frutal, proveniente de los lúpulos americanos agregados en dry-hop y de los ésteres producidos durante la fermentación, se balancea con el dulce aroma de las maltas tostadas. En boca presenta un cuerpo robusto y un amargor intenso que lo equilibra.",
        "Abv": "6%",
        "Precio": 440,
        "Stock": 8,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/Baba-RedIpa-LATA_1dbb6f0b-1661-4ccc-8383-ef1b90d3ccc5_720x.jpg?v=1613079392",
        "Brewery": "Baba"
    },
    {
        "Id": 5,
        "Nombre": "TRIPPIN IPA",
        "Descripción": "Una IPA viajera, para tomar en cualquier momento y en cualquier lugar. Tiene un aroma intenso, con notas a mango, pomelo y ananá, que nos transportan a un mundo mejor. De cuerpo medio y amargor equilibrado, con doble dryhop de lúpulos ekuanot, sincoe, amarillo y mosaic.",
        "Abv": "6%",
        "Precio": 480,
        "Stock": 6,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/Baba-TripIpa_3b66b411-92ea-4f35-8eb9-7190ade1f503_720x.jpg?v=1613079460",
        "Brewery": "Baba"
    },
    {
        "Id": 6,
        "Nombre": "AMERICAN IPA",
        "Descripción": "Cerveza rubia de intenso sabor y aroma a frutas cítricas y tropicales aportado por el agregado de lúpulos americanos. Su paso por boca, con cuerpo medio, delata sabor a naranja, mango, ananá y maracuyá, balanceados con un amargor medio alto y un final seco y refrescante que invita a seguir disfrutándola.",
        "Abv": "6,2%",
        "Precio": 495,
        "Stock": 8,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/BeataA-Ipa_da0ab7ec-6393-4679-8c68-b0eb65a0ac1b_720x.jpg?v=1613079888",
        "Brewery": "Beata"
    },
    {
        "Id": 7,
        "Nombre": "SUPERSTAR IPA",
        "Descripción": "La Superstar es la especialidad de la casa. Una estrella de intenso amargor con fragancia a lúpulos cítricos y frutales, que te van a llevar a otro planeta. Si hay vida ahí afuera, seguro va a querer una de estas.",
        "Abv": "5,7%",
        "Precio": 395,
        "Stock": 8,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/BierhausIpaSuperstar_42b5bfee-9d34-406b-98b5-2ce7de4c1603_720x.jpg?v=1613080433",
        "Brewery": "Bierhaus"
    },
    {
        "Id": 8,
        "Nombre": "AMERICAN IPA",
        "Descripción": "Cerveza color dorado intenso. En nariz es una explosión de aromas cítricos y de frutas tropicales típico de lúpulos americanos. En boca, sensación refrescante y final seco. De alta tomabilidad.",
        "Abv": "6,5%",
        "Precio": 480,
        "Stock": 6,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/Kraken-AIPA_47ece0d5-348b-43e9-94a8-32eec16d3128_720x.jpg?v=1613143273",
        "Brewery": "Kraken"
    },
    {
        "Id": 9,
        "Nombre": "INSOLENTE SESSION IPA",
        "Descripción": "Manteniendo el blend de lúpulos que le aportan su característico perfil tropical, la fermentamos con levadura inglesa.",
        "Abv": "4.9%",
        "Precio": 590,
        "Stock": 8,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/Mur-SessionIpa_fbc70f45-26b5-43a2-8053-70755e86f041_720x.jpg?v=1613144889",
        "Brewery": "Mur"
    },
    {
        "Id": 10,
        "Nombre": "IPA BETA",
        "Descripción": "Peñón nos propone una IPA que irá mutando lote a lote, en búsqueda de la IPA ideal. Parte de una AMERICAN IPA clásica (5,9% de alcohol, 50 IBUs, perfil limpio de maltas y protagonismo total del lúpulo).",
        "Abv": "5,9%",
        "Precio": 370,
        "Stock": 10,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/Penon-IPAbeta_1c9e7553-df56-43d3-bc5e-2f5c989d74b0_720x.jpg?v=1613145180",
        "Brewery": "Peñón del Águila"
    },
    {
        "Id": 11,
        "Nombre": "CITRA A CIEGAS",
        "Descripción": "NEIPA que rebalsa de notas a frutos de carozo, ananá y frutas tropicales maduras.",
        "Abv": "6,5%",
        "Precio": 915,
        "Stock": 2,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/Strange-CitraCiegas_dc19c02e-b7e1-492a-86b6-e68693d4ec48_720x.jpg?v=1613147408",
        "Brewery": "Strange Brewing"
    },
    {
        "Id": 12,
        "Nombre": "MACEDONIA MINI NEIPA",
        "Descripción": "Una NEIPA de gran tomabilidad. Bienvenidos a esta macedonia de frutas, el postre que se repite.",
        "Abv": "5%",
        "Precio": 655,
        "Stock": 6,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/Mur-Neipa_c5243fea-4691-4ecf-9e4a-1c6bd3989b65_720x.jpg?v=1614195937",
        "Brewery": "Mur"
    },
    {
        "Id": 13,
        "Nombre": "MISTERIO DO PLANETA",
        "Descripción": "Una cerveza inspirada en la costa Este de Estados Unidos. Una NEIPA elaborada con lúpulos idaho 7, pahto, sabro, simcoe, ctz y rakau.",
        "Abv": "7%",
        "Precio": 810,
        "Stock": 6,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/Astor-MisterioNeipa_720x.jpg?v=1624846641",
        "Brewery": "Astor"
    },
    {
        "Id": 14,
        "Nombre": "MODERN MAN",
        "Descripción": "Una refrescante kettle sour con agregado de hibiscos (Hibiscus sabdariffa), guayaba rosada, salpimentada con pulpa de lima y jengibre.",
        "Abv": "3%",
        "Precio": 690,
        "Stock": 8,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/Astor-ModernMan_720x.jpg?v=1661868611",
        "Brewery": "Astor"
    },
    {
        "Id": 15,
        "Nombre": "GOLDFISH GOLDEN",
        "Descripción": "Dorada por dentro y por fuera, la Goldfish es una cerveza ligera y refrescante, de cuerpo liviano, aroma frutado y leve sabor cítrico.",
        "Abv": "4,5%",
        "Precio": 325,
        "Stock": 12,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/Bierhaus-Golden_8ba33487-2a0c-4852-8b8c-ab18d78bfa84_720x.jpg?v=1613080286",
        "Brewery": "Bierhaus"
    },
    {
        "Id": 16,
        "Nombre": "BEATA NEIPA",
        "Descripción": "De apariencia turbia pero sedosa como pocas: esa complejidad atractiva que tanto seduce. Lúpulo, lúpulo y un poco más de lúpulo en una birra con cuerpo y con final pleno.",
        "Abv": "7%",
        "Precio": 650,
        "Stock": 6,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/BeataNEIPA_720x.jpg?v=1652369300",
        "Brewery": "Beata"
    },
    {
        "Id": 17,
        "Nombre": "AMERICAN PILS",
        "Descripción": "Cerveza lager, de fermentación baja. Rubia, lupulada y con alta tomabilidad. Perfiles a pomelo, naranja y melón. En boca toma protagonismo el sabor a malta, recordándonos sabor a grano ty corteza de pan balanceado con el perfil de los lúpulos americanos. Final pleno y moderadamente amargo.",
        "Abv": "5.2%",
        "Precio": 480,
        "Stock": 12,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/BeataA-Pils_5ef375d0-378e-4f41-8ad6-6de20413863f_720x.jpg?v=1613079966",
        "Brewery": "Beata"
    },
    {
        "Id": 18,
        "Nombre": "IRISH STOUT",
        "Descripción": "Cerveza bien oscura con agradables sabores tostados y de final seco. En aroma, las maltas oscuras aparecen como café recién molido. De espuma color canela y sensación cremosa en boca.",
        "Abv": "4,6%",
        "Precio": 380,
        "Stock": 12,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/Kraken-IrishStout_3532b9ff-6cbc-4828-a22f-16919310d983_720x.jpg?v=1613143466",
        "Brewery": "Kraken"
    },
    {
        "Id": 19,
        "Nombre": "LA NIÑA SESSION IPA",
        "Descripción": "Cerveza dorada, con aroma cítrico y de frutas tropicales. El cuerpo medio, el final seco y la baja graduación alcohólica hacen de La Niña una cerveza muy refrescante. En esta versión, los lúpulos utilizados son Bravo, Columbus y Cascade.",
        "Abv": "4,9%",
        "Precio": 420,
        "Stock": 12,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/Kraken-SessionIpa_e9aeeae9-424c-4e6f-9735-6b3209c5a5d4_720x.jpg?v=1613999299",
        "Brewery": "Kraken"
    },
    {
        "Id": 20,
        "Nombre": "ATOLONDRADA",
        "Descripción": "Una pausa reflexiva en esta permanente y desquiciada rutina. Una cerveza color rubí, de amargor suave y cuerpo ligero. Un perfecto ejemplo de equilibrio entre malta y lúpulo. En aroma y sabor se perciben notas a frutas de carozo, pasas, cítricos y florales.",
        "Abv": "5,3%",
        "Precio": 565,
        "Stock": 9,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/Mur-ATOLONDRADA-AAA_720x.jpg?v=1624891679",
        "Brewery": "Mur"
    },
    {
        "Id": 21,
        "Nombre": "SESSION IPA BAZINGA",
        "Descripción": "El término “Session” se utiliza para describir cervezas diseñadas específicamente para poder ser disfrutadas en largas sesiones, por ende se caracterizan por tener menor contenido alcoholico y mayor tomabilidad. La Session IPA de Peñón tiene una base de la más delicada malta Pilsen Argentina, sobre el cual dos de los lúpulos americanos más aclamados, como lo son el Citra y el Mosaic, lanzan pinceladas cargadas de aromas y sabores frutados, cítricos y tropicales.",
        "Abv": "4,8%",
        "Precio": 370,
        "Stock": 16,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/Penon-SessionIPA-Bazinga_720x.jpg?v=1645193201",
        "Brewery": "Peñón del Águila"
    },
    {
        "Id": 22,
        "Nombre": "MEXICAN LAGER",
        "Descripción": "Liviana, ligera y fácil de tomar, posee entre sus ingredientes trigo y sémola de maíz lo que le aporta un dulzor interesante, perceptible en boca pero que no empalaga. La misma es ideal para acompañar ensaladas y carnes blancas. Amigable al paladar y excelente compañera para una tarde veraniega con amigos, la Mexican Lager es perfecta para quienes aún no logran animarse a las cervezas artesanales.",
        "Abv": "4,6%",
        "Precio": 295,
        "Stock": 16,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/Penon-MexicanLager_720x.jpg?v=1645193810",
        "Brewery": "Peñón del Águila"
    },
    {
        "Id": 23,
        "Nombre": "ALMA GORDA",
        "Descripción": "Exuberante delicia checa. Inconfundible sabor a la corteza del pan recién horneado y un carácter lupulado tan herbal como fresco. Crocante, sequita, maltosa y acaramelada.",
        "Abv": "4,8%",
        "Precio": 550,
        "Stock": 8,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/SirHopper-AlmaGorda_720x.jpg?v=1661523179",
        "Brewery": "Strange Brewing"
    },
    {
        "Id": 24,
        "Nombre": "FIESTA DE FOCAS",
        "Descripción": "Una Helles con un extra de fiesta. Rubia, cristalina, maltosa; notas a pan y miel. Si estuvieses en el Oktoberfest, ésta sería tu mamadera.",
        "Abv": "5,9%",
        "Precio": 550,
        "Stock": 8,
        "Imagen": "https://cdn.shopify.com/s/files/1/0287/0322/7979/products/Strange-Focas_720x.jpg?v=1658425769",
        "Brewery": "Strange Brewing"
    },

]

export function getBeers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Beers);
        }, 1000);
    });

}