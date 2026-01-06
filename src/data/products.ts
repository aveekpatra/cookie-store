export interface Product {
    id: string;
    name: string;
    price: number;
    category: 'torte' | 'rezine' | 'piskoti' | 'testenine';
    image: string;
    description?: string;
}

export const allProducts: Product[] = [
    // Torte
    { id: 'torta-porocna', name: 'Poročna torta', price: 89.99, category: 'torte', image: '/images/item-cake-wedding.png', description: 'Elegantna večnadstropna poročna torta' },
    { id: 'torta-otroska', name: 'Otroška torta', price: 45.99, category: 'torte', image: '/images/item-cake-kids.png', description: 'Zabavna torta za otroške rojstne dneve' },
    { id: 'torta-krst', name: 'Torta za krst', price: 55.99, category: 'torte', image: '/images/item-cake-baptism.png', description: 'Nežna torta za sveti krst' },
    { id: 'torta-rojstnodnevna', name: 'Rojstnodnevna torta', price: 49.99, category: 'torte', image: '/images/item-cake-birthday.png', description: 'Praznična torta za rojstni dan' },
    { id: 'torta-birma', name: 'Torta za birmo', price: 59.99, category: 'torte', image: '/images/menu-cakes.png', description: 'Elegantna torta za birmo in obhajilo' },
    { id: 'torta-obletnica', name: 'Jubilejna torta', price: 65.99, category: 'torte', image: '/images/menu-cakes.png', description: 'Posebna torta za obletnice' },

    // Rezine
    { id: 'rezina-krem', name: 'Kremšnita', price: 4.50, category: 'rezine', image: '/images/item-slice-cream.png', description: 'Klasična blejska kremšnita' },
    { id: 'rezina-cokolada', name: 'Čokoladna rezina', price: 4.99, category: 'rezine', image: '/images/item-slice-choco.png', description: 'Bogata čokoladna rezina' },
    { id: 'rezina-sadna', name: 'Sadna rezina', price: 5.50, category: 'rezine', image: '/images/menu-pastries.png', description: 'Sveža sadna rezina s sezonskim sadjem' },
    { id: 'rezina-tiramisu', name: 'Tiramisu', price: 5.99, category: 'rezine', image: '/images/menu-pastries.png', description: 'Italijanski tiramisu' },
    { id: 'rezina-grmada', name: 'Grmada', price: 4.99, category: 'rezine', image: '/images/menu-pastries.png', description: 'Tradicionalna slovenska grmada' },

    // Piškoti
    { id: 'piskoti-mesani', name: 'Mešani piškoti (1kg)', price: 24.99, category: 'piskoti', image: '/images/menu-cookies.png', description: 'Mešanica najboljših domačih piškotov' },
    { id: 'piskoti-linzer', name: 'Linška očesa', price: 12.99, category: 'piskoti', image: '/images/menu-cookies.png', description: 'Klasični linški piškoti z marmelado' },
    { id: 'piskoti-orehovi', name: 'Orehovi rogljiči', price: 14.99, category: 'piskoti', image: '/images/menu-cookies.png', description: 'Hrustljavi orehovi rogljiči' },
    { id: 'piskoti-kokos', name: 'Kokosovi obročki', price: 11.99, category: 'piskoti', image: '/images/menu-cookies.png', description: 'Sladki kokosovi obročki' },
    { id: 'piskoti-cokoladne', name: 'Čokoladne palčke', price: 13.99, category: 'piskoti', image: '/images/menu-cookies.png', description: 'Čokoladne palčke v temni čokoladi' },

    // Testenine
    { id: 'testenine-rezanci', name: 'Domači rezanci', price: 6.99, category: 'testenine', image: '/images/menu-pasta.png', description: 'Ročno izdelani jajčni rezanci' },
    { id: 'testenine-skoljke', name: 'Jajčne školjke', price: 7.49, category: 'testenine', image: '/images/menu-pasta.png', description: 'Domače jajčne školjke' },
    { id: 'testenine-svederci', name: 'Jajčni svederci', price: 6.99, category: 'testenine', image: '/images/menu-pasta.png', description: 'Spiralni jajčni svederci' },
    { id: 'testenine-zvezdice', name: 'Jajčne zvezdice', price: 5.99, category: 'testenine', image: '/images/menu-pasta.png', description: 'Male jajčne zvezdice za juho' },
];

export const categories = [
    { id: 'torte', name: 'Torte' },
    { id: 'rezine', name: 'Rezine' },
    { id: 'piskoti', name: 'Piškoti' },
    { id: 'testenine', name: 'Testenine' },
] as const;

export type CategoryId = typeof categories[number]['id'];
